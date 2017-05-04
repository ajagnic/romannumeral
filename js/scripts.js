//----------------------------------USER INTERFACE
$(document).ready(function(){
  $("#roman").submit(function(event){
    event.preventDefault();
    debugger;
    var userNumber = parseInt($("input#userInput").val());

    if (isNaN(userInput)) {
      alert("Please only input numbers.")
    }


  });

  

});
