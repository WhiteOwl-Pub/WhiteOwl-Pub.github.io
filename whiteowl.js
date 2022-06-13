
const element = document.querySelector("#contact");


element.addEventListener("click", contact);



function contact() {
  document.querySelector(".into-text").innerHTML = "<h3>Contact Info<h3><br>"
  document.querySelector(".into-text").innerHTML = "<p class='custom-text' style='font-size: 22px;'>Do you have a question? need help on a project? I'm glad to help you.<p><hr>"
  document.querySelector(".into-text").innerHTML += "<p class='custom-text' style='padding: 10px;'>Email: WhiteOwl.pub@gmail.com<p><br>"
  document.querySelector(".into-text").innerHTML += '<a class="contact-list" href="https://twitter.com/Wh1t3_Ow1"><img src="images/twitter-96.png" alt="twitter" width="48" height="48" style="margin: 0 25px;"></a>'
  document.querySelector(".into-text").innerHTML += '<a class="contact-list" href="https://github.com/whiteowl-pub"><img src="images/github-96.png" alt="github" width="48" height="48" style="margin: 0 25px;"></a>'
  document.querySelector(".into-text").innerHTML += '<a class="contact-list" href="Public-key.asc"><img src="images/lock-96.png" alt="pgp-key" width="48" height="48" style="margin: 0 25px;"></a>'
};
