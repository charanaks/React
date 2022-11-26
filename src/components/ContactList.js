import React from "react";
import { useRef } from "react";
import ContactCard from "./ContactCard";

const ContactList = (props) => {
    console.log(props); 
    const inputEl = useRef("");
    const deleteContactHandler = (id) =>{
    props.getContactId(id);
    };
    const renderContactList = props.contacts.map((contact) => {
        return <ContactCard contact = {contact}
        clickHandler = {deleteContactHandler}/>
    }); 
    const getSearchTerm = () => {
        props.searchKeyWord(inputEl.current.value);
    }
    return(
        <div className="ui celled list">
        <div className="ui search">
            <div className="ui icon input">
                <input type="text" ref = {inputEl} placeholder ="Search Contacts" className = "prompt" value={props.term} onChange={getSearchTerm}/>
            </div>
        </div><br></br>
            <div className="ui container center">
                {renderContactList}
            </div>
        </div>
    );
};
export default ContactList;