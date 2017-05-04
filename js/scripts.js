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
var romanSymbol = [[1000,'M'],[900,'CM'],[500,'D'],[400,'CD'],[100,'C'],[90,'XC'],[50,'L'],[40,'XL'],[10,'X'],[9,'IX'],[5,'V'],[4,'IV'],[1,'I']];


var getRomanNum = function(userNumber) {
  debugger;
  if (userNumber === 0) {
    return "";
  } else {
    for (i = 0; i <= 13; i++) {
      if (userNumber >= romanSymbol[i][0]) {
        var result = romanSymbol[i][1] + romanHelper(userNumber);
        return result;
      }
    }
  }
};

function romanHelper(userNumber) {
  debugger;
  (userNumber -= romanSymbol[i][0]);
  return getRomanNum(userNumber)
};
