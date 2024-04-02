import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "../../presentation/pages/Home/Home";
import SearchBeach from "../../presentation/pages/searchBeach/SearchBeach";


export default function AppRouter() {
  return (
    <>
    <Router>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/searchBeach" element={<SearchBeach/>}/>
        </Routes>
    </Router>
    </>
  )
}
