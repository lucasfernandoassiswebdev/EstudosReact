import React, { useState, useRef, useEffect } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'

const merge = function (s1, s2) {
    if (s1.length === 0 && s2.length === 0) return ""

    let array1 = s1.length > 0 ? s1.split("") : [];
    let array2 = s2.length > 0 ? s2.split("") : [];

    let cantContinue1 = !(s1.length > 0);
    let cantContinue2 = !(s2.length > 0);

    let formedString = "";

    let i = 0;

    while (!cantContinue1 || !cantContinue2) {
        if (i < array1.length) formedString += array1[i]
        else cantContinue1 = true

        if (i < array2.length) formedString += array2[i]
        else cantContinue2 = true

        i++
    }

    return formedString;
}

const UseRef = (props) => {
    const [value1, setValue1] = useState("")
    const [value2, setValue2] = useState("")
    const [value3, setValue3] = useState("")

    const count = useRef(0)
    const myInput1 = useRef(null)
    const myInput2 = useRef(null)

    useEffect(() => {
        count.current++;

        let newStr = merge(myInput1.current.value, myInput2.current.value)
        setValue3(newStr)

        myInput2.current.focus()
    }, [value1]);

    useEffect(() => {
        count.current++;

        let newStr = merge(myInput1.current.value, myInput2.current.value)
        setValue3(newStr)

        myInput1.current.focus()
    }, [value2]);

    return (
        <div className="UseRef">
            <PageTitle
                title="Hook UseRef"
                subtitle="Retorna um objeto mutável com a propriedade .current!"
            />

            <SectionTitle title="Exercício #01" />
            <div className="center">
                <div>
                    <span className="text">Valor: [</span>
                    <span className="text red">{value3}</span>
                    <span className="text">]</span>
                </div>
                <input type="text" className="input" ref={myInput1} value={value1} onChange={e => setValue1(e.target.value)} />
            </div>

            <SectionTitle title="Exercício #01" />
            <div className="center">
                <input ref={myInput2} type="text" className="input" value={value2} onChange={e => setValue2(e.target.value)} />
            </div>
        </div>
    )
}

export default UseRef
