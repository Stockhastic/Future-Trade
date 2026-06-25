<?php
declare(strict_types=1);

// ------------------------------------------------------------------
// Конфигурация
// ------------------------------------------------------------------
$redirectSuccess = 'thankyou-ru.html';
$redirectError   = 'formtest.html';

$toEmail   = 'info@fttrade.am';
$fromEmail = 'no-reply@fttrade.am';
$fromName  = 'Future Trade';
$subject   = 'Заявка на обратную связь';

// ------------------------------------------------------------------
// Вспомогательные функции
// ------------------------------------------------------------------
function post_value(string $key): string
{
    return isset($_POST[$key]) ? trim((string)$_POST[$key]) : '';
}

function clean_single(string $value): string
{
    $sanitized = preg_replace('/[\r\n]+/', ' ', $value);
    return $sanitized === null ? '' : trim($sanitized);
}

function clean_multi(string $value): string
{
    $normalized = str_replace(["\r\n", "\r"], "\n", $value);
    $sanitized  = preg_replace("/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F]+/", '', $normalized);
    return $sanitized === null ? '' : trim($sanitized);
}

function redirect_with(string $target, array $params = []): void
{
    $query = $params ? ('?' . http_build_query($params, '', '&', PHP_QUERY_RFC3986)) : '';
    header('Location: ' . $target . $query, true, 303);
    exit;
}

// ------------------------------------------------------------------
// Основная логика
// ------------------------------------------------------------------
if (($_SERVER['REQUEST_METHOD'] ?? '') !== 'POST') {
    redirect_with($redirectError);
}

// Honeypot — скрытое поле для отсечения ботов
if (post_value('hp') !== '') {
    redirect_with($redirectSuccess, ['status' => 'success']);
}

$fullName = clean_single(post_value('full_name'));
$phone    = clean_single(post_value('phone'));
$emailRaw = post_value('email');
$message  = clean_multi(post_value('message'));

$errors = [];

if ($fullName === '') {
    $errors[] = 'Укажите, пожалуйста, ваше имя.';
}

if ($phone === '') {
    $errors[] = 'Укажите номер телефона для связи.';
}

$email = '';
if ($emailRaw !== '') {
    $validEmail = filter_var($emailRaw, FILTER_VALIDATE_EMAIL);
    if (!$validEmail || preg_match('/[\r\n]/', $emailRaw)) {
        $errors[] = 'Проверьте корректность e-mail.';
    } else {
        $email = $validEmail;
    }
}

if ($errors) {
    redirect_with($redirectError, [
        'status'  => 'validation',
        'message' => implode(' ', $errors),
    ]);
}

$lines = [
    'Имя: ' . $fullName,
    'Телефон: ' . $phone,
    'E-mail: ' . ($email !== '' ? $email : 'не указан'),
];

if ($message !== '') {
    $lines[] = "Комментарий:\n" . $message;
}

$lines[] = 'IP адрес с которого отправили форму: ' . ($_SERVER['REMOTE_ADDR'] ?? 'неизвестно');
$lines[] = 'Каким браузером пользуется клиент: ' . ($_SERVER['HTTP_USER_AGENT'] ?? 'неизвестно');

$body = implode("\n\n", $lines);

$escapedFullName = htmlspecialchars($fullName, ENT_QUOTES | ENT_SUBSTITUTE, 'UTF-8');
$escapedPhone    = htmlspecialchars($phone, ENT_QUOTES | ENT_SUBSTITUTE, 'UTF-8');
$escapedEmail    = $email !== '' ? htmlspecialchars($email, ENT_QUOTES | ENT_SUBSTITUTE, 'UTF-8') : '<span style="color:#6b7280;">Не указан</span>';
$escapedIP       = htmlspecialchars($_SERVER['REMOTE_ADDR'] ?? 'Неизвестно', ENT_QUOTES | ENT_SUBSTITUTE, 'UTF-8');
$escapedUA       = htmlspecialchars($_SERVER['HTTP_USER_AGENT'] ?? 'Неизвестно', ENT_QUOTES | ENT_SUBSTITUTE, 'UTF-8');
$escapedMessage  = $message !== '' ? nl2br(htmlspecialchars($message, ENT_QUOTES | ENT_SUBSTITUTE, 'UTF-8')) : '';

$messageBlock = $escapedMessage !== '' ? "<p style=\"margin:0 0 12px;\"><strong>Сообщение:</strong><br>{$escapedMessage}</p>" : '';

$body = <<<HTML
<!DOCTYPE html>
<html lang="ru">
<body style="font-family:Arial,sans-serif;
    display: flex;
    border-radius: 20px;
    background-color:#fff;
    margin:0;
    padding:24px;">
    <div style="max-width:520px;margin:0 auto;background:#ffffff;border-radius:12px;padding:24px 28px;color:#111827;">
        <h2 style="margin:0 0 10px; font-size: 30px">Заявка на Future Trade!</h2>
        <p style="margin:0;"><strong>Имя:</strong> {$escapedFullName}</p>
        <p style="margin:0;"><strong>Телефон:</strong> {$escapedPhone}</p>
        <p style="margin:0 0 10px;"><strong>E-mail:</strong> {$escapedEmail}</p>
        {$messageBlock}
        <hr style="border:none;border-top:1px solid #e5e7eb;margin:20px 0;">
        <p style="margin:0;font-size:12px;color:#6b7280;"><strong>IP:</strong> {$escapedIP}</p>
        <p style="margin:0;font-size:12px;color:#6b7280;"><strong>User-Agent:</strong> {$escapedUA}</p>
    </div>
</body>
</html>
HTML;

$headers = [
    'MIME-Version: 1.0',
    'Content-Type: text/html; charset=UTF-8',
    sprintf('From: %s <%s>', $fromName, $fromEmail),
    'Reply-To: ' . ($email !== '' ? $email : $toEmail),
    'X-Mailer: PHP/' . phpversion(),
];

$encodedSubject = '=?UTF-8?B?' . base64_encode($subject) . '?=';
$envelopeSender = '-f ' . $fromEmail;

$headersString = implode("\r\n", $headers) . "\r\n";
$mailSent = @mail($toEmail, $encodedSubject, $body, $headersString, $envelopeSender);

if ($mailSent) {
    redirect_with($redirectSuccess, ['status' => 'success']);
}

redirect_with($redirectError, ['status' => 'error']);
