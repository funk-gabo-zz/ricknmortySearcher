import { GlobalStyle } from "./styles/globalStyles";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Layout } from "./components/Layout";
import { Searched } from "./pages/Searched";

const App = ({match}) => {
    console.log(match)
    return (
        <>
            <GlobalStyle />
            <Router>
                <Layout>
                    <Switch>
                        <Route path='/' exact component={Searched} />
                        <Route path='/searched/:word?' component={Searched} />
                    </Switch>
                </Layout>
            </Router>

        </>
    )
}

export default App;