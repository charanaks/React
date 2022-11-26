import React from "react";
import user from "../images/user.png";
const ContactCard = (props)=>{
    const {id, name, email} = props.contact; //it is known as destructuring
    return (
        <div className="item">
            <img className="ui avatar image" src ={user} alt = "user"/>
            <div className="content">
                <div className="header">{name}</div>
                <div>{email}</div>
            </div>
            <i className="trash alternate outline icon"
            style={{color : "red", marginTop : "7px", marginLeft : "330px"}}
            onClick = {() => props.clickHandler(id)}></i>
        </div>
    );
};

export default ContactCard;

