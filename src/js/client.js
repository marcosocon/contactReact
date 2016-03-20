import React from 'react';
import ReactDOM from "react-dom";

import ContactsList from './components/ContactsList';

let contacts =[
  {
    id: 1,
    name: "Marcos",
    phone: 3816714866
  },
  {
    id: 2,
    name: "Lucas",
    phone: 3815541335
  },
  {
    id: 3,
    name: "Mama",
    phone: 3816123712
  },
  {
    id: 4,
    name: "Papa",
    phone: 3816566729
  },
  {
    id: 5,
    name: "Pablo",
    phone: 3816954692
  }
]

class App extends React.Component{
  render(){
    return(
      <div>
        <h1>Contacts - React</h1>
        <ContactsList contacts={this.props.contacts}/>
      </div>
      )
  }
}


ReactDOM.render( <App contacts={contacts} />, document.getElementById("app"));
