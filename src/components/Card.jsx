import reactLogo from '../assets/react.svg'


function Card({name='person', profession='human', desc='anything at all'}){
    return (
        <div className="drop-shadow-lg flex flex-col rounded-md m-[10px] w-[15%] h-[20%] bg-[#ff9922ff]">
            <div className="flex flex-row">
            <img src={reactLogo} className="w-[70px] h-[70px]"/>
            <div className="flex flex-col">
                <p className="relative left-2 text-3xl">{name}</p>
                <p className="relative left-2 text-2xl">{profession}</p>
            </div>
            </div>
                <p className="relative text-1xl top-2 left-2">{desc}</p>
        </div>
    )
}

export default Card;