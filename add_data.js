let row = null;
let Stored_data = [];
let Global_Array = [];
let heading_Arr = [];
formSubmit = (e) => {
    e.preventDefault();
    readData();
    if(row === null){
        insertRecord();
    }
    else{
        update();
        row = null;
    }
    resetRecord();
}
readData = () => {
    let data = {};
    Stored_data = [];
    data["bar_code"] = document.getElementById("bar_code").value;
    Stored_data.push(data.bar_code);
    heading_Arr.push("bar_code");
    data["dress_name"] = document.getElementById("dress_name").value;
    Stored_data.push(data.dress_name);
    heading_Arr.push("dress_name");
    data["qty"] = document.getElementById("qty").value;
    Stored_data.push(data.qty);
    heading_Arr.push("qty");
    data["date"] = document.getElementById("date").value;
    Stored_data.push(data.date);
    heading_Arr.push("date");
    data["perPrice"] = document.getElementById("perPrice").value;
    Stored_data.push(data.perPrice);
    heading_Arr.push("perPrice");
    for(let i=0;i<Stored_data.length;i++){
        if(Stored_data[i]==[]){
            document.getElementById().innerHTML= Stored_data[i]+"is missing";   
        }
    }
}

insertRecord = () => {
    if(check()){
    let newRow = storelist.insertRow();
    let i = 0;
    //let html = "<table border ='111'>";
    //html+="<tr>";
    Stored_data.forEach((value) =>{
        let cell = newRow.insertCell(i);
        cell.innerHTML = value;
        i++;
        // html+="<td>"+value+"</td>";
    });
    let cell = newRow.insertCell(i);
    cell.innerHTML = `<button onClick ='onEdit(this)'>Edit</button><button onClick ='deleteRecord(this)'>Delete</button>`
   // html+="<td><button onClick ='onEdit(this)'>Edit</button><button onClick ='deleteRecord(this)'>Delete</button></td>";
   // html+="</tr>";
   // html+="</table>";
   // document.getElementById("tab").innerHTML = html;
}
else{
    alert("Already exist data !!");
}
}
onEdit = (td) => {
    row = td.parentElement.parentElement;
    let i = 0;
    // heading_Arr.forEach((data,index) =>{
    //     document.getElementsById(data).value = row.cells[index].innerHTML;
    // });
    document.getElementById('bar_code').value = row.cells[i++].innerHTML;
    document.getElementById('dress_name').value = row.cells[i++].innerHTML;
    document.getElementById('qty').value = row.cells[i++].innerHTML;
    document.getElementById('date').value = row.cells[i++].innerHTML;
    document.getElementById('perPrice').value = row.cells[i++].innerHTML;

}
update = () => {
    if(check()){
    Stored_data.forEach((value,index) =>{
    row.cells[index].innerHTML = value;
    });
}
}
deleteRecord = (td) => {
    if(confirm("Do you want to delete this record?")){
        row = td.parentElement.parentElement;
        document.getElementById('storelist').deleteRow(row.rowIndex);
    }
    resetRecord();
    row = null;
}
resetRecord = () => {
    document.getElementById('bar_code').value = '';
    document.getElementById('dress_name').value = '';
    document.getElementById('qty').value = '';
    document.getElementById('date').value = '';
    document.getElementById('perPrice').value = '';
}
check = ()=>{
    let b = true;
    for(let i = 0 ; i< Global_Array.length;i++){
        b = true;
        for(let j = 0 ; j< Global_Array[i].length;j++){
            if(Stored_data[j] != Global_Array[i][j]){
                b = false;
                break;
            }
        }
        if(b){
            console.log(false);
            console.log(Global_Array);
            console.log(Stored_data);
            return false;
        }
    }
    console.log(true);
    console.log(Global_Array);
    console.log(Stored_data);
    Global_Array.push(Stored_data);
    return true;
}
// validate=()=>{
//     for(let i=0;i<Stored_data.length;i++){
//         if(Stored_data[i]==[]){
//             document.getElementById("pass").innerHTML= Stored_data[i]+"is missing";   
//         }
//     }
// }