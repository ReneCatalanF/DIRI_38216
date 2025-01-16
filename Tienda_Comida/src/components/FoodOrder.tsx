import { MouseEventHandler } from "react";
import { MenuItem } from "../entites/entities";

interface FoodOrderProps {
    food: MenuItem;
    onQuantityUpdated(id: number, quantity: number): void;
    onReturnToMenu: MouseEventHandler<HTMLButtonElement> | undefined;
}
function FoodOrder(props: FoodOrderProps) {

    return (
        <>
            <div>
                <h5>Nombre: </h5>
                <p>{props.food.name}</p>
                <h5>Precio: </h5>
                <p>{props.food.price}</p>
                <br/>
            </div>
        </>
    );
};
export default FoodOrder;