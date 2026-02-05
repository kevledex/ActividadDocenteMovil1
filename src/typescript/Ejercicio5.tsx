import { useState } from "react"

export const Ejercicio5 = () => {
    //hook useState: Permite cambiar el estado (valor) de variables, arreglos, objetos, componentes
    const [contador, setContador] = useState<number>(0);

    //Función que va a trabajar con el setContador para actualizar el estado de contador
    const cambiarContador = (numero: number): void => {
        //Llamar la funcipon setContador para modiicar el estado del contador
        setContador(contador + numero)
    }

  return (
    <div>
        <h3>Ejercicio 5</h3>
        <h4>Contador: <small>{contador}</small></h4>
        <button className="btn btn-dark px-4"
        onClick={() => cambiarContador(5)}> +5
            </button>
        &nbsp;
        <button className="btn btn-secondary px-4"
        onClick={() => cambiarContador(-5)}> -5
            </button>
    </div>
  )
}
