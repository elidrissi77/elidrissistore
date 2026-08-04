document.addEventListener("DOMContentLoaded", () => {

document.body.style.opacity="0";

setTimeout(()=>{
document.body.style.transition="opacity .7s ease";
document.body.style.opacity="1";
},100);

const cards=document.querySelectorAll(".card");

const observer=new IntersectionObserver((entries)=>{
entries.forEach(entry=>{
if(entry.isIntersecting){
entry.target.style.opacity="1";
entry.target.style.transform="translateY(0)";
}
});
});

cards.forEach(card=>{
card.style.opacity="0";
card.style.transform="translateY(40px)";
card.style.transition=".6s";
observer.observe(card);
});

});
