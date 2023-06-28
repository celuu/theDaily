import './App.css';
import Navigation from './components/Navigation';
import { Route, Routes } from 'react-router-dom';
import Form from './components/Form';
import MonthCalendar from './components/Calendar';

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/form" element={<Form />}>
          Form
        </Route>
        <Route path="/calendar" element={<MonthCalendar />}>
          Calendar
        </Route>
      </Routes>
    </>
  );
}

export default App;
