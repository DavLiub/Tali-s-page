import { Routes, Route } from 'react-router-dom';
import { pages } from '../utils/pages';

const Main: React.FC = () => {
    return (
        <div className="min-h-96 flex">
            <div className="flex-grow">
                <Routes>
                    {Object.values(pages).map((page, index) => (
                        <Route
                            key={index}
                            path={page.link}
                            element={<page.component />}
                        />
                    ))}
                </Routes>
            </div>
        </div>
    );
};

export default Main;
