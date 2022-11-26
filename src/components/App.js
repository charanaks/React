import React, {useState, useEffect} from 'react';
import { v4 as uuid } from "uuid";
import AddContact from './AddContact';
import Header from './Header';
import ContactList from './ContactList';
import './App.css';

function App() {
  const [contacts, setContacts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const addContactHandler = (contact) =>{
    console.log(contact);
    setContacts([...contacts, { id: uuid(), ...contact}]);
  };

const LOCAL_STORAGE_KEY = "contacts";

useEffect(() => {
  const retriveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
  if (retriveContacts || retriveContacts.length ===0) setContacts(retriveContacts);
}, []);

useEffect(() => {
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
}, [contacts]);

const removeContactHandler = (id) =>{
  const newContactList = contacts.filter((contact) =>{
    return contact.id!== id;
  });
  setContacts(newContactList);
};
const searchHandler = (searchTerm)=>{
  setSearchTerm(searchTerm);
  if(searchTerm !=="")
  {
    const newContactList2 = contacts.filter((contact) =>{
      return Object.values(contact).join(" ").toLowerCase().includes(searchTerm.toLowerCase);
    });
    setSearchResults(newContactList2);
  }
  else{
    setSearchResults(contacts);
  }
}
return (
  <div className='ui container'>
    <Header/>
    <AddContact addContactHandler = {addContactHandler}/>
    <ContactList 
    contacts={searchTerm.length<1 ? contacts : searchResults} 
    getContactId = {removeContactHandler}
    term = {searchTerm}
    searchKeyWord ={searchHandler}/>
    </div>  
  );
}

export default App;
