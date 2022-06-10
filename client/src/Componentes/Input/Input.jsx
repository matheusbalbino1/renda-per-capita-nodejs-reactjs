import "./Input.css"
import { useState } from "react"

function Input(props) {

    const [valorInput, setValorInput] = useState("")
    if (valorInput === "" || props.value) {
        setTimeout(() => {
            let tirarTracos = props.name.split("-")
            tirarTracos = tirarTracos.join(" ")
            let divPlaceHolder = document.querySelector(`#div${props.name}`);
            divPlaceHolder.setAttribute("data-content", tirarTracos)

        }, 5)
    }

    function changeInput(elemento) {
        if ((props.type === "number" && elemento.target.value < 0) || (props.name === "cep" && elemento.target.value.length > 8)) {
        } else {
            setValorInput(elemento.target.value)
        }
    }

    return (
        <div className="divInput">

            {!props.value ?
                props.autofocus ?
                    <input type={props.type} name={props.name} onChange={(elemento) => { changeInput(elemento) }} autoFocus value={valorInput} />
                    :
                    <input type={props.type} name={props.name} onChange={(elemento) => { changeInput(elemento) }} value={valorInput} />
                :
                <input type={props.type} disabled value={props.value} />
            }

            <div id={`div${props.name}`} className={valorInput || props.value ? "subir" : ""}></div>
        </div>
    )
}
export default Input