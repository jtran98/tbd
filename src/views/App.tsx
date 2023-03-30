import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { LandingPage } from './LandingPage/LandingPage';
import { Cringe } from './LandingPage/Cringe';
import { useState } from 'react';
import Background from './assets/Background.mp3';
import { WhatsThat } from './WhatsThat/WhatsThat';
export const App: React.FC = () => {
    const [backgroundSong] = useState(new Audio(Background));
    backgroundSong.volume = 0.1;
    backgroundSong.loop = true;

    return (
        <Router basename={process.env.PUBLIC_URL}>
            <Switch>
                <Route path="/" exact>
                    <LandingPage backgroundSong={backgroundSong} />
                </Route>
                <Route path="/cringe">
                    <Cringe />
                </Route>
                <Route path="/info">
                    <WhatsThat backgroundSong={backgroundSong} />
                </Route>
            </Switch>
        </Router>
    );
};
