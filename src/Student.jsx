
import propTypes from 'prop-types'
function Student(props) {
    return(
    <div>
        <p> {props.name} </p>
        <p> {props.age} </p>
        <p> {props.isStudent ? props.name +" is a student" : props.name + " is not a student"} </p>
    </div>
    )
}
//define what type to be passed in each prop , in case of mismatching the program won't stop but you'll find a warning in the console
Student.proptypes={
    name: propTypes.string,
    age: propTypes.number,
    isStudent: propTypes.bool
}
//default props in case we didn't get any or some props from the parent component(App in this case)
Student.defaultProps = {
    name: "Guest",
    age: 0,
    isStudent: false
}

export default Student