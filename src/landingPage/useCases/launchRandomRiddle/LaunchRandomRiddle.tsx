import { Link } from 'react-router-dom';
import { useLaunchRandomRiddle } from './useLaunchRandomRiddle';

export const LandingPage = () => {
    const { workInterval, timestamp, id } = useLaunchRandomRiddle();

    return (
        <main className="text-lg">
            <div>
                <p>
                    Work Interval: <span data-test="work-interval">{workInterval}</span>
                </p>
                <p>Timestamp: {timestamp}</p>
                <div className="p-20 text-center">
                    {id && (
                        <Link
                            to={`/riddle/${id}`}
                            className="border border-blue-500 p-5"
                            data-test="open-random-riddle-control"
                        >
                            Resolve random riddle
                        </Link>
                    )}
                </div>
            </div>
        </main>
    );
};
