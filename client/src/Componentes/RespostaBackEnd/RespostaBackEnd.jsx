import { useState, useEffect } from "react";
import Input from "../Input/Input";
function RespostaBackEnd(props) {

    const [returnBackend, setReturnBackEnd] = useState("")

    useEffect(()=>{
        setReturnBackEnd(props.returnBackend)
    },[props.returnBackend])
    return (
        <>
            {returnBackend &&
                <form>

                    {returnBackend.nome &&
                        <Input name={"Nome"} value={returnBackend.nome} />}

                    {returnBackend.cep ?
                        <>
                            <Input name={"UF"} value={returnBackend.uf} />
                            <Input name={"Estado"} value={returnBackend.localidade} />
                            <Input name={"Bairro"} value={returnBackend.bairro} />
                            <Input name={"CEP"} value={returnBackend.cep} />
                        </>
                        :
                        <Input name={"CEP"} value={"CEP não Encontrado"} />
                    }
                    
                    <Input name={"Renda-per-Capita"} value={`R$ ${returnBackend.rendaPerCapita}`} />
                </form>
            }
        </>
    )
}
export default RespostaBackEnd;
