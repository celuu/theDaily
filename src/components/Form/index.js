import { useState } from "react";


const Form = () => {
    const [date, setDate] = useState(Date.now.toString());
    return(
    <form>
        <div>{date}</div>
        <input></input>
    </form>
    )
}

export default Form;