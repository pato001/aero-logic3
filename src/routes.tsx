import { LandingPage } from './landingPage/useCases/launchRandomRiddle/LaunchRandomRiddle';
import { RiddlePage } from './riddle/useCases/solveRiddle/SolveRiddlePage';

export const routes = [
    {
        index: true,
        path: '/',
        element: <LandingPage />,
    },
    {
        path: '/riddle/:id',
        element: <RiddlePage />,
    },
    {
        path: '*',
        element: <main>404: Page not found</main>,
    },
];
