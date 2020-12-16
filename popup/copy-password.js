class Password{
  /*constructor(){
      this.password = "";
      this.min_length = 4;
      this.max_length = 100;
      this.word_count = 3;
      this.leading_characters = "";
      this.interjecting_characters = "";
      this.trailing_characters = "";
      this.spliced_characters = "";
  }*/
  constructor(min_length, max_length, word_count, leading_characters, interjecting_characters,
               trailing_characters, spliced_characters){
      this.password = "";
      this.min_length = min_length;
      this.max_length = max_length;
      this.word_count = word_count;
      this.leading_characters = leading_characters;
      this.interjecting_characters = interjecting_characters;
      this.trailing_characters = trailing_characters;
      this.spliced_characters = spliced_characters;
  }
  
  //TODO: properly implement dictionary database
  usable_text_english = ["house", "cat", "dog"];


  generate_password(){
      this.add_text(this.leading_characters, false, true);
      for (var i = 0; i < this.word_count - 1; i++){
          this.add_text(this.get_word(), false, true);
          this.add_text(this.interjecting_characters, false, true);
      }
      this.add_text(this.get_word(), false, true);
      this.add_text(this.trailing_characters, false, false);
      
  }
  add_text(text, front, back){
      if (front){
        this.password += this.spliced_characters;
      }
      for (var i = 0; i < String(text).length - 1; i++){
          this.password += String(text).substr(i, 1);
          this.password += this.spliced_characters;
      }
      this.password += String(text).substr(i, 1);
      if (back){
        this.password += this.spliced_characters
      }
  }
  get_word() {
      return this.usable_text_english[Math.floor(Math.random() * this.usable_text_english.length)];
  }
}

//Copies the first selector with the given ID.
function copy(id) {  
  let copyText = document.querySelector("#" + id);
  copyText.select();
  //Using .execCommand not the clipboard API because that is all the functionality needed and it doesn't need permissions 
  document.execCommand("copy");
}

//TODO: implement support for a variable amount of input boxes
for (var i = 0; i < 3; i ++){
  let exportPassword = new Password(4, 100, 3, 123, "&", 321, "-");
  exportPassword.generate_password();
  document.getElementById("input" + String(i + 1)).value = exportPassword.password;

}

//Main click handler
document.addEventListener("click", (e) => {

    //If you click on copy boxes copies the contents to the clipboard
    if (e.target.classList.contains("copy")){
      copy(e.target.id);

    }
    
  });