function butotnClick(){
  msg.innerText = 'あなたのお名前を' + nameText.value + 'さんで登録しました';
  if(typeof localStorage === 'undefined') {
    console.log('このブラウザは、localStorage をサポートしていません。');
  }
}

let nameText = document.getElementById('nameText');
let msg = document.getElementById('msg');

let checkButton = document.getElementById('checkButton');
checkButton.addEventListener('click', butotnClick);

//localStorage.setItem('key', 'value');
//localStorage.getItem('key');
//localStorage.removeItem('key');
