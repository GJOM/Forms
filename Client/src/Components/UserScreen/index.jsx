import { useEffect, useRef, useState } from 'react'
import { Navegation } from './Navegation';
import { Finances } from './Finances';


export function UserScreen() {

    const [option, setOption] = useState(String);
    const [component, setComponent] = useState(<Finances/>);

    const components = [
        { component: <Finances />, id: '1' }
    ]

    useEffect(() => {
        components.find(e => {
            if (option === e.id) {
                setComponent(e.component);
            }
        })
    }, [option]);

    return (
        
        <>
            <Navegation onHandleOption={setOption} />
            {component}

        </>
    )
}