import React from 'react';

import Contact from './Contact';


export default class ContactsList extends React.Component{
  constructor(){
    super();
      this.state = {
        search: ''
      };
    }

  updateSearch(event){
    this.setState({search: event.target.value})
  }

  render(){
    var filteredContacts = this.props.contacts.filter((contact)=>{
              return contact.name.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;
            }
          );

    return(
      <div>
        <input className="form-control" placeholder="Search a contact" type="text" value={this.state.search} onChange={this.updateSearch.bind(this)}/>
        <ul>
        {filteredContacts.map((contact)=>{
            return <Contact contact={contact} key={contact.id} />
        })}
        </ul>
      </div>
      )
  }
}
