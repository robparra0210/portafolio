import hamburgerMenu from "./modules/ham.js";

const d = document;

d.addEventListener("DOMContentLoaded", (e)=>{
	hamburgerMenu('.panel-btn','.panel','.menu a' ,'');
})