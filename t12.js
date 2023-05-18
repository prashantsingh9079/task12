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


function showOutput(res){
    var op='';
    for(let i=0; i<res.length ; i++)
    {
        op+=`${res[i]['nv']}  ${res[i]['ev']}  ${res[i]['pv']}`+"<br> <hr>";
    }

    document.body.innerHTML = document.body.innerHTML + op;

}


function addData(e)
{
    e.preventDefault();
    let nv = name.value;
    let ev= mail.value;
    let pv = pn.value

    // let dav = document.createElement("div");
    // dav.className="new";
    // dav.appendChild(document.createTextNode(nv));
    // dav.appendChild(document.createTextNode("-"));
    // dav.appendChild(document.createTextNode(ev));
    // dav.appendChild(document.createTextNode("-"));
    // dav.appendChild(document.createTextNode(pv));


    // var dlt = document.createElement("button");
    // var edt = document.createElement("button");
    // edt.className="edt";
    // dlt.className="but"
    // dlt.appendChild(document.createTextNode("delete"));
    // edt.appendChild(document.createTextNode("edit"));
    var doo = {name:nv, email:ev, phone:pv};
    var co = JSON.stringify(doo);
    var po ={nv,ev,pv}
    //localStorage.setItem(ev,co);
    axios.post('https://crudcrud.com/api/44110acd0dac49efbf13bcd31e60b83a/info',po)
    .then((res)=>{
        
        console.log(res.data['nv'])
    })
    .catch((err)=>{
        
        console.log(err.message);
    })
    axios.get('https://crudcrud.com/api/44110acd0dac49efbf13bcd31e60b83a/info')
    .then((res)=>{
        console.log("data from get is ",res.data)
        showOutput(res.data)
    }).catch((err)=>{
        document.body.innerHTML=document.body.innerHTML + `<h4>something went wrong</h3>`;
        
    })
    // dav.appendChild(edt);
    // dav.appendChild(dlt);
    // ul.appendChild(dav);
   
}
ul.addEventListener("click",funtodel)

function funtodel(e)
{
    if(e.target.className=='but')
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

    else{

        e.preventDefault();
        var di = e.target.parentElement
        ul.removeChild(di);
    const idddd = e.target.parentElement.childNodes[2]
    console.log(idddd.textContent)
    const data1 = e.target.parentElement.childNodes[0]
    console.log(data1.textContent)
    
    const data2 = e.target.parentElement.childNodes[4];
    console.log(data2.textContent)
    document.querySelector('#form-sb #name1').value = data1.textContent;
    
    document.querySelector('#form-sb #pn').value = data2.textContent;
    document.querySelector('#form-sb #mail').value = idddd.textContent;
    var obj = {em:idddd.textContent}
    //console.log(obj)
    var obj_s = JSON.stringify(obj)
    //console.log(obj_s)
    localStorage.removeItem(idddd.textContent)
    }
}
