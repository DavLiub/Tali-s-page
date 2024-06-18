import { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSwitcher: React.FC = () => {
    const { i18n } = useTranslation();
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    const changeLanguage = (lng: string) => {
        i18n.changeLanguage(lng);
        setIsOpen(false);
    };

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const getFlag = (lng: string) => {
        switch (lng) {
            case 'en':
                return '🇺🇸';
            case 'ru':
                return '🇷🇺';
            case 'he':
                return '🇮🇱';
            default:
                return '🌐';
        }
    };

    const currentLanguage = i18n.language;

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [dropdownRef]);

    return (
        <div className="relative" ref={dropdownRef}>
            <p className={"font-bold text-sm text-gray-100"}>Language</p>
            <button
                onClick={toggleDropdown}
                className=" flex items-center justify-center align-baseline text-4xl"
            >
                {getFlag(currentLanguage)}
            </button>
            {isOpen && (
                <ul className="absolute right-0 mt-2 w-32 bg-white border border-gray-300 rounded shadow-lg z-50">
                    <li>
                        <button
                            onClick={() => changeLanguage('en')}
                            className="w-full text-left px-4 py-2 hover:bg-gray-100 flex items-center"
                        >
                            🇺🇸 English
                        </button>
                    </li>
                    <li>
                        <button
                            onClick={() => changeLanguage('ru')}
                            className="w-full text-left px-4 py-2 hover:bg-gray-100 flex items-center"
                        >
                            🇷🇺 Русский
                        </button>
                    </li>
                    <li>
                        <button
                            onClick={() => changeLanguage('he')}
                            className="w-full text-left px-4 py-2 hover:bg-gray-100 flex items-center"
                        >
                            🇮🇱 עברית
                        </button>
                    </li>
                </ul>
            )}
        </div>
    );
};

export default LanguageSwitcher;
