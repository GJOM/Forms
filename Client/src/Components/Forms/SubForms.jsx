import { useContext} from 'react'
import styles from './Forms.module.css';
import { Link } from 'react-router-dom';
import { SubBtn } from './Buttons/SubBtn';
import AccountContexts from '../../Context';

export function SubForms() {

    const { email, setEmail, password, setPassword, message, isValid } = useContext(AccountContexts)

    return (
        <div className={styles["wrapper"]}>
            <div className={styles["form"]}>
                <h1 className={styles['forms-title']}>Login Form 🐞</h1>
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
                    <SubBtn />
                </div>
                <Link to="/register">
                    <button className={styles['register']}>Registrar</button>
                </Link>
            </div>
        </div>


    )
}
