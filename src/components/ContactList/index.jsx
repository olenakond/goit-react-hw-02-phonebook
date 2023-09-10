import Contact from '../Contact';

const ContactList = ({ contacts, handleDelete }) => {
  return (
    <ul>
      {contacts.map(contact => (
        <Contact
          key={contact.id}
          contact={contact}
          handleDelete={handleDelete}
        />
      ))}
    </ul>
  );
};

export default ContactList;
