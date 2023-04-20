const LIMITE_MASCOTAS = 3;
const LIMITE_GATOS = 1;
const LIMITE_PERROS = LIMITE_MASCOTAS;

const TIPO_MASCOTA_PERRO = 1;
const TIPO_MASCOTA_GATO = 2;

const CANT_PERROS_DEF = 0;

let tipoMascotaPasear = prompt("ingrese 1 para perro\nIngrese 2 para un gato");
let cantPerros = 0;
if (tipoMascotaPasear == TIPO_MASCOTA_PERRO) {
    cantPerros = prompt("ingrese cantidad de mascotas");
    if (cantPerros > LIMITE_GATOS) {
        document.write("no es posible sacar a pasear esa cantidad de perros!");
    }else{
        document.write("espere hasta que llegue el personal para pasear a su mascota/s");
     }
}else{
    document.write("espere hasta que llegue el personal para pasear a su mascota");
}
}