import { App } from '../../../App';

describe('Display random riddle', () => {
    it('see random riddle', () => {
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
        cy.intercept('GET', 'http://localhost:3000/riddles/RIDDLE_ID', {});

        cy.mount(<App />, '/');

        cy.getByTestId('work-interval').should('be.visible');

        cy.getByTestId('open-random-riddle-control').click();

        cy.url().should('include', '/riddle/RIDDLE_ID');
    });
});
