
import { Component } from 'react';
import './App.css';


const College = ({categorie,endroit, children}) => {
  return (
    <div> Je suis un college de formation continue. <br/>
      Je suis un college de type {categorie}.<br/>
      Je suis dans la ville de {endroit}.<br/>
      {children}
       </div>
    
  )
}

const Ordinateur = () => {
  return (
    <div> Je suis un ordinateur de bureau </div>
  )
}

class App extends Component {
  state= { informations:[{cat:"prive", lieu:"quebec"},{cat:"public", lieu:"montreal"}]}
  changerCollege = () =>{
    this.setState({ informations:[{cat:"public", lieu:"TROIS-RIV"},{cat:"privé", lieu:"SHERBROOKE"}]})
  }
  render() {
    return (
      <div className="App">
        <h1> Bonjour ! Comment allez-vous? </h1>
        <College categorie = {this.state.informations[1].cat} endroit ={this.state.informations[1].lieu} />
        <button onClick={this.changerCollege}> Changer le college </button>
      </div>
    );
  }
}



export default App;
