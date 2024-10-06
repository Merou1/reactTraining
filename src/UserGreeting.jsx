import propTypes from 'prop-types'

function UserGreeting(props) {
    const welcome = <h2 className="welcome-message">Welcom {props.userName}</h2>;
    const loginPrompt = <h2 className="login-prompt">Please log in</h2>

    return(
        props.isLoggedin ? welcome : loginPrompt
    )

}

UserGreeting.proptypes = {
    userName : propTypes.string,
    siLoggedin : propTypes.bool
}
UserGreeting.defaultProps = {
    userName : "User",
    isLoggedin : false
}

export default UserGreeting;