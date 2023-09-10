

//   alert("Tên của bạn là " + MyName);
// console.log(MyName);
// console.log(MyPass);
var button = document
  .getElementById("button")
  .addEventListener("click", function (event) {
   var myname = document.getElementById("Username").value;
   var mypass = document.getElementById("password").value;
    if (myname == "Nvm" && mypass === "123") {
           localStorage.setItem('Name',myname);
           var RandomElement = document.createElement('p');
           RandomElement.textContent = "Suprise" + myname + '!';
           document.body.appendChild(RandomElement);
    }else{
        alert("Wrong Pass");
    }
  });

