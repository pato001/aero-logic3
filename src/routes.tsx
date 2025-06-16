import { LandingPage } from './LandingPage';
import { RiddlePage } from './RiddlePage';

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
