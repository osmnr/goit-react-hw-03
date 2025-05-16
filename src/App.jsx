import "./App.css";
import ContactForm from "./components/ContactForm/ContactForm";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactList from "./components/ContactList/ContactList";
import { useState, useEffect } from "react";

function App() {
  // static contacts data instance from the hw
  const staticContactsData = [
    { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
    { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
    { id: "id-3", name: "Eden Clements", number: "645-17-79" },
    { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
  ];

  // contacts var initialization
  const [contacts, setContacts] = useState(() => {
    // fetch contacts from the local storage
    const localData = localStorage.getItem("contacts");
    // if the local storage is empty, initialize with static Data
    if (localData !== null) {
      return JSON.parse(localData);
    }
    return staticContactsData;
  });

  // if any changes on contacts, update it on local storage
  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  // filtering variable initialization
  const [keyword, setKeyword] = useState("");

  // callback for filtering
  const handleSearch = (event) => {
    console.log(event.target.value);
    setKeyword(event.target.value);
  };

  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox handleSearch={handleSearch} keyword={keyword} />
      <ContactList contacts={contacts} />
    </>
  );
}

export default App;
