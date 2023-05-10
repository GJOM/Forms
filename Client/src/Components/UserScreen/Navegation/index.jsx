import styles from './Navegation.module.css';
import { Link } from 'react-router-dom';
export function Navegation({ onHandleOption}) {

    const links = [
        { content: 'Finances', id: '1' }
    ]

    const onLogOut = () => {
        // resetar todos os estados.
    }

    return (
        <header>
            <h1 className={styles["logo"]}>Empresa_X</h1>
            <nav className={styles["header-nav"]}>
                {links.map(({ content, id }) => (
                    <span key={id}
                        onClick={() => {
                            onHandleOption(id)
                        }}>{content}</span>
                ))}
            </nav>
            <nav>
                
            </nav>
            <Link to='/' className={styles['logout']}>
                <button className={styles['logout']} onClick={onLogOut}>Log out</button>
            </Link>
        </header>
    )
}