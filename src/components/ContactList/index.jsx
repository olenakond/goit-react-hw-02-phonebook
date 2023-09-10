import Contact from '../Contact';
import { List } from './ContactList.styled';

const ContactList = ({ contacts, handleDelete }) => {
  return (
    <List>
      {contacts.map(contact => (
        <Contact
          key={contact.id}
          contact={contact}
          handleDelete={handleDelete}
        />
      ))}
    </List>
  );
};

export default ContactList;
