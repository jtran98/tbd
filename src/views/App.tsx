import { useState } from 'react';
import { LandingPage } from './MainPage/LandingPage';

export const App: React.FC = () => {
    const [isNah, setIsNah] = useState(false);
    return <LandingPage isNah={isNah} setIsNah={setIsNah} />;
};
