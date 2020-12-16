//Copies the first selector with the given ID.
function copy(id) {  
  let copyText = document.querySelector("#" + id);
  copyText.select();
  //Using .execCommand not the clipboard API because that is all the functionality needed and it doesn't need permissions 
  document.execCommand("copy");
}
//TODO: implement password generator
function genPass(criteria){
  
}
//TODO: implement support for a variable amount of input boxes
document.getElementById("input1").value = "yup";
document.getElementById("input2").value = "yup";
document.getElementById("input3").value = "yup";
//Main click handler
document.addEventListener("click", (e) => {

    //If you click on copy boxes copies the contents to the clipboard
    if (e.target.classList.contains("copy")){
      copy(e.target.id);

    }
    
  });