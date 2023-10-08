import { Contact } from "components/Contacts/Contacts";
import { ContactsList } from './ContactsList.styled';

export const ContactList = ({ contacts, onDeleteContact }) => {
    return (
        <div>
            <ContactsList>
                {contacts.map(contact => 
                    <Contact
                    key={contact.id}
                    contact={contact}
                    onDeleteContact={onDeleteContact}
                    />
                    )}
            </ContactsList>
        </div>
    );
}

