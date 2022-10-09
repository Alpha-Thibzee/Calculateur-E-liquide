console.log(`

████████ ██   ██ ██ ██████  ███████ ███████ ███████ 
   ██    ██   ██ ██ ██   ██    ███  ██      ██      
   ██    ███████ ██ ██████    ███   █████   █████   
   ██    ██   ██ ██ ██   ██  ███    ██      ██      
   ██    ██   ██ ██ ██████  ███████ ███████ ███████ 
                                                    
                                                    

`);

function calcul (){
    var base = document.querySelector('#base').value;
    var nicotine =  document.querySelector('#nicotine').value;
    var alert = document.querySelector('.text-alert');
    var arome = document.querySelector('#arome').value;

    var baseNeed = document.querySelector('#baseNeed');
    var aromeNeed = document.querySelector('#aromeNeed');
    var nicoNeed = document.querySelector('#nicoNeed');
    var result = document.querySelector('.result');

    let nicotineNeeded = nicotine * base / 20;
    let aromeNeeded = base * arome / 100;
    let baseNeeded = base - (nicotineNeeded + aromeNeeded );
    
    if(baseNeeded && aromeNeeded && nicotineNeeded != null){
        baseNeed.innerHTML = "Vous avez besoin de : " +  baseNeeded + "ml de base";
        nicoNeed.innerHTML = "Vous avez besoin de : " +  nicotineNeeded + "ml de booster";
        aromeNeed.innerHTML = "Vous avez besoin de : " +  aromeNeeded + "ml d'arôme";
        result.removeAttribute('hidden');
    }
    

    if(nicotineNeeded <= base){
        alert.setAttribute('hidden', '');
    } else {
        alert.innerHTML ='Le taux de nicotine doit être inférieur à 20mg/ml';
        alert.removeAttribute('hidden');
    }

    
}


document.addEventListener('input', (e)=> calcul());