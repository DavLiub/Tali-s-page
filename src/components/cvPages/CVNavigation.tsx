import { useState } from 'react';
import { cvPages } from '../../utils/pages';

const CvNavigation: React.FC = () => {
    const [activeTab, setActiveTab] = useState(Object.keys(cvPages)[0]);

    const ActiveComponent = cvPages[activeTab].component;

    return (
        <div className="w-full">
            <div className="border-b border-gray-200">
                <ul className="flex flex-wrap -mb-px justify-center">
                    {Object.entries(cvPages).map(([key, page], index) => (
                        <li key={index} className="mr-2">
                            <button
                                onClick={() => setActiveTab(key)}
                                className={`inline-block py-4 px-4 text-sm font-medium text-center ${
                                    activeTab === key
                                        ? 'text-blue-600 border-b-2 border-blue-600'
                                        : 'text-gray-600 hover:text-gray-800 hover:border-gray-300 border-b-2 border-transparent'
                                }`}
                            >
                                {page.name}
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="p-4">
                <ActiveComponent />
            </div>
        </div>
    );
};

export default CvNavigation;
