const form = document.getElementById("form-sb")
console.log(form)
const name = document.getElementById("name1");
const mail = document.getElementById("mail");
const pn = document.getElementById("pn");

const btn = document.getElementById("btt");
btn.addEventListener("click",addData)

const arr=[]

function addData(e)
{
    e.preventDefault();
    let nv = name.value;
    let ev= mail.value;
    let pv = pn.value

    let dav = document.createElement("div");
    dav.appendChild(document.createTextNode(nv));
    dav.appendChild(document.createTextNode("-"));
    dav.appendChild(document.createTextNode(ev));
    dav.appendChild(document.createTextNode("-"));
    dav.appendChild(document.createTextNode(pv));

    var doo = {name:nv, email:ev, phone:pv};
    var co = JSON.stringify(doo);
    localStorage.setItem(ev,co);
    

    let ul = document.getElementById("list");
    ul.appendChild(dav);

    
    
}
