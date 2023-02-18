// var booknm=document.querySelector('#bknm');
// var issuer=document.querySelector('#issuer');
var btn =document.querySelector("#btn");
// var tr=document.querySelector('trow')
// var bd=document.querySelector.Selector('bdy')

var arr=[];
var c=0;
var selectedRow=null;

function Addbook(event){
    event.preventDefault();

    var formData=readformData();

    if(selectedRow==null)
    insertnewRecord(formData);
    else
    updaeRecord();

    resetForm();
   



}

function readformData(){
    var formData={};
    formData ['id']='';
    formData['booknm']=document.querySelector('#bknm').value;
    formData['issuer']=document.querySelector('#issuer').value;
    formData['datetime']=timefn();
    formData['status']='Not Returned';
    return formData;
}

function insertnewRecord(data){
    var table=document.getElementById('booklists').getElementsByTagName('tbody')[0];
    var newRow=table.insertRow(table.length);
    cell1=newRow.insertCell(0);
    c++;
    cell1.innerHTML=c;
    cell2=newRow.insertCell(1);
    
    cell2.innerHTML=data.booknm;

    cell3=newRow.insertCell(2);
    
    cell3.innerHTML=data.issuer;

    cell4=newRow.insertCell(3);
    
    cell4.innerHTML=data.datetime;

    cell5=newRow.insertCell(4);
    
    cell5.innerHTML=data.status;
    cell5=newRow.insertCell(5);
   
    cell5.innerHTML=`<a onClick="onEdit(this)">Edit</a>`;

}

function resetFom(){
    document.querySelector('#bknm').value="";
    document.querySelector('#issuer').value="";
}

function onEdit(td){
    selectedRow=td.parentElement.parentElement;
    selectedRows.cells[5].innerHTML='returned';
    
}
function updaeRecord(){
    selectedRows.cells[5].innerHTML='Returned';
}

function timefn(){
    let today=new Date();
    let month=today.getMonth()+1;
    let year=today.getFullYear();
    let date=today.getDate();
    let currentDate=`${month}/${date}/${year}`;
    let hours=today.getHours();
    let minutes=today.getMinutes();
    let currentTime=`${hours}:${minutes}`;
    return currentDate+currentTime;
}



btn.addEventListener('click',Addbook);

