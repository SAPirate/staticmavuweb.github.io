function openNav(){
  document.getElementById("mySidenav").style.width = "300px";
}
function closeNav(){
  document.getElementById("mySidenav").style.width = "0";
}

// 

// function calc() {
  var n1 = parseInt(document.getElementById('n1').value) ;
  var n2 = parseInt(document.getElementById('n2').value );
  var oper = document.getElementById('operators').value ;

  if (oper === '*' ) {
      document.getElementById('result').value = n1*n2;
  }
// }
// 

// function calc2() {
  var nn1 = parseInt(document.getElementById('nn1').value) ;
  var nn2 = parseInt(document.getElementById('nn2').value );
  var opers = document.getElementById('operators2').value ;

  if (opers === '*' ) {
      document.getElementById('result2').value = nn1*nn2;
  }
// }

