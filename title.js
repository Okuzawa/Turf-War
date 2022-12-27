window.onload = function() {
  const canvas001 = document.getElementById("canvas001");
    if (canvas001.getContext) {
      const context001 = canvas001.getContext("2d");//2次元描画
        //四角形
        context001.fillRect(0,0,180,180);//塗りつぶされた四角形
        context001.clearRect(30,30,120,120);//四角形の範囲を削除
        context001.strokeRect(40,40,100,100);//輪郭線の四角形
    }
};
