
$(document).ready(function(){

  var addTask = function(value, priority){
    //var priority; 
    if(typeof priority !== "string"){priority = $("input:radio[name='priority']:checked").val();}
    var cls;
    var exc;
    if(priority === "high"){
      cls = "btn-danger";
      exc = "Chop-chop!"
    }
    else if(priority === "med"){
      cls = "btn-warning";
      exc = "Watch out.."
    }
    else {
      cls = "btn-success";
      exc = "You can do it"
    }
    console.log('value= ' + value + ' priority= ' + priority);
    if(typeof value !== "string"){value = $('#newtask').val(); }
  
      localStorage.setItem(value, priority);
      $("#list").append("<div><blockquote><span class='tasktext'>" + value + "</span><button class='btn " + cls + "'>" + exc + "</button><button class='btn btn-default del'>x</button></blockquote></div>");

      $("#list blockquote").last().hide();
      $("#list blockquote").last().slideDown();
      $("#newtask").val("");
      $(".btn").css("margin-left", "8");
      if(priority === "high"){
        $("#list blockquote .tasktext").last().addClass("lead");
      } 
      else {
        $("#list blockquote .tasktext").last().css("font-size", "16");
      }
  
    $('.del').click(function(event){
      $(this).parent().slideUp();
      console.log($(this).parent().children('span').text());
      localStorage.removeItem($(this).parent().children('span').text());
    });
  };

  if(localStorage.length > 0){
    for(var item in localStorage){
      var priority = localStorage.getItem(item);
      // console.log(item + ' ' + priority);
      addTask(item, priority);
      // if(priority === "high"){
      //   cls = "btn-danger";
      //   exc = "Chop-chop!"
      // }
      // else if(priority === "med"){
      //   cls = "btn-warning";
      //   exc = "Watch out.."
      // }
      // else {
      //   cls = "btn-success";
      //   exc = "You can do it"
      // }
      // $('#list').append("<div><blockquote><span class='tasktext'>" + item + "</span><button class='btn " + cls + "'>" + exc + "</button><button class='btn btn-default del'>x</button></blockquote></div>");
      //localStorage.clear();
    };
  }


  $("#newtask").keypress(function(key){
    if(key.which === 13){
      addTask();
    }
  });

  $("#newtaskbutton").click(addTask);


});