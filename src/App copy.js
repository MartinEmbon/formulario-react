import {useState} from "react"
import './App.css';
import Dropdown from "./DropDown"
function App() {
  const [selected, setSelected] = useState("Choose One");  

  return (


<div className="App">

      <h2>Venha Trabalhar Conosco</h2>
      <h3>Preencha o formulário abaixo</h3>    
      <form>
        <div className="form-container">
            
            <div className="col-izq">                    
                <input className="w-100" type="text" placeholder='Seu Nome' />          
                <input className="w-100" type="text" placeholder='Email' />
                <input className="w-100" type="text" placeholder='Telefone' />
                <input className="w-50" type="text" placeholder='Endereco' />
                
            </div>

            <div className="col-der">        
            <input className="w-50" type="text" placeholder='Cidade' />          
              <input type="text" placeholder='CEP' />                  
              <Dropdown selected={selected} setSelected={setSelected} />
              <input type="text" placeholder='Area' />
            </div>
        </div>

        <div className="attachment">                    
          
          <div className="w-170">
            <input  type="text" placeholder='Anexar Curiculum' />
          </div>

          <div className="w-130">
            <label htmlFor="filePicker">Buscar Arquivo</label>
            <span className="fas fa-caret-down"></span>
             <input id="filePicker" style={{display:"none"}} type={"file"}/>
          </div>          
        </div>  

        <button>Enviar</button>      
      </form>
    </div>
  );
}

export default App;
