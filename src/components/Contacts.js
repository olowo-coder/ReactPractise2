import React, { Component } from 'react';
import Contact from "./Contact";

class Contacts extends Component {
    state = {
            contacts: [
            {
                id: 1,
                name: 'John Doe',
                email: 'john@email.com',
                phone: '123-567-987'
            },
            {
                id: 2,
                name: 'Sarah Joe',
                email: 'john@email.com',
                phone: '333-562-987'
            },
            {
                id: 3,
                name: 'Smith Dana',
                email: 'dana@email.com',
                phone: '888-567-876'
            }
            
        ]}
    
  render() {
      const { contacts } = this.state;
    return (
      <div>
          {contacts.map(contact => 
            <Contact 
            key={contact.id}
            contact={contact}
            />
          )}

      </div>
    )
  }
}

export default Contacts;