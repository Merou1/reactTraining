
function Footer() {
    const style = {
        color: "lightblue",
        textDecoration: "underline wheat",
        fontWeight: "400",
    }
    return(
        <p style={style}>&copy; {new Date().getFullYear()} Your website</p>
    )
}
export default Footer