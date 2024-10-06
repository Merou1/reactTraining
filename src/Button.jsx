
function Button() {
    let count =0;
    const handleClick = (name) => {
        if(count<3){
    
            console.log("You clicked "+(count+1)+" time/s");
            count++;
        }
        else {alert(name + " You clicked more than 3 times")}
        
    }
    const handleClick2 = e => e.target.textContent="Clicked"
    return(
        <button onClick={(e)=>handleClick2(e)}>Click me </button>

    )
}
export default Button