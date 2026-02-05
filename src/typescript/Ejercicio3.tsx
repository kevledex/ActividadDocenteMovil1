export default function Ejercicio3() {

    const arreglo: number[] = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50];

    const division = (numeros: number[]): number[] => {
        return numeros.map(numeros => numeros/5);
    }

    const nuevoArreglo = division(arreglo);

  return (
    <div>
        <h3>Ejercicio 3</h3>
        <span>Arreglo: {arreglo.join(", ")}</span>
        <br /><br />
        <span>valores divididos para 5: {nuevoArreglo.join(", ")}</span>
    </div>
  )
}
