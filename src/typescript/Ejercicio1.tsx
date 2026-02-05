export const Ejercicio1 = () => {

  //funcion return
  const areaCuadrado = (lado: number): number => {
    return lado * lado;
  }

  return (
    <div>
        <h3>Ejercicio 1</h3>
        <span>El area del cuadrado es: {areaCuadrado(4)}</span>
    </div>
  )
}
