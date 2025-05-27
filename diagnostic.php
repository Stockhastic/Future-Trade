<?php
$token = "8033883938:AAGETUPbAMFWlwD1aOjtZZRQnT_waEVg-Gc";
$chat_id = "262689607";
$message = "Диагностика CURL с cPanel хостинга";

$url = "https://api.telegram.org/bot$token/sendMessage";

$ch = curl_init();
curl_setopt_array($ch, [
    CURLOPT_URL => $url,
    CURLOPT_POST => true,
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_POSTFIELDS => http_build_query([
        'chat_id' => $chat_id,
        'text' => $message,
    ]),
    CURLOPT_TIMEOUT => 10,
    CURLOPT_SSL_VERIFYPEER => false,
]);

$response = curl_exec($ch);

if(curl_errno($ch)){
    echo "Ошибка CURL: " . curl_error($ch);
} else {
    echo "Ответ Telegram: " . $response;
}

curl_close($ch);
?>