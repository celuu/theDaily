import { useState } from "react";
import { ArrowLeftIcon, ArrowRightIcon } from "@chakra-ui/icons";
import { IconButton } from "@chakra-ui/react";


const Form = () => {
    const [date, setDate] = useState(new Date().toDateString());
    return (
      <form>
        <div className="top-bar">
          <IconButton aria-label="Search database" icon={<ArrowLeftIcon />} />
          <div className="item-in-top-bar">{date}</div>
          <IconButton aria-label="Search database" icon={<ArrowRightIcon />} />
        </div>
        <label>
          <input></input>
        </label>
      </form>
    );
}

export default Form;