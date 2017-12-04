"use strict"
/**
 * @file Aplicación para la gestión de un parking
 * @author Lucas Alonso 
 * @version 1.0
 */

/**
 * @class Parking
 * @property {number} capacidad Numero de coches que puede haber en el parking
 * @prop {Array} tunelLavado Lista de coches para lavar
 * @prop {Array} coches Lista de coches que hay en el parking
 */
class Parking {
    /**
     * 
     * @param {number} capacidad Numero de coches que puede haber en el parking
     */
    constructor(capacidad) {
        this.capacidad = capacidad
        this.tunelLavado = []
        this.coches = []
    }
    /**
     * @description Método para meter coche en el parking
     * @param {Objeto} coche Coche que quiero introducir en el parking
     * @returns {number} -1 parking lleno, 0 parking con espacio
     */
    meterCoche(coche) {
        if (this.capacidad > 0) {  //si hay capacidad en el parking
            this.capacidad--
            if (coche.lavado == true) {
                this.tunelLavado.push(coche.matricula);
            } else {
                this.coches.push(coche.matricula)
            }
            return 0;
        } else {
            return -1;
        }
    }

    /**
     * @description Nos devuelve true o false
     * @param {String} matricula Matricula del coche
     * @return {Boolean} True, si lo encuentra. False, si no lo encuentra
     */
    buscarCoche(matricula) {
        if (this.tunelLavado.indexOf(matricula) != -1 || this.coches.indexOf(matricula) != -1) {    //si la matricula del coche esta en tunelLavado o coches (colecciones)
            return true //devuelvo true
        } else {    //sino se cumple ninguna de las dos condiciones
            return false    //devuelvo false
        }
    }

}
let parking = new Parking(1);

let coche1 = {
    matricula: "G3456745",
    lavado: false
}

console.log(parking.meterCoche(coche1))
console.log(parking);

console.log(parking.buscarCoche("G3456745"))