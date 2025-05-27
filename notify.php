<?php

$token = "8033883938:AAGETUPbAMFWlwD1aOjtZZRQnT_waEVg-Gc";

// ID чата: Armbiz Consulting Clients
$chat_id = "-4063573063";

if (isset($_POST['message'])) {
    $message = $_POST['message'];

    $data = [
        'chat_id' => $chat_id,
        'text' => $message,
        'parse_mode' => 'HTML'
    ];

    $ch = curl_init("https://api.telegram.org/bot$token/sendMessage");
    curl_setopt_array($ch, [
        CURLOPT_POST => true,
        CURLOPT_RETURNTRANSFER => true,
        CURLOPT_POSTFIELDS => http_build_query($data),
        CURLOPT_TIMEOUT => 10,
        CURLOPT_SSL_VERIFYPEER => false,
    ]);

    curl_exec($ch);
    curl_close($ch);

    echo "Уведомление отправлено";
} else {
    echo "Сообщение не передано";
}
?>