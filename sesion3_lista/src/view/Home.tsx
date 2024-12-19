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
    const { items } = useHomeViewModel(todoViewModel);
    //const [newItem, setNewItem] = useState<string>('');
    return (
        <div>
            <Header/>
            <ul>
                {items.map((item: { id: number; nombre: string; color: string; }, index: number) => (
                    <li key={index}>
                    {item.nombre} - {item.color}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Home;