import React from 'react';

import ContactsList from './ContactsList';

export default class App extends React.Component{
  render(){
    return(
      <div>
        <h2 className="text-center">Contacts - React</h2>
        <ContactsList contacts={this.props.contacts}/>
      </div>
      )
  }
}
