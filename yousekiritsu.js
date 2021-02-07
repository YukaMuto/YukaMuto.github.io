<script>
alert('容積率')
var building1 = parseInt(prompt("１階の床面積の値を入力してください"));
var building2 = parseInt(prompt("２階の床面積の値を入力してください"));
var site1 = prompt("敷地面積 の値を入力してください");
document.write("入力  一階の床面積 = " + building1 + ":  二階の床面積 = " + building2 + ": 敷地面積 =" + site1 + "<br />");
document.write('容積率は'+ (building1+building2)/site1*100 +'％')
</script>