import styles from '../Forms.module.css'
import { useContext } from 'react';
import AccountContexts from '../../../Context';
import axios from 'axios';

export function RegBtn({register}) {

    const {email, setEmail, password, setPassword, setIsRegistering, isRequesting, setIsValid, 
        setIsRequesting, setMessage} = useContext(AccountContexts)
    
    const successMessage = {
        color: "green",
        background: "rgba(0,255,0,0.1)"
    };

    const failureMessage = {
        color: "red",
        background: "rgba(255,0,0,0.1)"
    };


    const onRegister = async () => {
        setIsRequesting(true);
        const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        try {
            const response = await axios.post('http://localhost:3000/register', {
                email: email,
                password: password
            });

            if (!validRegex.test(email)) {
                throw new Error("Email inválido!");
            };

            if (response.data.error) {
                throw new Error(response.data.error);
            }

            setMessage(successMessage);
            setIsValid(response.data);
        }
        catch (error) {
            setMessage(failureMessage);
            setIsValid(error.message);
        }
        finally {
            setIsRegistering(false);
            setIsRequesting(false);
            setEmail('');
            setPassword('');
        };
    }


    return (
        <>
            <button type='submit' className={styles['register-button']}
                disabled={email.length === 0 || password.length < 6 || isRequesting}
                onClick={onRegister}>Registrar</button>
        </>
    )
}

