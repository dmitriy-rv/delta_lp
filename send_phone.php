<?
if(isset($_GET['phone'])&&$_GET['phone']!=""){ //Проверка отправилось ли наше поля name и не пустые ли они
        $to = 'deltapart@yandex.ru'; //Почта получателя, через запятую можно указать сколько угодно адресов
        $subject = 'Обратный звонок'; //Загаловок сообщения
        $message = '
                <html>
                    <head>
                        <title>'.$subject.'</title>
                    </head>
                    <body>
                        <p>Телефон: '.$_GET['phone'].'</p>                        
                    </body>
                </html>'; //Текст нащего сообщения можно использовать HTML теги
        $headers  = "Content-type: text/html; charset=utf-8 \r\n"; //Кодировка письма
        $headers .= "From: Лендинг запчастей\r\n"; //Наименование и почта отправителя
        mail($to, $subject, $message, $headers); //Отправка письма с помощью функции mail
}
?>