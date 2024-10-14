import { useState } from "react";

function CarObjects () {
    const [car,setCar] = useState([]); 
    const [year,setYear] = useState(new Date().getFullYear());
    const [make,setMake] = useState("");
    const [model,setModel] = useState("");

    const handleAddCar = () => {
        const year = document.getElementById("date").value;
        const make = document.getElementById("make").value;
        const model = document.getElementById("model").value;

        const newCar = {year:year,make:make,model:model};

        setCar(c => [...c,newCar]);

        setYear(new Date().getFullYear());
        setMake("");
        setModel("");
        console.log(year,make,model)

    }
    const handleRemoveCar = (index) => {
        setCar(c => c.filter((_,i) => i!=index))
        
    }
    const handleChangeYear = (e) => {
        setYear(e.target.value)
    }
    const handleChangeMake = (e) => {
        setMake(e.target.value)
    }
    const handleChangeModel = (e) => {
        setModel(e.target.value)
    }

    return(
        <div>
            <h2>List of Car Objects</h2>
            <ul>
                {car.map((car,index) => <li onClick={() => handleRemoveCar(index)} >{car.year} {car.make} {car.model} </li>)}
            </ul>
            <input value={year} onChange={handleChangeYear} type="number" name="" id="date" placeholder={new Date().getFullYear()} />
            <input value={make} onChange={handleChangeMake} type="text" name="" id="make" placeholder="Enter Make" />
            <input value={model} onChange={handleChangeModel} type="text" name="" id="model" placeholder="Enter Model"/>
            <button onClick={handleAddCar}>Add Car</button>
        </div>
    )

}
export default CarObjects;