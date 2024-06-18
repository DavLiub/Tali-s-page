import ExperienceCard from './ExperienceCard';
import { experience } from '../../../utils/experience';

const ExperienceList: React.FC = () => {
    return (
        <div className="flex flex-col px-2 justify-center items-center w-full">
            {Object.values(experience).map((exp, index) => (
                <ExperienceCard key={index} experience={exp} />
            ))}
        </div>
    );
};

export default ExperienceList;
