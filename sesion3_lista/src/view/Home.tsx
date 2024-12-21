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
    const { items, gato_seleccionado,seleccionarGato } = useHomeViewModel(todoViewModel);
    const [buscar_gato, setbuscar_gato] = useState('');
    const [showModal, setShowModal] = useState(false);

    const handleSearch = () => {
        const encontrando_al_gato = items.find(item => item.nombre.toLowerCase() === buscar_gato.toLowerCase());

        if (encontrando_al_gato) {
            seleccionarGato(encontrando_al_gato.id);
            setShowModal(false);
        } else {
            setShowModal(true);
        }
    };
    //const [newItem, setNewItem] = useState<string>('');
    return (
        <>
        <Header/>
        <table>
            <tr>
                <th>ID</th>
                <th>Nombre</th>
                <th>Color</th>
                <th>A</th>
            </tr>
            {items.map((item: { id: number; nombre: string; color: string; mh: string; }) => (
                <>
                    <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.nombre}</td>
                        <td>{item.color}</td>
                        <td><button onClick={() => { seleccionarGato(item.id) }}>Seleccionar gato</button></td>
                    </tr>
                    
                </>  
            ))}
        </table> 
        <br/>
        <br/>
        <div>
            <p>Buscar gato por nombre</p>
            <input
                type="text"
                placeholder="gato1"
                value={buscar_gato}
                onChange={(e) => setbuscar_gato(e.target.value)}
            />
            <button onClick={handleSearch}>Buscar</button>
        </div>
        <br/>
        <br/>
        <div>
        {!showModal && 
        <>
            INFORMACION DEL GATO {gato_seleccionado.nombre}
        <table>
            <tr>
                <th>ID</th>
                <th>Nombre</th>
                <th>Color</th>
                <th>MH</th>
            </tr>
                <>
                <tr key={gato_seleccionado.id}>
                        <td>{gato_seleccionado.id}</td>
                        <td>{gato_seleccionado.nombre}</td>
                        <td>{gato_seleccionado.color}</td>
                        <td>{gato_seleccionado.mh}</td>
                    </tr>
                </>
        </table> 
        </>
        }
        </div>
        {showModal && (
                <div>
                    <div>
                        <p>No se encontró ningún gato con el nombre "{buscar_gato}".</p>
                    </div>
                </div>
        )}
        </>
        
    );
};

export default Home;