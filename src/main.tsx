import React from 'react';
import ReactDOM from 'react-dom/client';
import { ContextProvider } from './common/context';
import { provideRiddleAnswer } from './domain/riddle/RiddleAnswerProvider';
import { getAnswerFor } from 'riddle-exam';

import { App } from './App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <ContextProvider providers={[provideRiddleAnswer(getAnswerFor)]}>
            <App />
        </ContextProvider>
    </React.StrictMode>,
);
