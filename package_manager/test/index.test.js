const assert = require('assert');
const sumar = require('../src/index');

//Grupos o set de pruebas
describe("Comprobar la suma de dos numeros", ()=>{
    //Positivo afirmar que 5 + 5 = 10
    it("Cinco mas cinco es diez", () => {
        assert.equal(10,sumar(5,5));
    })

    //Negativo afirmar que 5 + 5 != 5
    it("Cinco mas cinco es diferente de diez", () => {
        assert.notEqual(55,sumar(5,5));
    })
});