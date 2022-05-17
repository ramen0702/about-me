// Initial operation
window.onload = function(){
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        UserFlg = true;
        SetDerk = true;
        let checkbox2 = document.getElementById('btn-mode');
        checkbox2.checked = true;
    }else{
        UserFlg = false;
        SetDerk = false;
    }
}

// Start interval operation
setInterval(Check, 1000);

// Interval operation
function Check(){
    if (!(window.matchMedia('(prefers-color-scheme: dark)')).matches && UserFlg) {
        // Change LightMode
        ModeChange("light");
        UserFlg = false;
        SetDerk = false;
    }else if(window.matchMedia('(prefers-color-scheme: dark)').matches && !(UserFlg)){
        // Chenge DarkMode
        ModeChange("dark");
        UserFlg = true;
        SetDerk = ture;
    }
}

// Get CheckBox state
const btn = document.querySelector("#btn-mode");

// Operation when checked
btn.addEventListener("change", () => {
    if (SetDerk) {
        // Change LightMode
        ModeChange("light");
        SetDerk = false;
    } else {
        // Chenge DarkMode
        ModeChange("dark");
        SetDerk = true;
    }
});

function ModeChange(mode){
    if(mode == "dark"){
        document.body.classList.remove("light-theme");
        document.body.classList.add("dark-theme");
    }else{
        document.body.classList.remove("dark-theme");
        document.body.classList.add("light-theme");
    }
}