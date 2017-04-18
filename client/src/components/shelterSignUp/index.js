import React from 'react';
import './shelterSignUp.css'

export default class ShelterSignUp extends React.Component {

  postShelter() {
    const payload = {
      name: this.refs.name.value,
      email: this.refs.email.value,
      password: this.refs.password.value,
      address: this.refs.address.value,
      zipcode: this.refs.zipcode.value,
      state: this.refs.state.value,
      type: this.refs.type.value,
    };
    return fetch('../../../api', {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: "POST",
      body: JSON.stringify(payload)
    })
    .then(res => { 
      this.refs.name.value = '';
      this.refs.email.value = '';
      this.refs.password.value = '';
      this.refs.address.value = '';
      this.refs.zipcode.value = '';
      this.refs.state.value = '';
      this.refs.type.value = '';
      console.log('POST Success');
      return res.json(); 
    })
    .catch(err => console.error(err));
  }

  handleRegister(event){
    event.preventDefault();
    this.postShelter();
  }

  render(){
    return(
      <div>
        <div className="register-container">
          <h2>Register Shelter</h2>
          <form onSubmit={(e)=> this.handleRegister(e)}>
            <label htmlFor="name"></label><br />
            <input id="name" placeholder="Name" ref='name' /><br />

            <label htmlFor="type"></label><br />
            <input id="type" placeholder="Type" ref='type' /><br />

            <label htmlFor="email"></label><br />
            <input id="email" placeholder="Email" ref='email' /><br />

            <label htmlFor="password"></label><br />
            <input id="password" placeholder="Password" ref='password' /><br />

            <label htmlFor="address"></label><br />
            <input id="address" placeholder="Address" ref='address' /><br />

            <label htmlFor="zipcode"></label><br />
            <input id="zipcode" placeholder="Zipcode" ref='zipcode' /><br />

            <label htmlFor="State"></label><br />
            <input id="state" placeholder="State" ref='state' /><br />

            <button>Submit</button>
            
          </form>
        </div>
      </div>
    )
  }
}