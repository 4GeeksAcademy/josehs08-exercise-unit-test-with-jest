//Importar la funcion sum del archivo app.js
const{sum, fromEuroToDollar, fromYenToPound, fromDollarToYen}=require('./app.js');

//Comienza tu primera prueba
test('14+9 = 23',()=>{
    let total = sum(14,9);
    expect(total).toBe(23);
});

test("One euro should be 1.07 dollars", function() {

    // Uso la función como debe ser usada
    const dollars = fromEuroToDollar(3.5);

    // Si 1 euro son 1.07 dólares, entonces 3.5 euros debe ser (3.5 * 1.07)
    const expected = 3.5 * 1.07;

    // Hago mi comparación (la prueba)
    expect(fromEuroToDollar(3.5)).toBe(3.745); // 1 euro son 1.07 dólares, entonces 3.5 euros deberían ser = (3.5 * 1.07)
});

test("One yen should be 0,00557 pounds", function(){
    expect(fromYenToPound(1)).toBe((1/156.5)*0.87);
});

test("One dollar should be 146,2617 yen", function(){
    expect(fromDollarToYen(1)).toBe((1/1.07)*156.5);
})
