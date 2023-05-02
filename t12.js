const form = document.getElementById("form-sb")
console.log(form)
const name = document.getElementById("name1");
const mail = document.getElementById("mail");
const pn = document.getElementById("pn");
const ul = document.getElementById("list");

const deleteData = document.querySelector('#list .new .but' )






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
    dav.className="new";
    dav.appendChild(document.createTextNode(nv));
    dav.appendChild(document.createTextNode("-"));
    dav.appendChild(document.createTextNode(ev));
    dav.appendChild(document.createTextNode("-"));
    dav.appendChild(document.createTextNode(pv));


    var dlt = document.createElement("button");
    dlt.className="but"
    dlt.appendChild(document.createTextNode("delete"));

    var doo = {name:nv, email:ev, phone:pv};
    var co = JSON.stringify(doo);
    localStorage.setItem(ev,co);
    

    
    dav.appendChild(dlt);
    ul.appendChild(dav);
   
}
ul.addEventListener("click",funtodel)

function funtodel(e)
{
    e.preventDefault();
    var di = e.target.parentElement
    
    ul.removeChild(di);
    const idddd = e.target.parentElement.childNodes[2]
    var obj = {em:idddd.textContent}
    //console.log(obj)
    var obj_s = JSON.stringify(obj)
    //console.log(obj_s)
    localStorage.removeItem(idddd.textContent)
}
