import { Route, Routes } from "react-router-dom";

const Navigation = () => {
    return (
      <Routes>
        <Route path="/" element={<Form />}></Route>
      </Routes>
    );
}

export default Navigation;