import { skills, tools, technologies, languages } from "../../utils/skills";
import ListDisplay from "./SkillsListDisplay";

const LeftBar: React.FC = () => {
    return (
        <div className="h-full min-h-screen w-60 bg-gray-800 text-white p-4 animate-fadeIn">
            <div className="mt-8">
                <ListDisplay title="Skills" items={skills} />
            </div>
            <div className="mt-8">
                <ListDisplay title="Tools" items={tools} />
            </div>
            <div className="mt-8">
                <ListDisplay title="Technologies" items={technologies} />
            </div>
            <div className="mt-8">
                <ListDisplay title="Languages" items={languages} />
            </div>
        </div>
    );
};
export default LeftBar;
