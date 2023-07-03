import './App.css';
import { Route, Routes } from 'react-router-dom';
import Form from './components/Form';
import MonthCalendar from './components/Calendar';
import { createClient } from "@supabase/supabase-js";



function App() {
  // const supabaseUrl = "https://xdtvgcweimynyflwfrbq.supabase.co";
  // const supabaseKey = process.env.SUPABASE_KEY;
  // const supabase = createClient(https://xdtvgcweimynyflwfrbq.supabase.co, supabaseKey);
  return (
    <>
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
