// Ejercicio 1: Contar caracteres repetidos
// Instrucción: Dada una cadena de texto, crear una función que 
// cuente cuántas veces aparece cada letra en la cadena.

// Ejemplo:


// countLetters("programacion") 
// // Salida esperada: { p: 1, r: 2, o: 2, g: 1, a: 2, m: 1, c: 1, i: 1, n: 1 }
// Pista: Usa un array de objetos o directamente un objeto para almacenar las ocurrencias.



// 2- Ejercicio 2: Encontrar el número más grande y más pequeño
// Instrucción: Crear una función que reciba un array de números 
// y devuelva el número más grande y el más pequeño.

// Ejemplo:

// findMinMax([3, 5, 7, 2, 8])
// // Salida esperada: { max: 8, min: 2 }
// Pista: Usa bucles para recorrer el array y comparar valores.



// 3. Ejercicio 3: Sumar números dentro de un array anidado
// Instrucción: Crear una programa que reciba un array que puede contener números 
// o arrays anidados y devolver la suma total de todos los números.

// Ejemplo:

// sumNested([1, [2, 3], [4, [5, 6]]])
// // Salida esperada: 21
// Pista: Usa Array.isArray() para verificar si el elemento es un array, y un 
// bucle anidado para sumar.



// 4. Ejercicio 4: Multiplicar matrices
// Instrucción: Crear una función que reciba dos matrices (arrays bidimensionales) 
// y devuelva el resultado de su multiplicación. Ambas matrices deben tener 
// dimensiones compatibles para ser multiplicadas.

// Ejemplo:


// multiplyMatrices([[1, 2], [3, 4]], [[1, 0], [0, 1]])
// // Salida esperada: [[1, 2], [3, 4]]
// Pista: Usa bucles anidados para multiplicar las filas de la primera 
// matriz por las columnas de la segunda.




// // 5. Ejercicio 5: Crear un tablero de ajedrez
// Instrucción: Crear una función que reciba un número n y devuelva una matriz 
// bidimensional que represente un tablero de ajedrez de tamaño n x n, 
// alternando "blanco" y "negro".

// Ejemplo:


// createChessBoard(4)
// /* 
// Salida esperada:
// [
//   ['blanco', 'negro', 'blanco', 'negro'],
//   ['negro', 'blanco', 'negro', 'blanco'],
//   ['blanco', 'negro', 'blanco', 'negro'],
//   ['negro', 'blanco', 'negro', 'blanco']
// ]
// */
// Pista: Usa bucles anidados y condicionales para alternar los colores 
// en cada fila y columna.


// Ejercicio 6: Revertir palabras en una oración
// Instrucción: Crear una función que reciba una cadena de texto y devuelva la misma oración 
// pero con las palabras en orden inverso.

// Ejemplo:

// reverseWords("Hola mundo")
// // Salida esperada: "mundo Hola"
// Pista: Usa el método split para separar las palabras, y join para unirlas.


// Ejercicio 7: Filtrar números primos
// Instrucción: Crear una función que reciba un array de números y devuelva un nuevo array
// con solo los números primos.

// Ejemplo:

// filterPrimes([2, 3, 4, 5, 6, 7, 8, 9, 10])
// // Salida esperada: [2, 3, 5, 7]
// Pista: Usa una función auxiliar que verifique si un número es primo.


// Ejercicio 8: Validar un palíndromo
// Instrucción: Crear una función que reciba una cadena de texto y determine si es un palíndromo
// (se lee igual de izquierda a derecha que de derecha a izquierda).

// Ejemplo:

// isPalindrome("reconocer")
// // Salida esperada: true
// Pista: Compara la cadena original con su versión invertida.


// Ejercicio 9: Ordenar números en un array
// Instrucción: Crear una función que reciba un array de números y lo devuelva ordenado 
// de menor a mayor sin usar el método sort de JavaScript.

// Ejemplo:

// sortNumbers([5, 3, 8, 4, 1])
// // Salida esperada: [1, 3, 4, 5, 8]
// Pista: Usa un algoritmo de ordenación como bubble sort, selección, o inserción.


// Ejercicio 10: Contar palabras en una cadena
// Instrucción: Crear una función que reciba una cadena de texto y devuelva el número 
// de palabras que contiene.

// Ejemplo:

// countWords("Hola, ¿cómo estás?")
// // Salida esperada: 3
// Pista: Usa el método split para dividir la cadena por espacios.
