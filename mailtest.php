<?php
error_reporting(E_ALL); ini_set('display_errors', 1);
$to = 'info@fttrade.am';
$from = 'no-reply@fttrade.am';
$headers = "From: Форма обратной связи Future Trade! <{$from}>\r\nContent-Type: text/plain; charset=UTF-8";
$ok = mail($to, 'Mail() test', "Time: ".date('c'), $headers, "-f {$from}");
var_dump($ok);