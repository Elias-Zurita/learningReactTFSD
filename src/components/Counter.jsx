import { Component } from "react"; // Cuando necesito Component se coloca entre llaves {}

class Counter extends Component {
    constructor(props){
        super(props); // Permite que la app funcione, ya que es constructor del componente padre
        this.state = { 
            initialValue: 0,
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

    // Handler
    increment(){
        const actualValue = this.state.initialValue
        if (actualValue == 15){
            console.log("Llegamos a 15");
            console.log("Dejamos de sumar");
            return; // frena el ciclo al llegar a 15 y muestra por consola los msj
        }
        this.setState({ initialValue: actualValue + 1 })
    }

    decrement(){
        const actualValue = this.state.initialValue
        if (actualValue == 0){
            console.log("No puedes setear el valor en menos de cero");
            return; // frena el ciclo de decremento al llegar a 0
        }
        this.setState({ initialValue: actualValue - 1 })
    }

    changeDeveloperName(name){
        this.setState({ developer: name })
    } // cambia el nombre del developer

    render() {
        const {initialValue,developer} = this.state;
        const {subject} = this.props;
        return (
            <>
                <hr />
                <h2>Contador</h2>
                <p>El valor del contador es: <strong>{ initialValue }</strong></p>
                <button onClick={() => this.increment()}>Incrementar</button>
                <button onClick={() => this.decrement()}>Decrementar</button>
                <button onClick={() => this.changeDeveloperName("Peter")}>Cmbiar el nombre del Developer</button>
                <hr />
                <em>El developer es: {developer} y le encanta programar en: <strong>{subject}</strong></em>
                <hr />
            </>
        )
    }
}

export default Counter;