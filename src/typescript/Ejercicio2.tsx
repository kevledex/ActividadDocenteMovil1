export const Ejercicio2 = () => {

    const arreglo: number[] = [5, 5, 8, 2, 10, 9, 1];

    const sumarArreglo = (numeros: number[]): number => {
      //acum es donde se gaurda la suma
      //el valor es el numero actual y 0 el numero que inicia
      return numeros.reduce((acum, valor) => acum + valor, 0)
  }

  return (
    <div>
        <h3>Ejercicio 2</h3>
        <span>Numeros del arreglo: {arreglo.join(", ")}</span>
        <br /><br />
        <span>La suma del arreglo es: {sumarArreglo(arreglo)}</span>
    </div>
  )
}
