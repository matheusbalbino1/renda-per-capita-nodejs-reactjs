import Input from "../Input/Input"
import "./Form.css"
function Form(props) {
    return (
        <form onSubmit={(e) => { props.handleSubmit(e) }}>
            <Input name="nome" type="text" autofocus={true} />
            <Input name="cep" type="number" />
            <Input name="renda-familiar" type="number" />
            <Input name="numero-de-dependentes" type="number" />
            <div className='divButtonSubmit'><button type='submit'>Calcular</button></div>
        </form>
    )
}
export default Form
