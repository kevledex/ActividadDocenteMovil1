export const Ejercicio2 = () => {

    const arrreglo: number[] = [5, 5, 8, 2, 10, 9, 1];

    const sumarArreglo = (numeros: number[]): number => {
      let total = 0;

      for (let index = 0; index < numeros.length; index++) {

        total += numeros[index];
      }
    return total;
  }

  return (
    <div>
        <h3>Ejercicio 2</h3>
        <span>Numeros del arreglo: {arrreglo.join(", ")}</span>
        <br /><br />
        <span>La suma del arreglo es: {sumarArreglo(arrreglo)}</span>
    </div>
  )
}
