$(document).ready(function(){
  $("#form").submit(function() { //устанавливаем событие отправки для формы с id=form
    var form_data = $(this).serialize(); //собераем все данные из формы
    
    $.ajax({
      type: "GET", //Метод отправки
      url: "send_phone.php", //путь до php фаила отправителя
      data: form_data,
      success: function() {
        //код в этом блоке выполняется при успешной отправке сообщения
        alert("Ваше сообщение отпрвлено!");
      }
    });
  });

  $("#form_all").submit(function() { //устанавливаем событие отправки для формы с id=form
    var form_data = $(this).serialize(); //собераем все данные из формы
    
    $.ajax({
      type: "GET", //Метод отправки
      url: "send.php", //путь до php фаила отправителя
      data: form_data,
      success: function() {
        //код в этом блоке выполняется при успешной отправке сообщения
        alert("Ваше сообщение отпрвлено!");
      }
    });
  });

  $("#form_all2").submit(function() { //устанавливаем событие отправки для формы с id=form
    var form_data = $(this).serialize(); //собераем все данные из формы
    
    $.ajax({
      type: "GET", //Метод отправки
      url: "send.php", //путь до php фаила отправителя
      data: form_data,
      success: function() {
        //код в этом блоке выполняется при успешной отправке сообщения
        alert("Ваше сообщение отпрвлено!");
      }
    });
  });
});