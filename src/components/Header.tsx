import ContactCard from "./ContactCard";
import NavigateMenu from "./NavigateMenu";
import Logo from "./Logo";
import LanguageSwitcher from "./LanguageSwitcher";

const Header: React.FC = () => {
    return (
        <div className="w-full h-fit bg-gray-900 flex flex-col items-center">
            <div className="flex justify-between items-center w-full p-4">
                <div className="flex items-center">
                    <Logo className="flex-shrink-0" />
                    <h1 className="text-xl font-mono text-green-600 font-bold ml-24">QA Engineer / Web developer</h1>
                </div>
                <LanguageSwitcher className="flex-shrink-0" />
            </div>
            <div className="w-full bg-gray-200 flex flex-wrap justify-between border-b border-gray-300">
                <div className="w-fit flex justify-start p-4">
                    <NavigateMenu />
                </div>
                <div className="w-fit flex justify-end p-4 ">
                    <ContactCard direction="row" />
                </div>
            </div>
        </div>
    );
};

export default Header;
