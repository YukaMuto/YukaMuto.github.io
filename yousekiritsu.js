alert('容積率')
let floor = prompt("建物の階数を入力してください")
if (floor == 1){
    alert('１階建ての計算')
    let building1 = parseInt(prompt("１階の床面積の値を入力してください"));
    let site1 = prompt("敷地面積 の値を入力してください");
    document.write("入力  1階の床面積 = " + building1 +  ": 敷地面積 =" + site1 + "<br />");
    document.write('容積率は'+ building1/site1*100 +'％')
}
else if (floor == 2){
    alert('２階建ての計算')
    let building1 = parseInt(prompt("１階の床面積の値を入力してください"));
    let building2 = parseInt(prompt("２階の床面積の値を入力してください"));
    let site1 = prompt("敷地面積 の値を入力してください");
    document.write("入力  1階の床面積 = " + building1 + ":  2階の床面積 = " + building2 + ": 敷地面積 =" + site1 + "<br />");
    document.write('容積率は'+ (building1+building2)/site1*100 +'％')
}
else if (floor == 3){
    alert('３階建ての計算')
    let building1 = parseInt(prompt("１階の床面積の値を入力してください"));
    let building2 = parseInt(prompt("２階の床面積の値を入力してください"));
    let building3 = parseInt(prompt("３階の床面積の値を入力してください"));
    let site1 = prompt("敷地面積 の値を入力してください");
    document.write("入力  1階の床面積 = " + building1 + ":  2階の床面積 = " + building2 + ":  3階の床面積 = " + building3 + ": 敷地面積 =" + site1 + "<br />");
    document.write('容積率は'+ (building1+building2+building3)/site1*100 +'％')
}
else {
    alert('該当する階数の建物は計算できません')
}
