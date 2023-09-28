import "./App.css";
import Main from "./components/Main";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
    return (
        <>
            <Header />
            <main>
                <section>
                    <Main />
                </section>
            </main>
            <Footer />
        </>
    );
}

export default App;
