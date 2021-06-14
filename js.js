
function foorm()
{
 var pass = document.getElementById('pass').value;
 var cpass = document.getElementById('cpass').value;
 if(pass != cpass)
 {
   window.alert("These passwords do not match");
 }
 if(pass == cpass)
 {
   window.alert("You will proceed to the Sign in page");
   location.href="TOPEND.html";
 }
}
function sign()
{
 var element = document.getElementById('b1');

 if(document.getElementById("box1").checked)
 {
   document.getElementById('b1').style.opacity = "1.0";
 }
}
function winpack()
{
 window.location.href='home.html';
}
