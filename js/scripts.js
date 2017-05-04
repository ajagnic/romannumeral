//----------------------------------USER INTERFACE
$(document).ready(function(){
  $("#roman").submit(function(event){
    event.preventDefault();
    var userNumber = parseInt($("input#userInput").val());

    if (isNaN(userNumber)) {
      alert("Please only input numbers.")
    } else {
      var result = getRomanNum(userNumber);
    }

    $("#output").text(result);
  });
});

//-----------------------------------BACKEND LOGIC
var romanSymbol = [[1000, "M"], [500, "D"], [100, "C"], [50, "L"], [10, "X"], [5, "V"], [1, "I"]];
var tempArray = ['M', 'D', 'C', 'L', 'X', 'V', 'I'];

var getRomanNum = function(userNumber) {
  debugger;
  if (userNumber === 0) {
    return '';
  } else {
    for (i = 0; i <= 7; i++) {
      if (userNumber >= romanSymbol[i][0]) {
        var result = romanSymbol[i][1] + getRomanNum(userNumber - romanSymbol[i][0]);
        return result;
      }
    }
  }
};
