import React from 'react';
import Contactcard from './Contactcard';

export default function Contactlist(props) {
    console.log(props);
    const deletecontacthandler = (id) => {
        props.getcontactid(id);
    };
    const renderContactList = props.contacts.map((contact) => {
        return (
            <Contactcard
                contact={contact}
                clickhandler={deletecontacthandler}
                key={contact.id}
            />
        );
    })
  return (
    <div className='ui celled list'>
      {renderContactList}
      </div>
  )
}
