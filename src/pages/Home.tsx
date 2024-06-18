import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Home: React.FC = () => {
    const { t } = useTranslation();
    const navigate = useNavigate();

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-gray-800 p-4">
            <h1 className="text-4xl font-bold mb-6">{t('welcomeMessage')}</h1>
            <p className="text-lg mb-4 px-12 text-center">{t('introText')}</p>
            <p className="text-lg mb-4 text-center">{t('exploreText')}</p>
            <div className="flex space-x-4">
                <button
                    onClick={() => navigate('/cv')}
                    className="px-4 py-2 bg-blue-500 text-white rounded shadow hover:bg-blue-600 transition duration-200 flex items-center"
                >

                    {t('cv')}
                </button>
                <button
                    onClick={() => navigate('/projects')}
                    className="px-4 py-2 bg-green-500 text-white rounded shadow hover:bg-green-600 transition duration-200 flex items-center"
                >
                    {t('projects')}
                </button>
                <button
                    onClick={() => navigate('/contact')}
                    className="px-4 py-2 bg-red-500 text-white rounded shadow hover:bg-red-600 transition duration-200 flex items-center"
                >
                    {t('contact')}
                </button>
            </div>
        </div>
    );
};

export default Home;
