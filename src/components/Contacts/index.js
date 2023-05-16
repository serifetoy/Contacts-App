import { useState, useEffect } from 'react'

import List from './List'
import Form from './Form'
import './styles.css'

function Contacts() {

    const [contacts, setContacts] = useState([
        {
            fullname:'Linda',
            phone_number:+66989632
        },
        {
            fullname:'Albert',
            phone_number:+78432665
        },
        {
            fullname:'Arthur',
            phone_number:+98879876
        },
        {
            fullname:'Diana',
            phone_number:+57698879
        },
        {
            fullname:'Grace',
            phone_number:+21498798
        },
        {
            fullname:'Emma',
            phone_number:+31654879
        },
        {
            fullname:'Harper',
            phone_number:+36497579
        },
        {
            fullname:'Laurel',
            phone_number:+12457963
        },
        {
            fullname:'Megan',
            phone_number:+36187546
        },
        {
            fullname:'Maisie',
            phone_number:+24579468
        },
    ]);

    useEffect(() => {
        console.log(contacts);
    }, [contacts])


    return (
        <div id="container">
            <h1>Contacts</h1>
            <List contacts={contacts} />
            <Form addContacts={setContacts} contacts={contacts} />
        </div>
    )
}

export default Contacts