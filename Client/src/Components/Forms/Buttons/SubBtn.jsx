import styles from '../Forms.module.css';
import { useContext, useState } from 'react';
import AccountContexts from '../../../Context';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

export function SubBtn() {

    const { email, password, isRequesting, setIsRequesting, setMessage, setIsValid } = useContext(AccountContexts)

    const [isLogged, setIsLogged] = useState(false);

    const failureMessage = {
        color: "red",
        background: "rgba(255,0,0,0.1)"
    };

    const navigate = useNavigate();

    const onSubmit = async () => {

        setIsRequesting(!isLogged);

        try {
            const response = await axios.post('http://localhost:3000/login', {
                email: email,
                password: password,
            })

            const id = response.data[0].ID;

            if (!!response.data.length) {
                navigate(`/user/${id}`);
                setIsLogged(true);
                setIsValid("Logado com Sucesso!");
            }

            if (response.data <= 0) {
                throw new Error(response.data.error);
            }

        }
        catch (error) {
            setMessage(failureMessage);
            setIsValid("Email ou senha Inválido(s)!");
        }
        finally { setIsRequesting(false) };
    }

    return (
        <>
                <button type='submit' className={styles['login-button']}
                    disabled={email.length === 0 || password.length < 6 || isRequesting}
                    onClick={onSubmit}>Login</button>
        </>
    )
}