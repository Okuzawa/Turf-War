function userNameSet(){
  let test_key = nameText.value;
  if(localStorage.hasOwnProperty('test_key')) {
    msg.innerText = test_key + 'は既に使われているよ';
  }
  else {
    let value = localStorage.length;
    localStorage.setItem('test_key', 'value');
    msg.innerText = test_key + 'さんのidを' + value + 'で登録したよ';
  }
}

function userNameGet(){
  let test_key = nameText.value;
  if(localStorage.hasOwnProperty('test_key')) {
    let value = localStorage.getItem('test_key');
    msg.innerText = test_key + 'さんのidは' + String(value) + 'だよ';
  }
  else {
    msg.innerText = test_key + 'は存在しないアカウントだよ';
  }

  for (var key in localStorage) {
    if (localStorage.hasOwnProperty(key)) {
        console.log(key);
    }
  }
}


let nameText = document.getElementById('nameText');
let msg = document.getElementById('msg');

let setButton = document.getElementById('setButton');
setButton.addEventListener('click', userNameSet);
let getButton = document.getElementById('getButton');
getButton.addEventListener('click', userNameGet);
