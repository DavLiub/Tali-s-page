import {projects} from "../utils/projects";
import PagesMenu from "./PagesMenu";

const Footer: React.FC = () => {
    return (
        <footer className="bg-gray-800 text-white py-4">
            <div className="container mx-auto flex justify-around">
                <div className="flex flex-col justify-start items-start">
                    <h2 className="text-lg font-bold mb-4">Site Tree</h2>
                    <PagesMenu />
                </div>
                <div className="flex flex-col justify-start items-start">
                    <h2 className="text-lg font-bold mb-4">Projects</h2>
                    <ul className="flex flex-col">
                        {Object.values(projects).map((project, index) => (
                            <li key={index}>
                                <a href={project.link} className="hover:underline">
                                    {project.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="flex flex-col justify-start items-start">
                    <h2 className="text-lg font-bold mb-4">Contacts</h2>
                    <div>
                        <p>+79725004351</p>
                        <p>workdltest@gmail.com</p>
                    </div>
                </div>
            </div>
            <p className="text-sm text-center pt-6">(С) 2024 David Liubinskii</p>
        </footer>
    );
};

export default Footer;
