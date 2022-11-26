import React from "react";

class AddContact extends React.Component {
    state = {
        name : "",
        email : "",
};
    add = (e) =>{
        e.preventDefault();                                   //as we are using a button we dont want our 
        if(this.state.name === "" || this.state.email === ""){//page to be refreshed so we are using this
            alert("Please fill all the feilds");
            return;
        }
        this.props.addContactHandler(this.state); 
        //passing the props from child to parent because 
        //our app.js is the file which is going to add contacts into the contact array
        this.setState({name:"", email:""});
    }
    render() {
        return (
            <div className="ui main">
                <br/><br/>
                <h2>Add Contact</h2>
                <form className="ui form" onSubmit={(this.add)}>
                    <div className="field">
                        <label>Name</label>
                        <input type="text" name="name" 
                        placeholder="Enter your Name"
                        value={this.state.name} 
                        onChange={(e) => this.setState({name: e.target.value })}></input>
                    </div>
                    <div className="field">
                        <label>Email</label>
                        <input type="text" name="email" 
                        placeholder="Enter your mail Id"
                        value={this.state.email}
                        onChange={(e) => this.setState({email: e.target.value })}></input>
                    </div>
                    <button className="ui button orange">Add</button>
                </form>
            </div>
        )
    }
}

export default AddContact;