import type { ToolsAndTechnologies } from "../../utils/skills";

interface ListDisplayProps {
    title: string;
    items: { [key: string]: ToolsAndTechnologies };
}

const ListDisplay: React.FC<ListDisplayProps> = ({ title, items }) => {
    const itemsArray = Object.values(items);

    return (
        <div>
            <h2 className="text-xl font-bold mb-4 border-b-2 border-gray-600 pb-2">{title}</h2>
            <ul className="space-y-2">
                {itemsArray.map((item, index) => (
                    <li key={index}
                        className="flex items-center p-2 rounded-md transition-colors duration-200"
                    >
                        <span className="mr-2">#</span>
                        <p className={"font-mono"}>{item.name}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ListDisplay;
