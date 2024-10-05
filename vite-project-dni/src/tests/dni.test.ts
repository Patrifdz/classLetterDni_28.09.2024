import { expect, test } from 'vitest'
import { getLetterDni } from '../dni.ts'


test('adds "99999999" to getLetterDni "letter"', () => {
    //arrange
    /*Vamos a recibir un array con los números del DNI*/
    const numDni = -1; 
    //act
    /* La función getLetterDni: 
       - Primero calcula el resto de la división del número del Dni entre 23 
       - Después comprueba a qué letra corresponde la posición indicada por el número obtenido del resto y devuelve dicha letra*/
    const letterDni = getLetterDni(numDni);
    //assert
    expect(letterDni).toBe("El número de DNI indicado no es correcto")
  })

  test('add "76657385" to getLetterDni "letter"', () => {
    //arrange
    const numDni = 76657385;
    //act
    const letterDni = getLetterDni(numDni);
    //assert
    expect(letterDni).toBe("H");
  })

  test('add "76657385" to getLetterDni "letter"', () => {
    //arrange
    const numDni = 0;
    //act
    const letterDni = getLetterDni(numDni);
    //assert
    expect(letterDni).toBe("El número de DNI indicado no es correcto");
  })
