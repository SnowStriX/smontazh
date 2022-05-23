<?php
    $to = 'vlad.kirilin.05@mail.ru';

    function verification($text){
        return trim(urldecode(htmlspecialchars($text)));
    }

    $firstname = verification($_POST['firstname']); //hwDSpenEXuDyA3a2cbuL
    $lastname = verification($_POST['lastname']);
    $from = verification($_POST['email']);
    $message = verification($_POST['message']);
    $subject = 'theme';

    $headers = "From: $from" . "\r\n" . 
    "Reply-To: $from" . "\r\n" . 
    "X-Mailer: PHP/" . phpversion();

    if(mail($to, $subject, $message, $headers)){
        echo "<script>
                window.location.href = '../index.html'
                alert('Письмо отправлено');
             </script>";
    } else{
        echo "<script>
                alert('Ошибка. Попробуйте еще раз');
                window.location.href = '../index.html'
            </script>";
    }
?>