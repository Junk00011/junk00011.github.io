const CALCULAR = document.getElementById('Calcular');
const ERROR = document.getElementById('error');
const FLU = document.getElementById('flu');
const MAN = document.getElementById('man');

CALCULAR.addEventListener('click', () => {
    const DATO = parseFloat(document.getElementById('Peso').value); 
    if (DATO > 0 && DATO <= 30) {
        ERROR.style.display = 'none';

        let flujo = calcFlujo(DATO);
        let mantenimiento = flujo * 1.5 + 2;
        FLU.innerHTML = (flujo + 2) + ' cc/hr'; 
        MAN.innerHTML = 'm+m/2 : ' + mantenimiento + ' cc/hr'; 
        FLU.style.display = 'block';
        MAN.style.display = 'block';
    } else if (DATO > 30) {
        ERROR.style.display = "none";

        let respuesta = calcSuCorp(DATO);
        let mantenimient = ((respuesta * 2000) / 24).toFixed(2) + " cc/hr";
        FLU.innerHTML = ((respuesta * 1500) / 24).toFixed(2) + " cc/hr";
        FLU.style.display = "block";
        MAN.innerHTML = mantenimient;
        MAN.style.display = "block";
    } else {
        ERROR.style.display = "block";
        FLU.style.display = "none";
        MAN.style.display = "none";
    }
});

function calcFlujo(peso) {
    let resto = peso;
    let flujo = 0;
    if (resto > 20) {
        let aux = resto - 20;
        flujo += aux * 1;
        resto -= aux;
    }
    if (resto > 10) {
        let aux = resto - 10;
        flujo += aux * 2;
        resto -= aux;
    }
    flujo += resto * 4;
    return flujo;
}

function calcSuCorp(DATO) {
    let flujoSuCorp;
    if (DATO > 30) {
        flujoSuCorp = ((DATO * 4) + 7) / (DATO + 90);
    }
    return flujoSuCorp;
}
