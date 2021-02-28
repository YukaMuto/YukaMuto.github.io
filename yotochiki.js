let tyou = prompt("調布ヶ丘の町名を1～4で入力してください")
if (tyou == 1){
 alert('調布ヶ丘1丁目の計算')
 let ken = prompt("建ぺい率の値を入力してください");
 let you = prompt("容積率の値を入力してください");
    if (ken <= 50 && you < 1=00){
        alert('第一種低層住居専用地域');
    }
    else if (ken <= 60 && you <= 200){
        alert('第一種中高層住居専用地域・準工業地域・準住居地域');
    }
    else if (ken <= 80 && you <= 300){
        alert('近隣商業地域');
    }
    else if (ken <= 80 && you <= 500){
        alert('商業地域');
    }
    else {
        alert('該当する用途地域はありません')
    }
}
else if (tyou == 2){
 alert('調布ヶ丘2丁目の計算')
 let ken = prompt("建ぺい率の値を入力してください");
 let you = prompt("容積率の値を入力してください");
    if (ken <= 50 && you <= 100){
        alert('第一種低層住居専用地域');
    }
    else if (ken <= 60 && you <= 150){
        alert('第一種中高層住居専用地域');
    }
    else if (ken <= 60 && you <= 200){
        alert('準住居地域');
    }
    else if (ken <= 80 && you <= 300){
        alert('近隣商業地域');
    }
    else {
        alert('該当する用途地域はありません')
    }
}
else if (tyou == 3){
 alert('調布ヶ丘3丁目の計算')
 let ken = prompt("建ぺい率の値を入力してください");
 let you = prompt("容積率の値を入力してください");
    if (ken <= 40 && you <= 80){
        alert('第一種低層住居専用地域');
    }
    else if (ken <= 60 && you <= 200){
        alert('第一種中高層住居専用地域・準工業地域');
    }
    else if (ken <= 80 && you <= 200){
        alert('近隣商業地域');
    }
    else {
        alert('該当する用途地域はありません')
    }
}
else if (tyou == 4){
 alert('調布ヶ丘4丁目の計算')
 let ken = prompt("建ぺい率の値を入力してください");
 let you = prompt("容積率の値を入力してください");
    if (ken <= 50 && you <= 100){
        alert('第一種低層住居専用地域');
    }
    else if (ken <= 60 && you <= 150){
        alert('第一種中高層住居専用地域');
    }
    else {
        alert('該当する用途地域はありません')
    }
}
else {
    alert('調布ヶ丘の町名を1～4で入力してください')
}
