import { contacts } from "../utils/contacts";
import ContactElement from "./ContactElement";

interface ContactCardProps {
    direction: "row" | "col";
}

const ContactCard: React.FC<ContactCardProps> = ({ direction="row" }) => {
    return (
        <div className={
            direction === "row" ?
                "flex flex-wrap space-x-4 mt-1" :
                "flex flex-col space-y-4 mt-1"
        }>
            {Object.values(contacts).map((contact, index) => (
                <ContactElement
                    key={index}
                    logo={contact.src}
                    link={contact.link}
                    altText={contact.altText}
                />
            ))}
        </div>
    );
};

export default ContactCard;
