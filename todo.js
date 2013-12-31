
$(document).ready(function(){

  var addTask = function(){
    var priority = $("input:radio[name='priority']:checked").val();
    // console.log(priority);
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
    if($("#newtask").val() !== ""){
      $("#list").append("<blockquote><span class='tasktext'>" + $('#newtask').val() + "</span><button class='btn " + cls + "'>" + exc + "</button><button class='btn btn-default del'>x</button></blockquote>");

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
    }
    $('.del').click(function(event){
      $(this).parent().slideUp();
    });
  };


  $("#newtask").keypress(function(key){
    if(key.which === 13){
      addTask();
    }
  });

  $("#newtaskbutton").click(addTask);


});