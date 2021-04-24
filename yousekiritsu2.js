let floor = prompt("建物の階数を入力してください")
const youseki = new Array(parseInt(floor));
for(let i = 0;i<youseki.length;i++){
    youseki[i] = parseInt(prompt(i+1 + "階の床面積の値を入力してください"));
}
let total = youseki.reduce(function(sum, element){
    return sum + element;
}, 0);
let site1 = prompt("敷地面積 の値を入力してください")
document.write('容積率は'+ total /site1*100 +'％')
