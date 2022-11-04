// 格好いいGIF動画の動きを入れたかったが、一旦Hold
{/* <script>
new Freezeframe();
</script> */}

// Opening画面からスタートをクリックするとOpeningが消え、ゲーム画面が表示される
function click_start() {
  console.log("OK");
  $("#mainvisual").css("display", "block");
  $(".full").css("display","none");
  function audio() {
    document.getElementById('bgm1').currentTime = 0;
    document.getElementById('bgm1').play();
  }
};

// 音楽流す
function audio() {
  document.getElementById('btn_audio').currentTime = 0; //連続クリックに対応
  document.getElementById('btn_audio').play(); //クリックしたら音を再生
}
// muteの切り替え
function mute() {
  if (document.getElementById('btn_audio').muted) {
      document.getElementById('btn_audio').muted = false;
  } else {
      document.getElementById('btn_audio').muted = true;
  }
}

// いぐあのどんのひみつボタン
function secret() {
  $('#mainvisual').prepend('<img id="secret" src="img/iguanodon.jpg" alt=""></img>');
  $('#mainvisual').css("width", "100%");
  $('#mainvisual').css("margin-left", "20%");
}

function direct1() {
  console.log("Dir1 OK");
  $("#mainvisual").css("background-image", "url(img/scene_forest.jpg)");
  $("#judgment").text("何かが物陰から迫ってきた！")
  $(".enemy").css("display", "block")
  $("#hyouji").text("どの恐竜(カード)を出す？")
  $(".description").css("display", "none")
}

function direct2() {
  console.log("Dir2 OK");
  $("#mainvisual").css("background-image", "url(img/scene_field3.jpg)");
  $("#judgment").text("何かが物陰から迫ってきた！")
  $(".enemy").css("display", "block")
  $("#hyouji").text("どの恐竜(カード)を出す？")
  $(".description").css("display", "none")
}

function direct3() {
  console.log("Dir3 OK");
  $("#mainvisual").css("background-image", "url(img/scene_lake2.jpg)");
  $("#judgment").text("何かが物陰から迫ってきた！")
  $(".enemy").css("display", "block")
  $("#hyouji").text("どの恐竜(カード)を出す？")
  $(".description").css("display", "none")
}

function R_Click(p_janken_r) {//R_Click()がクリックされたときの処理

    let janken = ['グー', 'チョキ', 'パー']; //jankenリストを作る　グーは０=janken[0]、チョキは１=janken[1]、パーは２=janken[2]
    let janken_r = Math.floor( Math.random() * 3);//Math.random()で乱数を作る

    let p_janken =  ['グー', 'チョキ', 'パー']; //プレイヤーのじゃんけんリスト

    //じゃんけんの処理 
            //ティラノサウルス(0)のカード 
        if (p_janken_r === 0 && p_janken_r - janken_r === 0) {
          Result_end = "相手もT-Rexだった! 力は拮抗している!";
          // $('.face').append('<img src="img/face_trex.jpg"); 
          $('#space').append('<img src="img/logo2.png" class="tsuika" style="margin-right: 10px" alt="logo">');
          confetti({
            particleCount: 100,
            spread: 70,
            origin: { y: 0.6 }
          });
      } else if(p_janken_r === 0 && p_janken_r - janken_r === -1) {
          Result_end = "トリケラトプスにクリーンヒット! 相手は痛そうだ"; 
          $('#space').append('<img src="img/logo2.png" class="tsuika" style="margin-right: 10px" alt="logo">');
          $('#space').append('<img src="img/logo2.png" class="tsuika" style="margin-right: 10px" alt="logo">');
          $('#space').append('<img src="img/logo2.png" class="tsuika" style="margin-right: 10px" alt="logo">');
          confetti({
            particleCount: 100,
            spread: 70,
            origin: { y: 0.6 }
          });
      } else if(p_janken_r === 0 && p_janken_r - janken_r === -2) {
          Result_end = " アンキロサウルスから強烈な一撃をもらった！";
          if($('.tsuika').length) {
            $('.tsuika:last').remove();
          }
          if($('.tsuika').length) {
            $('.tsuika:last').remove();
          }
          if($('.tsuika').length) {
            $('.tsuika:last').remove();
          }
          //トリケラトプス(1)の場合
      } else if(p_janken_r === 1 && p_janken_r - janken_r === 1) {
          Result_end = "T-Rexに肩をかじられた!"; 
          if($('.tsuika').length) {
            $('.tsuika:last').remove();
          }
      } else if(p_janken_r === 1 && p_janken_r - janken_r === 0) {
          Result_end = "トリケラトプス同士のつばぜり合い！";
          $('#space').append('<img src="img/logo2.png" class="tsuika" style="margin-right: 10px" alt="logo">');
          confetti({
            particleCount: 100,
            spread: 70,
            origin: { y: 0.6 }
          });
      } else if(p_janken_r === 1 && p_janken_r - janken_r === -1) {
          Result_end = "よしっ、アンキロサウルスをひっくり返した!";
          $('#space').append('<img src="img/logo2.png" class="tsuika" style="margin-right: 10px" alt="logo">');
          $('#space').append('<img src="img/logo2.png" class="tsuika" style="margin-right: 10px" alt="logo">');
          confetti({
            particleCount: 100,
            spread: 70,
            origin: { y: 0.6 }
          });
           //アンキロサウルス(2)の場合
      } else if(p_janken_r === 2 && p_janken_r - janken_r === 2) {
          Result_end = "すごいぞ！T-Rexのあごに強烈な一撃！";
          $('#space').append('<img src="img/logo2.png" class="tsuika" style="margin-right: 10px" alt="logo">');
          $('#space').append('<img src="img/logo2.png" class="tsuika" style="margin-right: 10px" alt="logo">');
          $('#space').append('<img src="img/logo2.png" class="tsuika" style="margin-right: 10px" alt="logo">');
          $('#space').append('<img src="img/logo2.png" class="tsuika" style="margin-right: 10px" alt="logo">');
          $('#space').append('<img src="img/logo2.png" class="tsuika" style="margin-right: 10px" alt="logo">');
          confetti({
            particleCount: 100,
            spread: 70,
            origin: { y: 0.6 }
          });
      } else if(p_janken_r === 2 && p_janken_r - janken_r === 1) {
          Result_end = "トリケラトプスにひっくり返された。起き上がれない!!"; 
          if($('.tsuika').length) {
            $('.tsuika:last').remove();
          }
          if($('.tsuika').length) {
            $('.tsuika:last').remove();
          }
          if($('.tsuika').length) {
            $('.tsuika:last').remove();
          }
          if($('.tsuika').length) {
            $('.tsuika:last').remove();
          }
          if($('.tsuika').length) {
            $('.tsuika:last').remove();
          }
      } else if(p_janken_r === 2 && p_janken_r - janken_r === 0) {
        Result_end = "鎧竜同士のクロスカウンター!相打ちだ";
        $('#space').append('<img src="img/logo2.png" class="tsuika" style="margin-right: 10px" alt="logo">');
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 }
        });
      }

      //spaceの画像の数をカウントして、countタグの部分に表示
      let counttsuika = $("#space").children().length;;
      $('#count').text(counttsuika);

      //id=pc_handsのテキストを書き換えて、相手の手札を表示
      $('#pc_hands').text("コンピューター：" + janken[janken_r]); 
      $('#hyouji').text(Result_end); //テキストを書き換える

      //画像が10以上になったら表示させる
        if(counttsuika >= 1 && counttsuika < 10) {
         $('#saigo').text('がんばれ！');
        } else if (counttsuika === 0) {
          $('#saigo').text('さようなら。。。。');
          $('#mainvisual').prepend('<img id="gameover" src="img/Trexroar.gif" alt=""></img>');
          $('#hyouji').text('GAME OVER...');
        } else if(counttsuika >= 10 && counttsuika < 15) {
         $('#saigo').text('攻撃の手を緩めるな！');
        } else if(counttsuika >= 15 && counttsuika < 20) {
          $('#saigo').text('パワー！');
        } else if(counttsuika >= 20) {
          $('#saigo').text('よくやったな！');
          $('#mainvisual').prepend('<img id="congrats" src="img/AnkylohittingTrexHardd.gif" alt=""></img>');
          $('#hyouji').text('無事脱出に成功した。 ');

          //紙吹雪
          var end = Date.now() + (15 * 1000);

          // go Buckeyes!
          var colors = ['#F75C2F', '577C8A', '#ffffff'];

          (function frame() {
            confetti({
              particleCount: 2,
              angle: 60,
              spread: 55,
              origin: { x: 0 },
              colors: colors
            });
            confetti({
              particleCount: 2,
              angle: 120,
              spread: 55,
              origin: { x: 1 },
              colors: colors
            });

            if (Date.now() < end) {
              requestAnimationFrame(frame);
            }
          }());
        }
      };

