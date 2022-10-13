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

    

    if(nicotine >=18 ){
        alert.innerHTML ='Le taux de nicotine doit être inférieur à 18mg/ml';
        alert.removeAttribute('hidden');
        document.querySelector('#nicotine').value = 17;
        nicotine =  17;
    } else {
        alert.setAttribute('hidden' , '');
    }

    let nicoNeeded = (nicotine * base) / 20;
    let aromeNeeded = (base * arome) / 100;
    let baseNeeded = base - (nicoNeeded + aromeNeeded );

    if(baseNeed && aromeNeed && nicoNeed != null){
       
        baseNeed.innerHTML = "Vous avez besoin de : " +  baseNeeded + "ml de base";
        nicoNeed.innerHTML = "Vous avez besoin de : " +  nicoNeeded + "ml de booster";
        aromeNeed.innerHTML = "Vous avez besoin de : " +  aromeNeeded + "ml d'arôme";
        result.removeAttribute('hidden');
    }
    

    

    
}


document.addEventListener('input', ()=> calcul());