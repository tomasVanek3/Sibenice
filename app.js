if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/service-worker.js')
            .then(registration => {
                console.log('Service Worker registered with scope:', registration.scope);
            })
            .catch(error => {
                console.log('Service Worker registration failed:', error);
            });
    });
}

function ZpetButton(){
    document.getElementById("strana1").className = "MENU";
    document.getElementById("strana2").className = "HRA";
}

function getRandomSlovo(slova){
    const num = Math.floor(Math.random() * (slova.length));
    return slova[num];
}

function FunkceHrat(){
    //prohazuje className
    document.getElementById("strana1").className = "HRA";
    document.getElementById("strana2").className = "MENU";

    let slova = ["AUTO", "POLE", "KOSTEL", "PRAHA", "LOKOMOTIVA", "GARGAMEL", "LUKA", "PRSTEN", "KORUNA", "LES"];

    const slovo = getRandomSlovo(slova);
    
}



