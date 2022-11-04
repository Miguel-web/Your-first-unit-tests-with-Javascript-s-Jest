//importar la función sum del archivo app.js
//const { sum } = require('./app.js');

// comienza tu primera prueba run test
//test('adds 14 + 9 to equal 23', () => {
    //dentro de la prueba llamamos a nuestra función sum con 2 números
    //let total = sum(14, 9);

    // esperamos que la suma de esos 2 números sea 23
    //expect(total).toBe(23);
//});

//1 EUR (Euro) = 1.2 USD (US Dollar)

test("One euro should be 1.206 dollars", function(){
    //import the function from app.js
    const { fromEuroToDollar } = require('./app.js')

    
    // this is the comparison for the unit test
     expect(fromEuroToDollar(3.5)).toBe(4.2); //1 euro are 1.2 dolares, then 3.5 euros should be = (3.5 * 1.2)
})