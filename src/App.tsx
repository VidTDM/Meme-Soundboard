import Localbase from "localbase";
import "./App.css";
import Main from "./components/Main";
import Header from "./components/Header";
import Footer from "./components/Footer";

const db = new Localbase("SoundsDB");

function App() {
    return (
        <>
            <Header />
            <main>
                <section>
                    <Main db={db}/>
                </section>
            </main>
            <Footer />
        </>
    );
}

export default App;
