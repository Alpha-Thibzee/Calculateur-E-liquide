

function calcul (){
    var base = document.querySelector('#base').value;
    var nicotine =  document.querySelector('#nicotine').value;
    var alert = document.querySelector('.text-alert');
    var arome = document.querySelector('#arome').value;

    let nicotineNeeded = nicotine * base / 20;
    let aromeNeeded = base * arome / 100;
    let baseNeeded = base - (nicotineNeeded + aromeNeeded );
    
    if(baseNeeded && aromeNeeded && nicotineNeeded != null && aromeNeeded >= 5){
        console.log('Besoin de : ' + nicotineNeeded + 'ml de booster');
        console.log('Besoin de : ' + aromeNeeded + 'ml d\'arome'); 
        console.log('Besoin de : ' + baseNeeded + 'ml de base');
    }
    

    if(nicotineNeeded <= base){
        alert.setAttribute('hidden', '');
    } else {
        alert.innerHTML ='Le taux de nicotine doit être inférieur à 20mg/ml';
        alert.removeAttribute('hidden');
    }

    
}


document.addEventListener('input', ()=> calcul());