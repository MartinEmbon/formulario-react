import { useState } from "react"
import './App.css';
import Dropdown from "./DropDown"

function App() {
  
  const [selected, setSelected] = useState("Estado");
  const [hola, setHola] = useState()
  return (
    <div className="App">
      <div className="titulos">
        <h2>Venha Trabalhar Conosco</h2>
        <h3>Preencha o formulário abaixo</h3>
      </div>
      <form>
        <div className="form-container">
          <div className="nome">
            <input className="nome" type="text" placeholder='Seu Nome' />
          </div>
          <div className="email">
            <input className="email" type="text" placeholder='Email' />
          </div>

          <div className="telefone">
            <input className="telefone" type="text" placeholder='Telefone' />
          </div>

          <div className="linha">
            <div className="endereco  w-50 w-70">
              <input className="endereco" type="text" placeholder='Endereco' />
            </div>
            <div className="cidade w-50 w-30">
              <input className="cidade" type="text" placeholder='Cidade' />
            </div>
          </div>


          <div className="drop">
            <Dropdown className="drop" selected={selected} setSelected={setSelected} />
          </div>

          <div className="cep">
            <input className="cep" type="text" placeholder='CEP' />
          </div>

          <div className="area">
            <input className="area" type="text" placeholder='Area' />
          </div>

          <div className="anexo">
            <div className="w-70">

              {!hola ?
                <input type="text" disabled placeholder='Anexar Curiculum' />
                :
                <input type="text" disabled placeholder={hola} />
              }

            </div>

            <div className="w-130">
              <label className="arquivo" htmlFor="filePicker">Buscar Arquivo</label>
              <label className="zeta" htmlFor="filePicker"><span className="fas fa-search"></span></label>
              <input type="file" onChange={(e) => setHola(e.target.files[0].name)} style={{ display: "none" }} id="filePicker" />
            </div>
          </div>
          <div className="btn">
            <button>Enviar Currículo</button>
          </div>
        </div>

      </form>
    </div>
  );
}

export default App;
