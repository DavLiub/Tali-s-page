interface ContactElementProps {
    logo: string;
    link: string;
    altText: string;
}

const ContactElement: React.FC<ContactElementProps> = ({ logo, link, altText }) => {
    return (
        <div className="flex w-fit items-center space-x-0.5">
            <a href={link} target="_blank" rel="noopener noreferrer">
                <img src={logo} alt={altText} className="w-4 h-4 transition-transform transform hover:scale-150" />
            </a>
        </div>
    );
};

export default ContactElement;
