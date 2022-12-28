function userNameSet(){
  let test_key = nameText.value;
  if(localStorage.hasOwnProperty('test_key')) {
    console.log('このキーは存在しています');
    msg.innerText = 'この名前は既に使われているよ';
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
    msg.innerText = test_key + 'さんのidは' + value + 'だよ';
  }
  else {
    msg.innerText = test_key + 'は存在しないアカウントだよ';
  }
}


let nameText = document.getElementById('nameText');
let msg = document.getElementById('msg');

let checkButton = document.getElementById('checkButton');
checkButton.addEventListener('SetName', userNameSet);
checkButton.addEventListener('GetName', userNameGet);

//localStorage.setItem('key', 'value');
//localStorage.getItem('key');
//localStorage.removeItem('key');
