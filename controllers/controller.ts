let create_cohete1 = document.querySelector("#cohete1");
let create_cohete2 = document.querySelector("#cohete2");
let print_cohete = document.querySelector("#printcohete");
const reducer = (accumulator, currentValue) => accumulator + currentValue;

window.addEventListener('load', () => {
    create_cohete1.addEventListener("click", createCohete, false);
    create_cohete2.addEventListener("click", createCohete, false);
    print_cohete.addEventListener("click", printCohete, false); 
});

create_cohete1.propiedades = {
    codigo: "32WESSDS",
    propulsores: 3,
    potencia: [10,30,80]
};

create_cohete2.propiedades = {
    codigo: "LDSFJA32",
    propulsores: 6,
    potencia: [30,40,50,50,30,10]
};

let cohete: Cohete;
let cohete_vel_actual;
let cohete_vel_max;

function createCohete(evt) {    
    let codigo = evt.target.propiedades.codigo;
    let propulsores = evt.target.propiedades.propulsores;
    let potencia = evt.target.propiedades.potencia;
    cohete = new Cohete(codigo,propulsores,potencia);
    cohete_vel_max = potencia.reduce(reducer);
    console.log(cohete);
};


let printCohete = () => {
    cohete_vel_actual = 0;
    let p = document.createElement("p"); 
    document.querySelector("#content").appendChild(p); 
    document.querySelector("#content > :first-child").setAttribute("class", "mt-2");
    document.querySelector("#content > :first-child").innerHTML = `${cohete.print(cohete.codigo,cohete.propulsores,cohete.potencia)}
    
    <br>Máxima velocidad: ${cohete_vel_max}
    <br>Velocidad actual: <div id="velocidad_id">${cohete_vel_actual}</div>
    <br><div class="mt-2"><button type="button" class="btnacdc btn btn-sm" id="ac_cohete"><i class="fas fa-arrow-up"></i></button>
    <button type="button" class="btnacdc btn btn-sm" id="de_cohete"><i class="fas fa-arrow-down"></i></button></div>`;
    let acc_cohete = document.querySelector("#ac_cohete");
    let dec_cohete = document.querySelector("#de_cohete");
    acc_cohete.addEventListener("click", accCohete, false);
    dec_cohete.addEventListener("click", decCohete, false);
};


function accCohete() {    
    if(cohete_vel_actual < cohete_vel_max) {
        cohete_vel_actual += 10;
    }    
    document.querySelector("#velocidad_id").innerHTML = `${cohete_vel_actual}`;
}


let decCohete = () => {
    if(cohete_vel_actual > 0) {
        cohete_vel_actual -= 10;
    }
    document.querySelector("#velocidad_id").innerHTML = `${cohete_vel_actual}`;
}