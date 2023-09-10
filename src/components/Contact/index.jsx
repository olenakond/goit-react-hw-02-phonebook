import { Element, Button, Name } from './Contact.styled';

const Contact = ({ contact, handleDelete }) => {
  return (
    <Element>
      <Name>
        {contact.name}: {contact.number}
      </Name>
      <Button type="button" onClick={() => handleDelete(contact.id)}>
        Delete
      </Button>
    </Element>
  );
};

export default Contact;
