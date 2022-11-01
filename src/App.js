import { useState } from 'react';
import { FormInput } from './components/FormInput';
import './app.css';
function App() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  console.log(email);
  return (
    <div className='app'>
      <form>
        <FormInput placeholder='Username' setState={setUsername} />
        <FormInput placeholder='Email' setState={setEmail} />
        <FormInput placeholder='Full Name' setState={setName} />
        <FormInput placeholder='Phone Number' setState={setPhone} />
      </form>
    </div>
  );
}

export default App;
