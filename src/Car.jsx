import { useState } from "react";
//updTER fct + ...object
function Car (){
    const [car,setCar] = useState(
        {
            year:2023,
            make:"Audi",
            model:"RSQ8"
        }
    )

    const handleYearChange = (e) => {
        setCar(c => ({...c, year:e.target.value})) //updater fct + ...car that means leave the car object as it is and then change the year  year:e.target.value
    }
    const handleMakeChange = (e) => {
        setCar(c => ({...c, make:e.target.value}))
    }
    const handleModelChange = (e) => {
        setCar(c => ({...c, model:e.target.value}))
    }
    return(
        <div>
            <p>Your favorite car : {car.year} {car.make} {car.model}</p>
            <input type="number" name="" id="" value={car.year} onChange={handleYearChange}/>
            <input type="text" name="" id="" value={car.make} onChange={handleMakeChange}/>
            <input type="text" name="" id="" value={car.model} onChange={handleModelChange} />
        </div>
    )
}
export default Car