import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./Header";
import { v4 as uuid } from "uuid";
import AddContact from "./AddContact";
import ContactList from "./Contactlist";
// import { BrowserRouter as Router,Switch,route } from "react-router-dom";
function App() {
  // const contacts = [
  //   {
  //     id: "1",
  //     name: "yogesh",
  //     email: "yogesh@gmail.com",
  //   },
  //   {
  //     id: "2",
  //     name: "devesh",
  //     email: "devesh@gmail.com",
  //   },
  // ];
  const LOCAL_STORAGE_KEY = "contacts";
  const [contacts, setContacts] = useState(
    JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) ?? []
  );

  const addcontactHandler = (contact) => {
    console.log(contact);
    // setContacts([...contacts, contact]);
    setContacts([...contacts, { id: uuid(), ...contact }]);

  };


  const removecontacthandler = (id) =>
  {
    const newcontactlist = contacts.filter((contact) => {
      return contact.id !== id;
    });
    setContacts(newcontactlist);
    }


  useEffect(() => {
    const retriveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (retriveContacts) setContacts(retriveContacts);
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);
  return (
    <div className="ui container">
      {/* <Router> */}
      <Header />
      <AddContact addcontactHandler={addcontactHandler} />
      <ContactList contacts={contacts} getcontactid={ removecontacthandler} />
      {/* </Router> */}
     
    </div>
  );
}

export default App;
