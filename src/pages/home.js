import aboutus from "./AboutUs.js";
import contactus from "./ContactUs.js";
import app from "./app.js";
import "../static/homestyles.css";

export default function homepage(navbar, content, footer) {
  //navbar
  var logosec = document.createElement("img");
  logosec.src = "../src/assets/logo.svg";
  logosec.className = "logo";
  navbar.append(logosec);

  var titlelogo = document.createElement("img");
  titlelogo.src = "../src/assets/mainlogo.svg";
  titlelogo.className = "titleLogo";
  navbar.append(titlelogo);

  var AboutUs = document.createElement("button");
  AboutUs.innerHTML = "About us";
  AboutUs.className = "AboutUs";
  AboutUs.addEventListener("click", () => {
    aboutus(content);
  });
  navbar.append(AboutUs);

  var contactUs = document.createElement("button");
  contactUs.innerHTML = "contact us";
  contactUs.className = "ContactUs";
  contactUs.addEventListener("click", () => {
    contactus();
  });
  navbar.append(contactUs);

  //home content
  var contentDiv = document.createElement("div");
  content.append(contentDiv);
  contentDiv.className = "flex-container-row content"; //the main row
  var textDiv = document.createElement("div");
  textDiv.className = "flex-container-column text"; //left side
  var imgDiv = document.createElement("div");
  imgDiv.className = "flex-container-column image"; //right side
  var texth1 = document.createElement("h1");
  texth1.textContent = "T-MAN,Your Personal Task Manager";
  textDiv.append(texth1);
  var texth2 = document.createElement("h2");
  texth2.textContent = "T-Man, The man for every one.";
  textDiv.append(texth2);
  contentDiv.append(textDiv);
  var image = document.createElement("img");
  image.src = "../src/assets/calenderman.svg";
  imgDiv.append(image);
  contentDiv.append(imgDiv);

  //app link
  var start = document.createElement("button");
  start.className = "GetStarted";
  start.innerHTML = "Get Started";
  start.addEventListener("click", () => {
    app();
  });

  content.insertAdjacentElement("afterend", start);

  //footer
  footer.className = "flex-container-row footer";
  var git = document.createElement("img");
  git.src = "../src/assets/github.svg";
  footer.append(git);
  git.className = "flex-item";
  var text = document.createElement("h1");
  text.textContent = "aadi101204";
  text.className = "flex-item";
  footer.append(text);
}
