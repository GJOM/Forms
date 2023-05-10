import { useRef, useState, useMemo } from 'react'
import { Route, Routes } from 'react-router-dom';
import { UserScreen } from '../Components/UserScreen';
import AccountContexts from '../Context';
import { RegForms } from '../Components/Forms/regForms';
import { SubForms } from '../Components/Forms/SubForms';

function App() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isValid, setIsValid] = useState('');
  const [isRequesting, setIsRequesting] = useState(false);
  const [message, setMessage] = useState({})
  const [isRegistering, setIsRegistering] = useState(false);

  const contextComponents = useMemo(() => ({
    email, setEmail,
    password, setPassword,
    isValid, setIsValid,
    isRequesting, setIsRequesting,
    message, setMessage,
    isRegistering, setIsRegistering
  }), [email, password, isValid, isRequesting, message, isRegistering])

  return (
    <>

      <AccountContexts.Provider value={contextComponents}>

        <Routes>
          <Route path='/user/:id' element={<UserScreen/>} />
          <Route path='/' element={<SubForms />} />
          <Route path='/register' element={<RegForms />} />

        </Routes>
      </AccountContexts.Provider>

    </>
  )
}

export default App
