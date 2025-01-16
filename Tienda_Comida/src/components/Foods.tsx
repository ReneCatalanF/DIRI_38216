import { MouseEventHandler, useState } from "react";
import { MenuItem } from '../entites/entities';
import './Foods.css'
import FoodOrder from './FoodOrder'

interface FoodsProps {
    foodItems: MenuItem[];
}
function Foods(props: FoodsProps) {

    const [foodOrder, setfoodOrder] = useState(false);
    const [foodSelect, setfoodSelect] = useState<MenuItem>();
    const handleReturnToMenu = () => {
        setfoodSelect(null);
    };

    const handleClick = (menu: MenuItem) => {
        setfoodSelect(menu);
        setfoodOrder(!foodOrder);
    };

    return (
        <>
            {!foodOrder && (
                <>
                    <h4 className="foodTitle">Choose from our Menu</h4>
                    <ul className="ulFoods">
                        {props.foodItems.map((item) => {
                            return (
                                <li key={item.id} className="liFoods"
                                    onClick={() =>
                                        handleClick(item)}>
                                    <img
                                        className="foodImg"
                                        src={`../images/${item.image}`}
                                        alt={item.name}
                                    />
                                    <div className="foodItem">
                                        <p className="foodDesc">{item.desc}</p>
                                        <p className="foodPrice">{item.price}$</p>
                                    </div>
                                </li>
                            );
                        })}
                    </ul>
                </>
            )
            }
            {foodOrder && <FoodOrder food={foodSelect} onReturnToMenu={handleReturnToMenu}></FoodOrder>}
        </>
    );
};
export default Foods;

