// Escribe una función que devuelva el último elemento de un array. Además, debe tener otro parámetro opcional que, en caso de pasarse, devolvería esa cantidad de números empezando por el final. Es decir, si mi array es [1, 2, 3, 4, 5] y yo le paso el 3 como parámetro, debe devolverme [3, 4, 5] y, si no le paso nada como parámetro, debe devolverme solo el 5.

const last = (array, n) => {
  if (n == null) return array[array.length - 1];
  return array.slice(Math.max(array.length - n, 0));
};

console.log(last([7, 9, 0, -2]));
console.log(last([7, 9, 0, -2], 3));
console.log(last([7, 9, 0, -2], 6));

// Escribe una función que, dado un array de números, devuelva una string con todos esos números e inserte guiones entre los números pares. Es decir, dado el array [0, 2, 3, 4, 6, 7, 8], me devolvería “0 2 3 4-6 7 8”

let numbers = [1, 2, 3, 4, 5, 6, 8, 9, 10, 12, 14, 15];
let result = [];

for (let i = 1; i < numbers.length; i++) {
  if (numbers[i - 1] % 2 === 0 && numbers[i] % 2 === 0) {
    result.push("-", numbers[i]);
  } else {
    result.push(numbers[i]);
  }
}
console.log(result.join(" "));

// Dado un array con elementos repetidos, determina qué elemento es el más frecuente y cuántas veces se ha repetido

const arr1 = [3, "a", "a", "a", "a", 2, 3, "a", 3, "a", 2, 4, 9, 3];
let mostFrequent = 1;
let amount = 0;
let item;
for (let i = 0; i < arr1.length; i++) {
  for (let j = i; j < arr1.length; j++) {
    if (arr1[i] == arr1[j]) {
      amount++;
    }
    if (mostFrequent < amount) {
      mostFrequent = amount;
      item = arr1[i];
    }
  }
  amount = 0;
}
console.log(`${item} ( ${mostFrequent} veces ) `);

// Dada una string, crea una función que cambie todas sus mayúsculas a minúsculas y todas sus minúsculas a mayúsculas y devuelva una nueva string.

let string = "Hola";
let arrayString = [...string];
let cambiado = [];

arrayString.map((letra) => {
  let minuscula = letra.toLowerCase();
  if (letra === minuscula) {
    cambiado.push(letra.toUpperCase());
  } else {
    cambiado.push((letra = letra.toLowerCase()));
  }
});

console.log(cambiado.join(""));

// Crea una función que, dado el siguiente array: [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]] saque por consola cada uno de sus arrays interiores separados por indicadores con el número de fila, es decir:
// Fila 1
// 1
// 2
// 1
// 24
// Fila 2
// 8
// ...

const a = [
  [1, 2, 1, 24],
  [8, 11, 9, 4],
  [7, 0, 7, 27],
  [7, 4, 28, 14],
  [3, 10, 26, 7],
];

for (let i = 0; i < a.length; i++) {
  {
    console.log("fila " + i);
    a[i].map((elemento) => console.log(elemento));
  }
}

// Escribe una función que devuelva los años bisiestos en cierto rango de años.

function leap_year_range(st_year, end_year) {
  const year_range = [];
  for (let i = st_year; i <= end_year; i++) {
    year_range.push(i);
  }
  const new_array = [];

  year_range.forEach((year) => {
    if (test_LeapYear(year)) new_array.push(year);
  });

  return new_array;
}

function test_LeapYear(year) {
  if (
    (year % 4 === 0 && year % 100 !== 0) ||
    (year % 100 === 0 && year % 400 === 0)
  ) {
    return year;
  } else {
    return false;
  }
}

console.log(leap_year_range(2000, 2012));

// Crea una función que, dados un array y uno de sus elementos, elimine ese elemento del array

let array1 = [1, 2, 3, 4, 5, 6];

const removeItemArray = (array, item) => {
  array.splice(array.indexOf(item), 1);
  return array;
};

console.log(removeItemArray(array1, 3));

// Crea una función que, dados dos arrays, devuelva un único array con ambos arrays concatenados pero que elimine los elementos repetidos de los mismos.

let array2 = [4, 5, 6, 7, 8, 9];

const mergeArrays = (array1, array2) => {
  array1.map((numero) => {
    array2.map((numero2) => {
      if (numero === numero2) {
        array2.splice(array2.indexOf(numero2), 1);
      }
    });
  });

  return array1.concat(array2);
};

console.log(mergeArrays(array1, array2));

// Crea una función que determine si un array contiene cierto elemento, pasando ambos como argumentos a la misma

let contains = (array, element) => {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === element) {
      return true;
    }
  }
  return false;
};

console.log(contains([1, 2, 3, 4, 5, 6], 8));
// Escribe una función que rellene un array con un determinado número de elementos y pasa ambas cosas por parámetro. Es decir, la ejecución de rellenar(3, 4) sería [4, 4, 4]

let fill = (quantity, element) => {
  let array = [];
  for (let i = 0; i < quantity; i++) {
    array.push(element);
  }
  return array;
};

console.log(fill(3, 4));

// Escribe una función para intercambiar las posiciones de dos elementos en un array.

let move = (array, initialPos, finalPos) => {
  let placeholder = array[finalPos];
  array[finalPos] = array[initialPos];
  array[initialPos] = placeholder;
  return array;
};
console.log(move([1, 2, 5], 0, 2));

// Escribe una función que genere un array de números y pásale por parámetro el número inicial y el largo del array. El array resultante debe ir sumando de uno en uno hasta alcanzar el largo deseado.

let generate = (initialNumber, length) => {
  let array = [];
  // for (let i = initialNumber; i < length + initialNumber; i++) {
  //   array.push(i);
  // }
  for(let i = 0; i < length; i++) {
    array.push(initialNumber)
    initialNumber++
  }
  return array;
};

console.log(generate(20, 35));

// Escribe una función que, al pasarle un array como argumento, determine qué elementos de ese array son números y devuelva la suma de los mismos.

let arrayMixed = [2, "11", 3, "a2", false, 5, 7, 1];

const sumNumbers = (array) => {
  let sum = 0;
  array.map((element) => {
    if (typeof element === "number") {
      sum += element;
    }
  });
  return sum;
};

console.log(sumNumbers(arrayMixed));

// Escribe una función que determine la palabra más larga de una string

const longestWord = (string) => {
  let array = string.split(" ");
  let longest = array[0];

  array.map((element) => {
    if (element.length > longest.length) {
      longest = element;
    }
  });
  return longest;
};

console.log(longestWord("Hola esto es una prueba"));

// Crea una función que, dada una string, cuente cuántas vocales hay en la misma y devuelva el resultado

const countVowels = (string) => {
  let vowels = ["a", "e", "i", "o", "u"];
  let array = [...string];
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < vowels.length; j++) {
      if (array[i].toLowerCase() === vowels[j]) {
        sum++;
      }
    }
  }

  return sum;
};

console.log(countVowels("HOla que tal AAa"));

// Crea una función que genere una contraseña aleatoria. Debes pasar por parámetro la cantidad de caracteres que quieres que tenga la contraseña.

const generatePassword = (length) => {
  let possibilities =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let password = "";
  for (let i = 0; i < length; i++) {
    password += possibilities.charAt(
      Math.round(Math.random() * possibilities.length)
    );
  }

  return password;
};

console.log(generatePassword(5));

// Crea una función que determine cuántas propiedades tiene un objeto

let testObject = {
  prop1: 1,
  prop2: 2,
  prop3: 3,
  prop4: 4,
};

const howManyProperties = (object) => {
  let amount = 0;
  for (const property in object) {
    amount++;
  }
  return amount;
};

console.log(howManyProperties(testObject));

// Crea una función reloj que vaya desde las 23:58:00 hasta las 00:00:00 y saque por consola cada segundo y minuto entre ambas.

let hora = 23;
let minuto = 58;
let segundo = 0;
const reloj = () => {
  while (segundo < 60) {
    segundo++;
    if (segundo > 59) {
      minuto++;
      segundo = 0;
    }

    if (minuto > 59) {
      hora++;
      minuto = 0;
    }

    if (hora > 23) {
      hora = 0;
    }

    console.log(`${hora} : ${minuto} : ${segundo}`);

    if (hora == 0 && minuto == 0 && segundo == 0) {
      return;
    }
  }
};

// console.log(reloj());

// Escribe una función que compruebe si un objeto tiene determinada propiedad

const hasProperty = (object, property) => {
  for (const key in object) {
    if (key === property) {
      return true;
    }
  }
  return false;
};

console.log(hasProperty(testObject, "prop7"));

// Escribe una función que sume todos sus argumentos, independientemente de cuántos sean

let sum = (...args) => {
  if(args.length < 2){
    return 'I need at least two numbers to sum'
  } else {
    let sum = 0;
    args.map(arg => sum += arg)
    return sum
  }
}

console.log(sum(1, 2, 3, 4, 5, 6))

// Escribe una función que me diga si un alumno está aprobado o no, a la cual puedo pasar cualquier cantidad de notas como parámetro

let aprobado = (...notas) => {
  let sumaNota = 0
  notas.map(nota => sumaNota += nota)
  let media = sumaNota / notas.length

  if(media >= 5){
    return 'Aprobado'
  } else {
    return 'Suspenso'
  }
}

console.log(aprobado(4, 5, 6, 7, 2))

// Crea dos arrays de objetos. El primero debe contener los nombres y apellidos de por lo menos tres personas. El segundo debe contener otros datos de esas mismas personas, como su dirección y su número de teléfono. Utiliza una función para combinar ambos arrays y obtener un array nuevo en que cada objeto contiene toda la información de cada persona.

let arrayNames = [
  {
    name: "Mara",
    surname: "Scampini",
  },
  {
    name: "Pablo",
    surname: "González",
  },
  {
    name: "Pau",
    surname: "Cervera",
  },
];

let arraySurnames = [
  {
    age: 30,
  },
  {
    age: 35,
  },
  {
    age: 25,
  },
];

let arrayFullNames = [];

const addProperty = (array1, array2, combined) => {
  for (let i = 0; i < array1.length; i++) {
    combined.push({ ...array1[i], ...array2[i] });
  }
  return combined;
};

let combined = addProperty(arrayNames, arraySurnames, arrayFullNames);

console.log(combined)

// Dado el objeto combinado del ejercicio anterior, crea una función que saque cada uno de los objetos excluyendo la edad de la persona. Es decir, debo ver todas las propiedades de cada objeto menos la edad. Hazlo utilizando el operador rest.

const excludeAge = (array) => {
  array.map((object) => {
    let { age, ...noAge } = object;
    console.log(noAge);
  })
}

excludeAge(combined)

combined.map((object) => {
  let { age, ...noAge } = object;
  console.log(noAge);
});
