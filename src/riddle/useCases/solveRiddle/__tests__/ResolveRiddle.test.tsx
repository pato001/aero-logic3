import { App } from '../../../../App';
import { provideRiddleAnswer } from '../../../../domain/riddle/RiddleAnswerProvider';
import { ContextProvider } from '../../../../common/context';

describe('Resolve riddle', () => {
    it('resolve random riddle', () => {
        cy.intercept('GET', 'http://localhost:3000/riddles', {
            body: [
                {
                    id: 'RIDDLE_ID',
                    contents: "What has keys but can't open locks?",
                    answers: [
                        { id: 'answer-1', text: 'A piano' },
                        { id: 'answer-2', text: 'A keyboard' },
                    ],
                },
            ],
        });
        cy.intercept('GET', 'http://localhost:3000/riddles/RIDDLE_ID', {
            body: {
                id: 'RIDDLE_ID',
                contents: "What has keys but can't open locks?",
                answers: [
                    { id: 'ANSWER_PIANO_ID', text: 'A piano' },
                    { id: 'ANSWER_KEYBOARD_ID', text: 'A keyboard' },
                ],
            },
        });

        const fake = () =>
            Promise.resolve({ id: 'ANSWER_KEYBOARD_ID', text: 'A keyboard' });

        cy.mount(
            <ContextProvider providers={[provideRiddleAnswer(fake)]}>
                <App />
            </ContextProvider>,
            '/riddle/RIDDLE_ID',
        );

        cy.getByTestId('contents').should(
            'have.text',
            "What has keys but can't open locks?",
        );

        cy.getByTestId('answer-ANSWER_PIANO_ID').should('be.visible');
        cy.getByTestId('answer-ANSWER_KEYBOARD_ID').should('be.visible');

        cy.getByTestId('answer-ANSWER_KEYBOARD_ID').click();

        cy.getByTestId('correct-answer').should('be.visible');
    });
    it('fail solving random riddle', () => {
        cy.intercept('GET', 'http://localhost:3000/riddles', {
            body: [
                {
                    id: 'RIDDLE_ID',
                    contents: "What has keys but can't open locks?",
                    answers: [
                        { id: 'answer-1', text: 'A piano' },
                        { id: 'answer-2', text: 'A keyboard' },
                    ],
                },
            ],
        });
        cy.intercept('GET', 'http://localhost:3000/riddles/RIDDLE_ID', {
            body: {
                id: 'RIDDLE_ID',
                contents: "What has keys but can't open locks?",
                answers: [
                    { id: 'ANSWER_PIANO_ID', text: 'A piano' },
                    { id: 'ANSWER_KEYBOARD_ID', text: 'A keyboard' },
                ],
            },
        });

        const fake = () => Promise.resolve({ id: 'ANSWER_PIANO_ID', text: 'A piano' });

        cy.mount(
            <ContextProvider providers={[provideRiddleAnswer(fake)]}>
                <App />
            </ContextProvider>,
            '/riddle/RIDDLE_ID',
        );

        cy.getByTestId('contents').should(
            'have.text',
            "What has keys but can't open locks?",
        );

        cy.getByTestId('answer-ANSWER_PIANO_ID').should('be.visible');
        cy.getByTestId('answer-ANSWER_KEYBOARD_ID').should('be.visible');

        cy.getByTestId('answer-ANSWER_KEYBOARD_ID').click();

        cy.getByTestId('incorrect-answer').should('be.visible');
    });
});
