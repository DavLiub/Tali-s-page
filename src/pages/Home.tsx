import { useTranslation } from 'react-i18next';
import Welcome from "../components/home/Welcome";
import LineWithButtons from "../components/home/LineWithButtons";

const Home: React.FC = () => {
    const { t } = useTranslation();

    return (
        <div className="relative flex justify-center items-start h-screen bg-gray-100 text-gray-800 p-4 pt-10">
            <img
                src="/Background.webp"
                alt="Background"
                className="absolute inset-0 w-full h-full object-cover z-0"
            />
            <div className="relative z-10 flex w-full h-full">
                <div className="w-2/3 p-4">
                    <Welcome />
                </div>
                <div className="w-1/3 pl-20 p-4 flex justify-start items-start">
                    <LineWithButtons />
                </div>
            </div>
        </div>
    );
};

export default Home;
