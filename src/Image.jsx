
function Image () {
    const url = './src/assets/myPicture.png'
    const handleImageClick = (e) => e.target.style.display="none"
    const handleClick = () => console.log("clicked")

    return(
        <img onClick={(e)=>handleImageClick(e)} src={url} alt="profile picture" />
    )       
}

export default Image;