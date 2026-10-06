const passlength = document.getElementById("passlength");
const uppercase = document.getElementById("uppercase");
const number = document.getElementById("number");
const symbol = document.getElementById("symbols");
const generate = document.getElementById("generatebtn");
const copy = document.getElementById("copybtn")
const password = document.getElementById("password");

generate.addEventListener("click",() => {
  const length =parseInt(passlength.value) ;


  if (!length || length>50 || length <= 0){
    password.value = "طول پسورد باید بین 1 تا 50 باشد";
    return
  };

  let characters = "qwertyuiopasdfghjklzxcvbnm";
  if(uppercase.checked) {
    characters += "QWERTYUIOPASDFGHJKLZXCVBNM"
  };
  if(number.checked) {
    characters += "1234567890"
  };
  if(symbol.checked) {
    characters += "!@#$%^&*()_+:{}?><.,/';"
  };

  let result = "";

  for (let i = 0 ; i<length ; i++) {
    const randomindex = Math.floor(Math.random()*characters.length);
    const randomchar = characters[randomindex];
    result += randomchar;
  };

  password.value = result;
});

copy.addEventListener("click", ()=>{
  navigator.clipboard.writeText(password.value);
  copy.textContent = "copied!" ;
  setTimeout(()=>{
    copy.textContent = "copy"
   } , 1500)
});
