

function calcul (){
    var base = document.querySelector('#base').value;
    var nicotine =  document.querySelector('#nicotine').value;
    var alert = document.querySelector('.text-alert');

    let nicotineNeeded = nicotine * base / 20;
    
    if(nicotineNeeded <= base){
        console.log(nicotineNeeded);
        alert.setAttribute('hidden', '');
    } else {
        alert.innerHTML ='Le taux de nicotine doit être inférieur à 20mg/ml';
        alert.removeAttribute('hidden');
    }
    
}

document.addEventListener('input', ()=> calcul());
