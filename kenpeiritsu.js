alert('建ぺい率');
var building = prompt("建物面積の値を入力してください");
var site = prompt("敷地面積 の値を入力してください");
document.write("入力  建物面積= " + building + ": 敷地面積 =" + site + "<br />");
document.write('建ぺい率は'+ (building/site*100 +'％')
