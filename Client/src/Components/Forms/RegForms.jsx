import { useContext, useState } from 'react'
import styles from './Forms.module.css';
import { Link } from 'react-router-dom';
import { RegBtn } from './Buttons/RegBtn';
import AccountContexts from '../../Context';

export function RegForms() {

    const { email, setEmail, password, setPassword,
        message, isValid } = useContext(AccountContexts)

    const successMessage = {
        color: "green",
        background: "rgba(0,255,0,0.1)"
    };

    const failureMessage = {
        color: "red",
        background: "rgba(255,0,0,0.1)"
    };

    return (
        <div className={styles["wrapper"]}>
            <div className={styles["form"]}>
                <h1 className={styles['forms-title']}>Register Form 🐞</h1>
                <div className={styles["errorMessage"]} style={message}>{isValid}</div>
                <div className={styles["row"]}>
                    <label htmlFor="email">Email</label>
                    <input type="email" autoComplete='off' id="email"
                        value={email}
                        onChange={({ target }) => setEmail(target.value)} />
                </div>
                <div className={styles["row"]}>
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" value={password}
                        onChange={({ target }) => { setPassword(target.value) }} />
                </div>

                <div className={styles["button"]}>
                    <RegBtn />
                </div>
                <Link to="/">
                    <button className={styles['register']}>Já tenho uma conta</button>
                </Link>
            </div>
        </div>


    )
}