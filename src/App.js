import { BrowserRouter, Route, Routes } from "react-router-dom";
import Introduction from "./pages/Introduction";
import Projects from "./pages/Projects";
import Aboutme from "./pages/Aboutme";
import Contact from "./pages/Contact";


function App() {
return (

<BrowserRouter>
<Routes>
<Route path="/" element={<Introduction/>} />
        <Route path="/project" element={<Projects/>} />
        <Route path="/aboutme" element={<Aboutme/>} />
        <Route path="/contactinfo" element={<Contact/>} />
</Routes>
</BrowserRouter>
);
}

export default App;
