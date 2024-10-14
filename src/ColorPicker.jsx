import { useState } from "react"

function ColorPicker() {
    const [color,setColor] = useState("")

    const handleColorChange = e => {
        setColor(e.target.value)
    }

    const style = {
        backgroundColor: color
    }
    return(
        <div className="colorPicker">
            <h1>Color Picker</h1>
            <div style={style} className="selectedColor">Selected color: <br />{color}</div>
            <h5>Select a color</h5>
            <input type="color" name="" id="" onChange={e => handleColorChange(e)} />
        </div>
    )
}
export default ColorPicker