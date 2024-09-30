
const letters = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E'];

type DNILetter = 'T' | 'R' | 'W' | 'A' | 'G' | 'M' | 'Y' | 'F' | 'P' | 'D' | 'X' | 'B' | 'N' | 'J' | 'Z' | 'S' | 'Q' | 'V' | 'H' | 'L' | 'C' | 'K' | 'E' | 'El número de DNI indicado no es correcto';

export function getLetterDni (numDni : number): DNILetter | string {
    if (numDni > 0 && numDni <= 99999999 ) {
    const resto = numDni%23;
    const letterDni = letters[resto];
    return letterDni;
    } else {
    return "El número de DNI indicado no es correcto"
    }
}