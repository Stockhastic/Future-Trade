<?php

// Собрираю данные с формы
$name = $_POST['name'];
$phone = $_POST['phone'];
$email = $_POST['email'];

// Чуток прорпарсим?
$name = trim(strip_tags($name));
$phone = trim(strip_tags($phone));
$email = trim(strip_tags($email));

// Форматируем данные
// Заголовок письма
$subject = "Заявка с сайта Seven Stars";

// Тело письма
$message = "<h2>Поступила новая заявка!</h2>";
$message .= "<h3><strong>Имя:</strong> {$name} </h3>";
$message .= "<h3><strong>Телефон для обратной связи:</strong> {$phone} </h3>";
if ($email) {
    $message .= "<h3><strong>Почта:</strong> {$email} </h3>";
} else {
    $message .= "<h3><strong>Почта:</strong> Не указана </h3>";
}

// Настраиваем заголовки Почты
$headers = "MIME-Version: 1.0" . "\r\n";
$headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";

// Парамерты письма
if (mail('perturbator1488@gmail.com', $subject, $message, $headers)) {
    // Если письмо отправлено, то редиректим на страницу успеха
    echo "<script>alert('Ваше сообщение успешно отправлено!');</script>";
} else {
    // Если не отправлено, то редиректим на страницу ошибки
    echo "<script>alert('Упс! ЧСто-то пошло не так, попробуйте позже.');</script>";
}

?>



