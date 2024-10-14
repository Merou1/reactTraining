import { useState } from "react";

function FoodArray () {

    const [foods,setFoods] = useState(["Apple","Orange","Banana"]);
    const foodItems = foods.map((food,index)=> <li onClick={() => handleRemoveFood(index)} key={index}>{food}</li>)

    const handleAddFoodClick = () => {
        const newFood = document.getElementById("addFoodInput").value;
        document.getElementById("addFoodInput").value = "";
        setFoods(f => [...f,newFood]);
    }
    const handleRemoveFood = index => {
        setFoods(f => f.filter((_,i) => {i!=index}))
    }

    return(
        <div className="foods">
            <h2>List of Food: </h2>
            <ul>
                {foodItems}
            </ul>
            <input type="text" name="" id="addFoodInput" placeholder="Enter Food" />
            <button onClick={handleAddFoodClick}>Add Food</button>
        </div>
    );
}
export default FoodArray;