interface Alumno {
        name: string;
        edad: number;
        calificacion: number;
    }

export const Ejercicio4 = () => {

    const alumnos: Alumno[] = [
    {
        name: "Viviana",
        edad: 19,
        calificacion: 10,
    },
    {
        name: "Wendy",
        edad: 20,
        calificacion: 8,
    },
    {
        name: "Gerson",
        edad: 18,
        calificacion: 9,
    }
];

const promedio = (lista: Alumno[]): number => {
      let total = 0;

      for (let index = 0; index < lista.length; index++) {
            total += lista[index].calificacion;
        }
    return total/3;
  }

  return (
    <div>
        <h3>Ejercicio 4</h3>
        <span>El promedio de las calificaciones: {promedio(alumnos)}</span>
    </div>
  )
}

