import { Component } from "react"; // Cuando necesito Component se coloca entre llaves {}

class Counter extends Component {
    constructor(props){
        super(props); // Permite que la app funcione, ya que es constructor del componente padre
        this.state = { 
            initialValue: 10,
            developer: this.props.developerName,

        }
    }

    componentDidMount(){ // Cuando el componente se monta se ejecuta este metodo, cuando se renderiza
        console.log("%c Se monto el componente " , "background: red");
    }
    componentDidUpdate(){ // Cuando el componente se actualiza su estado, si cambia algo
        console.log("%c Se actualizó el componente ", "background: yellow");
    }
    componentWillUnmount(){ // Cuando el componente se desmonta
        console.log("%c Se desmontó el componente ", "background: blue");
    }

    render() {
        const {initialValue,developer} = this.state;
        const {subject} = this.props;
        return (
            <>
                <hr />
                <h2>Contador</h2>
                <p>El valor del contador es: <strong>{ initialValue }</strong></p>
                <em>El developer es: {developer} y le encanta programar en: <strong>{subject}</strong></em>
                <hr />
            </>
        )
    }
}

export default Counter;