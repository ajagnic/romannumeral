//----------------------------------USER INTERFACE
$(document).ready(function(){
  $("#roman").submit(function(event){
    event.preventDefault();
    debugger;
    var userNumber = parseInt($("input#userInput").val());
  });
});
