import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { LandingPage } from './LandingPage/LandingPage';
import { Cringe } from './LandingPage/Cringe';

export const App: React.FC = () => {
    return (
        <Router>
            <Switch>
                <Route path="/" exact>
                    <LandingPage />
                </Route>
                <Route path="/cringe">
                    <Cringe />
                </Route>
            </Switch>
        </Router>
    );
};
