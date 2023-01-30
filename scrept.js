let textInput=document.getElementById("textInput");
let outPut=document.getElementById("outPut");
let arr=[]
function addtask(){
    let name=textInput.value;
    if(name==0){
        alert("Enter Your name")
    }
    else{
       let id=Math.floor(Math.random()*Date.now()).toString();
       arr.push({name,id})
       addName()
    }
}
function addName(){
    outPut.innerHTML=" ";
    arr.map((value,index)=>{
       outPut.innerHTML +=`
        <p>${value.name}</p>
        <button onClick="deletName(${value.id})">Delet</button>
        <button onClick="editName(${index})">Edit</button>
        <button onClick="updaet(${value.id})">Update</button>
        `
    })
    textInput.value=" ";
}
function deletName(id){
    arr=arr.filter((value)=> value.id !=id)
    addName()
}
function editName(na){
    let a=arr[na].name
    textInput.value=a
}
function updaet(index){
  objIndex = arr.findIndex((obj => obj.id ==index ));
  arr[objIndex].name = textInput.value
  addName()


  
//   console.log("Before update: ", arr[objIndex])
//   console.log("After update: ", arr[objIndex])
}










// let myArray = [
//     {id: 0, name: "Jhon"},
//     {id: 1, name: "Sara"},
//     {id: 2, name: "Domnic"},
//     {id: 3, name: "Bravo"}
//   ]


//   objIndex = myArray.findIndex((obj => obj.id ==1 ));
//   console.log("Before update: ", myArray[objIndex])
//   myArray[objIndex].name = "Laila"
//   console.log("After update: ", myArray[objIndex])











// let arr=[{
//     name:"eaqae"
// }]
// console.log(arr[0].name)


// let data={
//     item:{
//         id:0,
//         name:"waqar"
//     }
// }

// console.log(data.items)
// console.log(data.items[1])
// const item_name = data.items[1].name;













