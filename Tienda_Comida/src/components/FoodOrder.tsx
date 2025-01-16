import { MouseEventHandler, useContext, useState } from "react";
import { MenuItem } from "../entites/entities";
import { foodItemsContext } from "../App";
import './FoorOrder.css';
import ima from '../images/Hamburg.jpg';

interface FoodOrderProps {
    food: MenuItem;
    onReturnToMenu: MouseEventHandler<HTMLButtonElement> | undefined;
}
function FoodOrder(props: FoodOrderProps) {
    const [totalAmount, setTotalAmount] = useState(props.food.price);
    const [quantity, setQuantity] = useState(1);
    const [isOrdered, setIsOrdered] = useState(false);

    const menuItems: MenuItem[] = useContext(foodItemsContext)

    const handleClick = () => {
        setIsOrdered(true);
        menuItems.map((item: MenuItem) => {
            if (item.id === props.food.id) {
                item.quantity = item.quantity - quantity;
            }
        });
        props.onReturnToMenu();
    };

    const handleQuantityChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const inputValue = event.target.value;
        const parsedQuantity = parseInt(inputValue, 10); // Convierte a número

        if (!isNaN(parsedQuantity)) { // Verifica si la conversión fue exitosa
            setQuantity(parsedQuantity);
        } else if (inputValue === "") {
            setQuantity(0); // Permite borrar el input y volver a 0
        }
    };

    /*
    const handleOrder = async () => {
        try {
            handleClick();
            await new Promise(resolve => setTimeout(resolve, 1000));
            console.log("Pedido enviado:", { food: props.food.name, quantity });
            setIsOrdered(true);
            props.onReturnToMenu();
        } catch (error) {
            console.error("Error al enviar el pedido:", error);
            // Manejo de errores
        }
    };*/

    return (
        <>
            <div>
                <img
                    className="foodImg"
                    src={ima}
                    alt={props.food.name}
                />
                <h5>Nombre: </h5>
                <p>{props.food.name}</p>
                <h5>Precio: </h5>
                <p>{props.food.price}</p>
                <br />
                <div>
                    <label>Cantidad a ordenar: </label>
                    <input
                        type="number"
                        id="cantidad"
                        className="number"
                        value={quantity}
                        onChange={handleQuantityChange}
                        min="0"
                    />
                    <button onClick={() =>
                        handleClick()}>Ordenar</button>
                </div>
                <button onClick={props.onReturnToMenu}>Volver al menú</button>
            </div>
        </>
    );
};
export default FoodOrder;