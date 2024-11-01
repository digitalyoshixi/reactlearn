import {useState} from 'react'

function Form() {
    const [value, setValue] = useState("");
    function handleChange(event){
        console.log(value);
        setValue(event.target.value);
    }
    return(
        <form>
            <input onChange={(e) => handleChange(e)} type="text" value={value}></input>
        </form>
    )
}
export default Form;