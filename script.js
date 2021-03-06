// Objetos
// Hacer test unitarios y funciones puras(no deberían mutar los objetos pasados como argumentos)

// Volumen de caja
// Crear una función que devuelva el volumen de una caja cuando se le pase un objeto con las medidas de la misma, correspondientes al ancho, alto, y largo.El volumen se calcula multiplicando entre sí dichos valores.
// const size = { width: 2, length: 5, height: 1 }
// getBoxVolume(size) // returns 10

// const size = { width: 2, length: 5, height: 1 }

const getBoxVolume = (size) => {
    let volume = 1;
    for (let value of Object.values(size)) {

        volume *= value;
    }
    return volume
}

// Redondeo
// Hacer una función que dado un número, devuelva un objeto con el número redondeado hacia abajo(Math.floor), hacia arriba(Math.ceil) y dependiendo de su punto flotante(Math.round)
// round(13.3) //  returns { floor: 13, ceil: 14, round: 13 }


const round = number => {

    const rounding = {
        floor: Math.floor(number),
        ceil: Math.ceil(number),
        round: Math.round(number),
    }

    return rounding
}

// Unión de objetos
// Crear una función que dos objetos como argumentos, y devuelva un objeto que sea la unión de ambos.Es decir, debe contener las propiedades de ambos objetos.Para aquellas propiedades que están compartidas entre ambos, como un objeto no puede tener propiedades repetidas, se debe priorizar el objeto del primer parámetro.
// const info1 = { a: 1, b: 2, c: 3 }
// const info2 = { d: 4, b: 5 }
// merge(info1, info2) // returns {a: 1, b: 2, c: 3, d: 4}

const info1 = { a: 1, b: 2, c: 3 }
const info2 = { d: 4, b: 5 }
const merge = (info1, info2) => {

    const newObject = Object.assign({}, info1, info2);

    return newObject

} // returns {a: 1, b: 2, c: 3, d: 4}


// Diferencia de objetos
// Igual que el anterior, pero debe devolver un objeto con las propiedades que no se repiten entre ambos objetos
// const info1 = { a: 1, b: 2, c: 3 }
// const info2 = { d: 4, b: 5 }
// differentiate(info1, info2) // returns {a: 1, c: 3, d: 4}


const differentiate = (info1, info2) => {

    const newObject = {};
    for (let prop1 in info1) {
        if (!(prop1 in info2)) {
            newObject[prop1] = info1[prop1]
        }
    }
    for (let prop2 in info2) {

        if (!(prop2 in info1)) {
            newObject[prop2] = info2[prop2]
        }
    }
    return newObject
}

// Eliminar propiedades
// Crear una función que tome como argumentos un objeto y un array con strings, y devuelva el objeto sin las propiedades especificadas en el array
// const data = { a: 1, b: 2, c: 3 }
// const props = ["c"]
// removeProperties(data, props) // returns {a: 1, b: 2}



const removeProperties = (data, props) => {
    const newObject = {};
    for (let prop in data) {
        if (!(props.includes(prop))) {
            newObject[prop] = data[prop]
        }
    }
    return newObject
}

// Filtrar propiedades
// Crear una función que tome como argumentos un objeto y un array con strings, y devuelva el objeto con solo las propiedades especificadas en el array
// const data = { a: 1, b: 2, c: 3 }
// const props = ["c", "b"]
// filterProperties(data, props) // returns {b: 2, c: 3}


const filterProperties = (data, props) => {
    const newObject = {};
    for (let prop in data) {
        if (props.includes(prop)) {
            newObject[prop] = data[prop]
        }
    }
    return newObject
}

// Comprar productos
// Crear una función que dado un objeto con productos y precios, y la cantidad de dinero disponible, devuelva un objeto con dichos productos, teniendo como valor true si puede comprarlo o false sino
// const products = { cookies: 60, chocolate: 110, soda: 120, }
// const money = 115
// buyProducts(money, products) // returns { cookies: true, chocolate: true, soda: false }


const buyProducts = (money, products) => {

    const newObject = Object.assign({}, products);

    for (const key in newObject) {
        if (newObject[key] <= money) {
            newObject[key] = true;
        } else {
            newObject[key] = false;
        }
    }

    return newObject

} // returns { cookies: true, chocolate: true, soda: false }





// Comprar lista de productos
// Crear una función que dado un objeto con productos y precios, y la cantidad de dinero disponible, true si puede comprarlos a todos o false si no
// const products = { cookies: 60, chocolate: 110, soda: 120, }
// const money = 300
// canBuyAllProduct(money, products) // returns true

const canBuyAllProduct = (money, products) => {

    const newObject = Object.assign({}, products);
    let suma = 0;
    for (const key in newObject) {
        suma += newObject[key];
    }

    if (suma <= money) {
        return true;

    } else {
        return false;
    }
}



// Obtener experiencia
// Crear una función que dado un objeto que contenga niveles de experiencia y puntaje por cada nivel, y un objeto con la cantidad de desafíos realizados por cada nivel, devuelva la cantidad total de experiencia obtenida
// const score = { EASY: 10, MEDIUM: 50, HARD: 100 }
// const challenges = { EASY: 3, MEDIUM: 4, HARD: 2 }
// getXP(challenges, score) // returns 630 (3 * 10 + 4 * 50 + 2 * 100)

const score = { easy: 10, medium: 50, hard: 100 }
const challenges = { easy: 3, medium: 4, hard: 2 }
const getXP = (score, challenges) => {
    const { easy: cantidadFacil, medium: cantidadMedia, hard: cantidadDificil } = challenges;
    return ((score.easy * cantidadFacil) + (score.medium * cantidadMedia) + (score.hard * cantidadDificil))


} // returns 630 (3 * 10 + 4 * 50 + 2 * 100)


// Analizando strings
// Crear una función que dado un string devuelva un objeto con la cantidad de letras, espacios y números que contiene.Cualquier cosa que no sea un número o un espacio cuenta como una letra
// getStringInfo("H3ll0 Wor1d") // returns { LETTERS:  7, DIGITS: 3, SPACES: 1 }
const string = "H3ll0 Wor1d";
const getStringInfo = (string) => {
    const chars = string.split("");
    const newObject = { letters: 0, digits: 0, spaces: 0 };


    for (const char of chars) {

        if (char === " ") {
            newObject.spaces++
        } else if (!isNaN(Number(char))) {
            newObject.digits++
        } else {
            newObject.letters++
        }
    }

    return newObject

} // returns { LETTERS:  7, DIGITS: 3, SPACES: 1 }






// Analizando párrafos
// Crear una función que dado un string devuelva un objeto con la cantidad de letras, palabras y oraciones.
//     getParagraphInfo("Do. Or do not. There is no try.") // returns { LETTERS:  21, WORDS: 8, SENTENCE: 3 }




// Contar palabras
// Crear una función que dado un string devuelva un objeto con cada palabra que hay y la cantidad de veces que aparece.La función debe ignorar el caso("JavaScript" y "javascript" cuentan como una misma palabra) y el objeto devuelto debe tener todas sus propiedades en minúscula
// countWords("El que compra pocas capas pocas capas paga") // returns { el: 1, que: 1, compra: 1, pocas: 2, capas: 2, paga: 1 }




// Parámetros de búsqueda
// Los parámetros de búsqueda en una URL son aquellos que vienen después del signo ? y se escriben como parametro = valor, separados por el signo &.Crear una función que dada una URL, devuelva un objeto con cada parámetro como clave con su respectivo valor.

//     parseQueryParams("http://www.exercises.com?keyword=objects&language=javascript&level=intermediate") // returns { keyword: "objects", language: "javascript", level: "intermediate }



// Ocurrencias en palabra
// Crear una función que dado un string y un array de letras, devuelva un objeto con la cantidad de dichas letras que hay en cada palabra.La función debería tener un parámetro opcional que permite definir si va a ser sensible al caso o no(si "A" y "a" cuentan como dos letras distintas o no)
// findOcurrencies("Hello World", ["o", "l"])

// /** returns
// {
//   hello: {
//     o: 1,
//     l: 2
//   },
//   world: {
//     o: 1,
//     l: 1
//   }
// }



// Batalla
// Crear una función que acepte dos combatientes.Cada combatiente debe tener: nombre, vida, defensa y ataque.Por ronda, se atacan una vez cada uno, usando la siguiente fórmula: daño = ataque - defensaEnemigo y restando a la vida el daño generado.La batalla termina cuando la vida de cualquiera llegue a 0 o menos.Devolver un objeto que indique la cantidad de rondas de duración y quién ganó.
// const fighterA = { name: "Chun-Li", life: 100, attack: 40, defense: 10 }
// const fighterA = { name: "Cammy", life: 50, attack: 20, defense: 20 }
// fight(fighterA, fighterB) // returns { rounds: 3, winner: "Chun-Li"}





// Búsqueda laboral
// Crear una función que dada una persona y una búsqueda de empleo, devuelva true si la persona se ajusta a dicha búsqueda.Ambos objetos tienen la siguiente estructura:
// {
//     experience: 1,
//         languages: ["JavaScript", "HTML"],
//             location: ["Buenos Aires"],
//                 remuneration: 40000
// }
// La persona es adecuada si:

// tiene igual o más años de experiencia que la búsqueda
// los lenguajes que conoce son los que contiene la búsqueda(puede conocer más, pero no afecta en nada)
// su locación está incluida dentro de las locaciones posibles de la búsqueda
// su remuneración(pretendida) es igual o menor a la de la búsqueda


