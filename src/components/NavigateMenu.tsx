import { useNavigate } from 'react-router-dom';
import { pages } from '../utils/pages';
import HomeButton from "./HomeButton";

interface Props {
    useHomeIcon: true | false;
}
const NavigateMenu: React.FC = (useHomeIcon= true) => {
    const navigate = useNavigate();
    return (
        <div className="w-full">
            <div className="border-b border-gray-200">
                <ul className="flex flex-wrap -mb-px justify-center">
                    {Object.entries(pages).map(([key, page], index) => {
                        if(useHomeIcon && key === "home")
                            return (
                                <li key={index} className="mr-2">
                                    <HomeButton />
                                </li>
                            )
                        return (
                            <li key={index} className="mr-2">
                            <button
                                onClick={() => navigate(page.link)}
                                className="inline-block p-4 text-sm font-medium text-center hover:underline"
                            >
                                {page.name}
                            </button>
                        </li>
                        )}
                    )}
                </ul>
            </div>
        </div>
    );
};

export default NavigateMenu;
