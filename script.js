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
.free-trial{
background:#111;
padding:25px;
margin:25px;
border-radius:20px;
border:2px solid #d4af37;
text-align:center;
}

.free-trial h2{
color:#d4af37;
font-size:30px;
margin-bottom:15px;
}

.trial-text{
font-size:18px;
color:#fff;
line-height:1.8;
}

.trial-box{
display:flex;
flex-direction:column;
gap:10px;
margin:20px 0;
font-size:18px;
color:#fff;
}

.trial-btn{
display:inline-block;
background:#d4af37;
color:#000;
padding:15px 30px;
border-radius:12px;
font-size:20px;
font-weight:bold;
text-decoration:none;
}

.features{
padding:25px;
}

.features h2{
color:#d4af37;
text-align:center;
margin-bottom:20px;
}

.features ul{
list-style:none;
padding:0;
}

.features li{
background:#111;
margin:10px 0;
padding:15px;
border-radius:10px;
color:#fff;
border-right:4px solid #d4af37;
font-size:18px;
}
