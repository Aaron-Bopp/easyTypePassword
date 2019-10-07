//Copies the first selector with the given ID. 
//Using .execCommand not the clipboard API because that is all the functionality needed and it doesn't need permissions
function copy(id) {
  let copyText = document.querySelector("#" + id);
  copyText.select();
  document.execCommand("copy");
}

//Main click handler
document.addEventListener("click", (e) => {

    //If you click on copy boxes copies the contents to the clipboard
    if (e.target.classList.contains("copy")){
      copy(e.target.id)
    }
    
  });