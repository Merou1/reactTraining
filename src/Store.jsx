import { useState } from "react"

function Store(){
    const [name,setName] = useState("")
    const [quantity,setQuantity] = useState("")
    const [comment,setComment] = useState("")
    const [payment,setPayment] = useState("")
    const [shipping,setShipping] = useState("")

    const handleNameChange = (event) => {
        setName(event.target.value)
    }
    const handleQuantityChange = event => {
        setQuantity(event.target.value)
    }
    const handleCommentChange = event => {
        setComment(event.target.value)
    }
    const handlePaymentChange = event => {
        setPayment(event.target.value)
    }
    const handleShippingChange = event => {
        setShipping(event.target.value)
    }

    return(
        <div className="store">
            <input type="text" name="" id="" onChange={e => handleNameChange(e)}/>
            <p>Name: {name}</p>

            <input type="number" name="" id="" onChange={e => handleQuantityChange(e)}/>
            <p>Quantity: {quantity}</p>

            <textarea name="" id="" onChange={e => handleCommentChange(e)}></textarea>
            <p>Comment: {comment}</p>

            <select onChange={e =>handlePaymentChange(e)} name="" id="">
                <option value="Select an option">Select an option</option>
                <option value="Visa">Visa</option>
                <option value="Mastercard">Mastercard</option>
                <option value="Giftcard">Giftcard</option>
            </select>
            <p>Payment by: {payment}</p>

            <label htmlFor="pickup">
            <input type="radio" name="pickup" id="" checked={shipping==="pickup"} onChange={e => handleShippingChange(e)} />
                Pick up
            </label>
            <label htmlFor="delivery">
            <input type="radio" name="delivery" id="" checked={shipping==="delivery"} onChange={e => handleShippingChange(e)} />
                Delivery
            </label>
            <p>Shipping : {shipping} </p>
        </div>
    )
}
export default Store;