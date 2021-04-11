let youseki = [0,0,0,0,0];
for (let i = 0; i < 5; i++) {
  youseki[i] = parseInt(prompt("階の床面積の値を入力してください"));
}
//床面積の合計
let total = youseki.reduce(function(sum, element){
  return sum + element;
}, 0);
console.log(total);
//敷地面積の入力
let site1 = prompt("敷地面積 の値を入力してください")
//容積率の合計
document.write('容積率は'+ total /site1*100 +'％')
