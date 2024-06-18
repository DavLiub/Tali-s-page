import { useState } from 'react';
import type { Experience } from '../../../utils/experience';
import { skills, tools, technologies, languages } from "../../../utils/skills";

interface ExperienceCardProps {
    experience: Experience;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({ experience }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleCard = () => {
        setIsOpen(!isOpen);
    };

    const highlightText = (text: string) => {
        const allItems = { ...skills, ...tools, ...technologies, ...languages };
        const regex = new RegExp(`\\b(${Object.values(allItems).map(item => item.name).join('|')})\\b`, 'gi');
        return text.replace(regex, '<span class="text-green-500">$1</span>');
    };

    const handleButtonClick = () => {
        window.open(experience.companyLink, "_blank");
    };


    return (
        <div className="w-[500px] border rounded shadow-lg p-4 mb-4 cursor-pointer" onClick={toggleCard}>
            <div className="flex items-center">
                {experience.companyLogo && (
                    <img src={experience.companyLogo} alt={`${experience.companyName} logo`} className="w-16 h-16 mr-4" onClick={handleButtonClick} />
                )}
                <div>
                    <h2 className="text-xl font-bold">{experience.companyName}</h2>
                </div>
            </div>
            {isOpen && (
                <div className="mt-4">
                    {experience.position.map((pos, index) => (
                        <div key={index} className="mt-4">
                            <h3 className="text-lg font-semibold">{pos.position}</h3>
                            {pos.startDate && pos.endDate && (
                                <p className="text-gray-500">
                                    {pos.startDate} - {pos.endDate}
                                </p>
                            )}
                            {pos.description.map((desc, descIndex) => (
                                <p key={descIndex} dangerouslySetInnerHTML={{ __html: highlightText(desc) }}></p>
                            ))}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default ExperienceCard;
