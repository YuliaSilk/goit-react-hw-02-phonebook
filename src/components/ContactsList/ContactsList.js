import { Contact } from "components/Contacts/Contacts";
import { ContactItem, ContactsList, ContactContainer } from './ContactsList.styled';
// import { ContactItem } from "components/Contacts/Contacts.styled";

export const ContactList = ({ contacts, onDeleteContact }) => {
    return (
        <ContactContainer>
            <ContactsList>
                <ContactItem>
                {contacts.map(contact => 
                   
                   <Contact
                    key={contact.id}
                    contact={contact}
                    onDeleteContact={onDeleteContact}
                    />
                    )}
                    </ContactItem>
            </ContactsList>
        </ContactContainer>
    );
}

