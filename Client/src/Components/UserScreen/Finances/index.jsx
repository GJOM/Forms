
import styles from './Finances.module.css';
import { useState } from 'react';
import { Time } from '../../../../Utils/Time';

export function Finances() {

    const [value, setValue] = useState('');
    const [viewfinder, setviewfinder] = useState('');
    const [sald, setSald] = useState(0);
    const [extract, setExtract] = useState([]);
    const [viewfinderChange, setViewfinderChange] = useState(false);

    const inputFormatter = ({target})=>{
        target.value = target.value.replace(/^([0-9]*\.)(.*)/g, '')
    }

    const handleDeposit = () => {
        setViewfinderChange(false);
        if (value != 0 && value !== null) {
            setSald(Number(sald) + Number(value));

            const transation = {
                value: `+${value}`,
                time: Time(),
                color: '#006600'
            }

            extract === null ? setExtract([`+${value}R$`])
                : setExtract([...extract, transation]);

            setviewfinder(`Depositado ${value}R$`);
            setValue('');
        } else {
            setviewfinder(`Valor Inválido!`);
        }
    }

    const handleWithdraw = () => {
        setViewfinderChange(false);
        if (value != 0 && value !== null) {
            if (sald != 0 && sald >= value) {
                setSald(Number(sald) - Number(value));

                const transation = {
                    value: `-${value}`,
                    time: Time(),
                    color: '#660000'
                }

                extract === null ? setExtract([`-${value}R$`])
                    : setExtract([...extract, transation]);

                setviewfinder(`Sacado ${value}R$`);
                setValue('');
            } else {
                setviewfinder(`Saldo Insuficiente!`);
            }
        } else {
            setviewfinder(`Valor Inválido!`);
        }
    }

    const checkSald = () => {
        setviewfinder(`${sald}R$`);
        setViewfinderChange(false);
    }

    const checkExtract = () => {
        setviewfinder('');
        extract.length === 0 ? setviewfinder('Sem Movimentações Recentes!')
            : setViewfinderChange(!viewfinderChange);
    }

    return (
        <>
            <div className={styles["finances-wrapper"]}>
                <h2 className={styles["finances"]}>Escolha Uma opção</h2>
                <input type="text" className={styles['inp-num']} value={value}
                    onInput={inputFormatter}
                    onChange={({ target }) => { setValue(target.value) }} />
                <div className={styles["options-wrapper"]}>
                    <button onClick={handleDeposit}>Depositar</button>
                    <button onClick={handleWithdraw}>Sacar</button>
                    <button onClick={checkExtract}>Extrato</button>
                    <button onClick={checkSald}>Saldo</button>
                </div>
                <span style={{ justifyContent: !viewfinderChange ? 'center' : 'flex-start' }}
                    className={styles["viewfinder"]}>{!viewfinderChange ? viewfinder :
                        extract.map((elem, key) => {
                            return <li key={key} style={{ color: elem.color }}>{elem.time} {elem.value}</li>;
                        })}</span>
            </div>
        </>
    )
}