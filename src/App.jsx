import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import CategoryPage from "./pages/CategoryPage.jsx";
import DetailsPage from "./pages/DetailsPage.jsx";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<HomePage/>}/>
                <Route path='/category/:ID' element={<CategoryPage/>}/>
                <Route path='/details/:ID' element={<DetailsPage/>}/>
            </Routes>
        </BrowserRouter>
    );
};

export default App;