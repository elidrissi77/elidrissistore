const messages = [
"🔥 شخص من الرباط طلب اشتراك قبل دقيقة",
"🔥 شخص من الدار البيضاء اشترك الآن",
"🔥 تم تفعيل اشتراك جديد",
"🔥 زبون من مراكش استفاد من العرض",
"🔥 آخر اشتراك تم قبل لحظات",
"🔥 العرض مازال متوفر"
];

function showNotification(){

const old=document.querySelector(".notify");

if(old){
old.remove();
}

const box=document.createElement("div");

box.className="notify";

box.innerHTML=messages[Math.floor(Math.random()*messages.length)];

document.body.appendChild(box);

setTimeout(()=>{
box.classList.add("show");
},100);

setTimeout(()=>{
box.classList.remove("show");
setTimeout(()=>{
box.remove();
},500);
},4000);

}

setInterval(showNotification,8000);

showNotification();
