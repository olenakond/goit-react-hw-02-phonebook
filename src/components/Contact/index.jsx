const Contact = ({ contact, handleDelete }) => {
  return (
    <li>
      <p>
        {contact.name}: {contact.number}
      </p>
      <button type="button" onClick={() => handleDelete(contact.id)}>
        Delete
      </button>
    </li>
  );
};

export default Contact;
