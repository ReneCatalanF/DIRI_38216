import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { MenuItem } from './entites/entities';
import Foods from './components/Foods';
//import './App.css'

function App() {
  const [isChooseFoodPage, setIsChooseFoodPage] = useState(false);

  const [menuItems, setMenuItems] = useState<MenuItem[]>([
    {
      "id": 1,
      "name": "Hamburguesa de Pollo",
      "quantity": 40,
      "desc": "Hamburguesa de pollo frito - … y mayonesa",
      "price": 24,
      "image": "Hamburg.jpg"
    },
    {
      "id": 2,
      "name": "Hamburguesa de Vacuno",
      "quantity": 50,
      "desc": "Hamburguesa de Vacuno frito - … con tomate y mayonesa",
      "price": 26,
      "image": "Hamburg.jpg"
    },
    {
      "id": 3,
      "name": "Hamburguesa de Cerdo",
      "quantity": 60,
      "desc": "Hamburguesa de Cerdo frito - … con tomate y mayonesa",
      "price": 26,
      "image": "Hamburg.jpg"
    },
    {
      "id": 4,
      "name": "Hamburguesa de Hormiga",
      "quantity": 70,
      "desc": "Hamburguesa de Hormiga frita - … con tomate y mayonesa",
      "price": 26,
      "image": "Hamburg.jpg"
    },
  ]);

  return (
    <div className="App">
      <button className="toggleButton" onClick={() =>
        setIsChooseFoodPage(!isChooseFoodPage)}>
        {isChooseFoodPage ? "Disponibilidad" : "Pedir Comida"}
      </button>
      <h3 className="title">Comida Rápida Online</h3>
      {!isChooseFoodPage && (
        <>
          <h4 className="subTitle">Menús</h4>
          <ul className="ulApp">
            {menuItems.map((item) => {
              return (
                <li key={item.id} className="liApp">
                  <p>{item.name}</p><p>#{item.quantity}</p>
                </li>
              );
            })}
          </ul>
        </>
      )}
      {isChooseFoodPage && <Foods foodItems={menuItems}></Foods>}
    </div>
  )
}

export default App
