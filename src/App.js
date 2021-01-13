//import './App.css';
import Title from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";

function App() {

    return (
        <div className="main">
            <Navbar />
            <Title />
            <Main />
            <Footer />
        </div>
    )

}

export default App;
