import { GlobalStyle } from "./styles/globalStyles";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Home } from "./pages/Home";
import { Detail } from "./pages/Detail";

const App = () => {
    return (
        <>
            <GlobalStyle />
            <Router>
                <Switch>
                    <Route path='/' exact component={Home} />
                    <Route path='/detail/:id?' component={Detail} />
                </Switch>
            </Router>
        </>
    )
}

export default App;