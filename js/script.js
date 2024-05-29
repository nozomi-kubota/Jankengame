//グーをクリック時の処理
$('#btn1').on('click', function () {
    //変数”randamnumberに”乱数を指定(Math.random())、
    const randomNumberPC = Math.ceil(Math.random() * 3);
    console.log(randomNumberPC);
    const yourhand = $('#yourhd').html('グー');
    console.log(yourhand);

    if (randomNumberPC == 1) {
        $('#btn4').html("グー");
        $('#resultbtn').html("引き分けです");
    } else if (randomNumberPC == 2) {
        $('#btn4').html("チョキ");
        $('#resultbtn').html("あなたの勝ちです♬");
    } else if (randomNumberPC == 3) {
        $('#btn4').html("パー");
        $('#resultbtn').html("コンピューターの勝ちです・・m(__)m");
    } else $('#btn4').html("");
});

//チョキをクリック時の処理
$('#btn2').on('click', function () {
    //変数”randamnumberに”乱数を指定(Math.random())、
    const randomNumberPC = Math.ceil(Math.random() * 3);
    console.log(randomNumberPC);
    const yourhand = $('#yourhd').html('チョキ');
    console.log(yourhand);

    if (randomNumberPC == 1) {
        $('#btn4').html("グー");
        $('#resultbtn').html("コンピューターの勝ちです・・m(__)m");
    } else if (randomNumberPC == 2) {
        $('#btn4').html("チョキ");
        $('#resultbtn').html("引き分けです");
    } else if (randomNumberPC == 3) {
        $('#btn4').html("パー");
        $('#resultbtn').html("あなたの勝ちです♬");
    } else $('#btn4').html("あれ？");
});

//パーをクリック時の処理
$('#btn3').on('click', function () {
    //変数”randamnumberに”乱数を指定(Math.random())、
    const randomNumberPC = Math.ceil(Math.random() * 3);
    console.log(randomNumberPC);
    const yourhand = $('#yourhd').html('パー');
    console.log(yourhand);

    if (randomNumberPC == 1) {
        $('#btn4').html("グー");
        $('#resultbtn').html("あなたの勝ちです♬");
    } else if (randomNumberPC == 2) {
        $('#btn4').html("チョキ");
        $('#resultbtn').html("コンピューターの勝ちです・・m(__)m");
    } else if (randomNumberPC == 3) {
        $('#btn4').html("パー");
        $('#resultbtn').html("引き分けです");
    } else $('#btn4').html("あれ？");
});

//$('#resultbtn').html('結果は？クリックで表示！');
//$('#resultbtn').on('click', function() {
//    const result2 =document.getElementById('resultbtn')
//    if (yourhd.equials(btn4)) {
//       $('#resultbtn').html("引き分けです");
//    } else if (yourhd = "グー" && btn4= "チョキ") {
//            $('#resultbtn').html("あなたの勝ちです！");
//})
