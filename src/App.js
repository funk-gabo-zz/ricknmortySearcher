import { Home } from "./pages/Home";
import { GlobalStyle } from "./styles/globalStyles";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Layout } from "./components/Layout";

const App = () => {
    return (
        <>
            <GlobalStyle />
            <Router>
                <Layout>
                </Layout>
            </Router>

        </>
    )
}

export default App;