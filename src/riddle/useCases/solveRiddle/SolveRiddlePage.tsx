import { Link } from 'react-router-dom';
import classNames from 'classnames';
import { useSolveRiddle } from './useSolveRiddle';

export const RiddlePage = () => {
    const {
        riddle,
        answers,
        handleClick,
        selected,
        random,
        shouldDisplayRiddle,
        status,
        correct,
    } = useSolveRiddle();

    if (!shouldDisplayRiddle) {
        return null;
    }

    return (
        <main className="text-lg">
            <p
                dangerouslySetInnerHTML={{ __html: riddle!.contents }}
                className="mb-16"
                data-test="contents"
            />
            <p className="mb-5">Possible answers:</p>
            <ul>
                {answers!.map((answer) => (
                    <li
                        key={answer.id}
                        onClick={() => handleClick(answer.id)}
                        className={classNames(
                            'border py-2 pl-3 pr-2 my-1',
                            !selected && 'cursor-pointer',
                            !correct && 'border-blue-500',
                            selected === answer.id &&
                                correct &&
                                correct === answer.id &&
                                "border-green-700 text-green-900 before:content-['✓']",
                            selected === answer.id &&
                                correct &&
                                correct !== answer.id &&
                                "border-red-700 text-red-800  before:content-['✗']",
                        )}
                        data-test={`answer-${answer.id}`}
                    >
                        <span className="pl-2">{answer.text}</span>
                    </li>
                ))}
            </ul>
            {status === 'correct' && (
                <div className="bg-green-400 my-6 p-3" data-test="correct-answer">
                    {"Great job! You're right 🙏"}
                </div>
            )}
            {status === 'incorrect' && (
                <div className="bg-red-300  my-6 p-3" data-test="incorrect-answer">
                    {'This time your answer is wrong.'}
                </div>
            )}
            {random && (
                <div className="mt-5">
                    <Link to={`/riddle/${random}`} reloadDocument className="underline">
                        Play one more
                    </Link>
                </div>
            )}
        </main>
    );
};
