import "../static/AboutUsStyles.css";

export default function aboutus(content) {
  content.innerText = "";

  var para = document.createElement("p");
  para.innerText = "I am Iron Man.";
  para.className = "aboutus";
  content.append(para);
}
