
 const chk = document.getElementById('chk');
 const pwd = document.getElementById('Password');


 chk.onchange = function()
 {
   pwd.type =chk.checked ? "text" : "password";
 };

  