import Header from "./components/Header";
import {Routes, Route} from "react-router-dom"
import Basket from "./pages/Basket";
import Catalog from "./pages/Catalog";
import Faq from "./pages/Faq";
import Footer from "./components/Footer";
import About from "./pages/About";
import ClothesDetails from "./pages/ClothesDetails";
import SearchResults from "./pages/SearchResults";
import CategoryProducts from "./pages/CategoryProducts";
import './App.css';


function App() {
    return (
        <>
            <Header/>
            <SearchResults/>

            <Routes>
                <Route path="/" element={<Catalog/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/faq" element={<Faq/>}/>
                <Route path="/basket" element={<Basket/>}/>
                <Route path="/details/:clothesId" element={<ClothesDetails/>}/>
                <Route path="/categories/:id" element={<CategoryProducts/>}/>
                <Route path="/search-results/:search" element={<SearchResults/>}/>
            </Routes>
            <Footer/>
        </>
    );
}

export default App;
