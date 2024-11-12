import reactLogo from '../assets/react.svg'


function Card(){
    return (
        <div>
            <img src={reactLogo}/>
            <div >
                <p> Name </p>
                <p> Description</p>
            </div>
        </div>
    )
}

export default Card;