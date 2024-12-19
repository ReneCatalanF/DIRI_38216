/*import { list_cats } from "../model/cats"
import Header from "./Header"


const Home = (): React.JSX.Element =>
<div>
<Header/>
<h1>Página principal</h1>
{{<list_cats/>}}
</div>

export default Home*/

import React, { useState } from 'react';
import { HomeViewModel } from '../viewmodel/HomeViewModel';
import { useHomeViewModel } from '../viewmodel/useHomeViewModel';
import Header from './Header';
// Creamos una instancia del ViewModel fuera del componente
// En un caso real, se podría inyectar desde un contexto, provider, etc.
const todoViewModel = new HomeViewModel();
const Home: React.FC = () => {
    const { items, gato_seleccionado } = useHomeViewModel(todoViewModel);
    const [seleccionarGato] = useState<number>();
    //const [newItem, setNewItem] = useState<string>('');
    return (
        <>
        <Header/>
        <table>
            <tr>
                <th>ID</th>
                <th>Nombre</th>
                <th>Color</th>
            </tr>
            {items.map((item: { id: number; nombre: string; color: string; mh: string; }) => (
                <>
                    <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.nombre}</td>
                        <td>{item.color}</td>
                    </tr>
                </>  
            ))}
        </table> 
        <br/>
        <br/>
        <br/>
        <div>
        INFORMACION DEL GATO {gato_seleccionado[0].nombre}
        <table>
            <tr>
                <th>ID</th>
                <th>Nombre</th>
                <th>Color</th>
                <th>MH</th>
            </tr>
                <>
                <tr key={gato_seleccionado[0].id}>
                        <td>{gato_seleccionado[0].id}</td>
                        <td>{gato_seleccionado[0].nombre}</td>
                        <td>{gato_seleccionado[0].color}</td>
                        <td>{gato_seleccionado[0].mh}</td>
                    </tr>
                </>
        </table> 
        </div>
        </>
        
    );
};

export default Home;