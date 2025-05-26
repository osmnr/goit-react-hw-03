import Contact from "./Contact";

const ContactList = ({ contacts, deleteContact }) => {
  return (
    <ul>
      {contacts.map(({ id, name, number }) => (
        <li key={id}>
          <Contact id={id} name={name} number={number} deleteContact={deleteContact} />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
