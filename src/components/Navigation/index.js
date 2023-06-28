import { Link } from "react-router-dom";

const Navigation = () => {
    return (
      <div>
        <Link to="/calendar">Calendar</Link>
        <Link to='/form'>Form</Link>
      </div>
    );
}

export default Navigation;