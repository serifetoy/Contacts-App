import { useState, useEffect } from 'react'

const initialFormValue = { fullname: '', phone_number: '' };
function Form({ addContacts, contacts }) {
  const [form, setForm] = useState(initialFormValue);

  useEffect(() => {
    setForm(initialFormValue);
  }, [contacts])

  const onchangeInput = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value })
  }

  const onSubmit = (event) => {
    event.preventDefault();
    if (form.fullname === '' || form.phone_number === '') {
      return false;
    }
    addContacts([...contacts, form]);
    console.log(form);
  };


  return (
    //form endpointe gider ve yeniler
    <form onSubmit={onSubmit}>
      <div>
        <input name="fullname" placeholder='FullName' onChange={onchangeInput} value={form.fullname} />
      </div>

      <div>
        <input name="phone_number" placeholder='Phone Number' onChange={onchangeInput} value={form.phone_number} />
      </div>
      <div>
        <br/>
        <button className="btn">
          Add
        </button>
      </div>

    </form>
  )
}

export default Form