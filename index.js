window.onload = function(){
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        UserFlg = true;
        SetDerk = true;
    }else{
        UserFlg = false;
        SetDerk = false;
    }
}
function Check(){
    if (!(window.matchMedia('(prefers-color-scheme: dark)')).matches && UserFlg) {
        // ライトモード
        document.body.classList.remove("dark-theme");
        document.body.classList.add("light-theme");
        UserFlg = false;
        SetDerk = false;
    }else if(window.matchMedia('(prefers-color-scheme: dark)').matches && !(UserFlg)){
        // ダークモード
        document.body.classList.remove("light-theme");
        document.body.classList.add("dark-theme");
        UserFlg = true;
        SetDerk = ture;
    }
}

setInterval(Check, 1000);

// チェックボックスの取得
const btn = document.querySelector("#btn-mode");

// チェックした時の挙動
btn.addEventListener("change", () => {
    if (SetDerk) {
        // ライトモード
        document.body.classList.remove("dark-theme");
        document.body.classList.add("light-theme");
        SetDerk = false;
    } else {
        // ダークモード
        document.body.classList.remove("light-theme");
        document.body.classList.add("dark-theme");
        SetDerk = true;
    }
});