function userNameSet(){
  let key = nameText.value;
  if(localStorage.hasOwnProperty(key)) {
    msg.innerText = key + 'は既に使われているよ';
  }
  else {
    let value = localStorage.length;
    localStorage.setItem(test_key, value);
    msg.innerText = key + 'さんのidを' + value + 'で登録したよ';
  }
}

function userNameGet(){
  let key = nameText.value;
  if(localStorage.hasOwnProperty(key)) {
    let value = localStorage.getItem(key);
    msg.innerText = key + 'さんのidは' + value + 'だよ';
  }
  else {
    msg.innerText = key + 'は存在しないアカウントだよ';
  }
}

let nameText = document.getElementById('nameText');
let msg = document.getElementById('msg');

let setButton = document.getElementById('setButton');
setButton.addEventListener('click', userNameSet);
let getButton = document.getElementById('getButton');
getButton.addEventListener('click', userNameGet);
