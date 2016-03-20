import React from 'react';

export default class Contact extends React.Component{
  render(){
    return(
      <li className="contact" >{this.props.contact.name} - {this.props.contact.phone}</li>
      )
  }
}
