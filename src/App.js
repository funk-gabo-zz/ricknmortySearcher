import { GlobalStyle } from "./styles/globalStyles";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Home } from "./pages/Home";

const App = () => {
    return (
        <>
            <GlobalStyle />
            <Router>
                <Switch>
                    <Route path='/' exact component={Home} />
                </Switch>
            </Router>
        </>
    )
}

export default App;