export type Riddle = {
    id: string;
    contents: string;
    answers: RiddleAnswer[];
};

export type RiddleAnswer = {
    id: string;
    text: string;
};
