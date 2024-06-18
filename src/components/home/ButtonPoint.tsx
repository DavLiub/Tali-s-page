import { useNavigate } from 'react-router-dom';

const ButtonPoint: React.FC<{ tooltip: string, link: string }> = ({ tooltip, link }) => {
    const navigate = useNavigate();

    return (
        <div className="relative flex items-center mb-6 group">
            <div
                className="flex items-center space-x-2 p-1 rounded-3xl group-hover:bg-gray-300 transition duration-200"
                onClick={() => navigate(link)}
            >
                <button className="w-6 h-6 bg-orange-500 rounded-full shadow-md transition duration-200" />
                <div className="w-24 font-mono font-bold text-orange-500 text-lg">
                    {tooltip}
                </div>
            </div>
        </div>
    );
};

export default ButtonPoint;
