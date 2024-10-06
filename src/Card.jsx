import myPicture from './assets/myPicture.png'

function Card() {
    return(
        <div className="card">
            <img src={myPicture} alt="" />
            <h3>Merouane Belmoubarik</h3>
            <p className='card-text'>5th year web and mobile dev ingeneering studies </p>
        </div>
    );
}

export default Card