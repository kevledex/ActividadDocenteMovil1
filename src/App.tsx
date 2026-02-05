import { Ejercicio1 } from './typescript/Ejercicio1';
import { Ejercicio2 } from './typescript/Ejercicio2';
import Ejercicio3 from './typescript/Ejercicio3';
import { Ejercicio4 } from './typescript/Ejercicio4';
import { Ejercicio5 } from './typescript/Ejercicio5';

//componente react -> rafc
export const App = () => {
  return (
    <div className="mt-2">
      <h1 className="text-center">Actividad Contacto Docente KL</h1>
      <hr/>
      <Ejercicio1/>
      <hr />
      <Ejercicio2/>
      <hr />
      <Ejercicio3/>
      <hr />
      <Ejercicio4/>
      <hr />
      <Ejercicio5/>
    </div>
  )
}

export default App
