/**
 * 「下準備」
 * HTML上でidの付いた要素を取得する
 */
const FORM = document.getElementById("form");
const ANSWER = document.getElementById("answer-button");
const HINT = document.getElementById("hint-button");
const HINT_DISPLAY = document.getElementById("hint-display");
const RESULT_DISPLAY = document.getElementById("result-display");
const EXPLAIN_DISPLAY = document.getElementById("explain-display");
const CORRECT = document.getElementById("audio-correct");
const WRONG = document.getElementById("audio-wrong");

/**
 * 「解説を表示する」
 * 正解が押されたらexplain-displayのタグの中身に解説を入れる。
 * 
 * (ここでは関数を使いましょう!!回答発表の部分を少し触ります。)
 * 
 * 補足説明:
 * const showExplain = function () {}
 * って書くと showExplain()で呼び出すことができます。
 */
const showExplain = function () {
  EXPLAIN_DISPLAY.textContent = "チューバは、オーケストラで一番低い音を出す楽器と言われています。";
}

/**
 * 「回答発表」
 * answer-buttonが押された時にresult-displayのタグの中身を変更する。
 * 
 * 補足説明:
 * inputの中身を取得するには inputタグを取得した定数.valueとすれば良いです。
 * 
 * 正解か見分けるために 論述演算子とif文を使いましょう。
 * 例えば、 
 * if (○○ == "なにか") { } とすると、○○と"なにか"が一緒だったときのみ{}の中身が実行されます。
 * さらに、ifに行かなかった時になにか実行したい場合は、if {} else {}と書きます。
 * このときif{ココ}に入らなかったらelse{}が実行されます。
 * if{}に入った場合はelse{}は実行されません。
 * 
 * 正解したら「解説を表示する」と「音を鳴らす」を呼び出します。
*/
ANSWER.onclick = function () {
  if (FORM.value ==  "チューバ") {
    RESULT_DISPLAY.textContent = "正解!!!";
    showExplain();
    playCorrect();
  } else {
    RESULT_DISPLAY.textContent = "不正解!!!";
    playWrong();
    showExplain();
  }

}

/**
 * 「ヒントを表示する」
 * button-hintが押されたらresult-displayのタグの中身を"GACKTが選んだのは○○"に変更する。
 */
HINT.onclick = function () {
  HINT_DISPLAY.textContent = "四文字です。";
}

/**
 * 「音を鳴らす」
 * audioタグを再生するには、
 * audioタグを取得した関数.play()
 * って書いたらなります。
 * 
 * 回答したときに呼び出せる様にしましょう。
 */
const playCorrect = function () {
  CORRECT.play();
}

const playWrong = function () {
  WRONG.play();
}