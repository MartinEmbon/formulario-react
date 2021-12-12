import './Drop.css';

import { useState } from "react";

function Dropdown({ selected, setSelected }) {
  
    const [isActive, setIsActive] = useState(false);
    
    const options = [
        'AC - Acre','AL - Alagoas','AP - Amapá','AM - Amazonas',
        'BA - Bahia','CE - Ceará','DF - Distrito Federal','ES - Espírito Santo',
        'GO - Goías','MA - Maranhão','MT - Mato Grosso','MS - Mato Grosso do Sul',
        'MG - Minas Gerais','PA - Pará','PB - Paraíba','PR - Paraná',
        'PE - Pernambuco','PI - Piauí','RJ - Rio de Janeiro',
        'RN - Rio Grande do Norte','RS - Rio Grande do Sul','RO - Rondônia','RR - Roraíma',
        'SC - Santa Catarina','SP - São Paulo','SE - Sergipe','TO - Tocantins'
    ];
  
  return (
    <div className="dropdown">
      <div className="dropdown-btn" onClick={(e) => setIsActive(!isActive)}>
        {selected}
        <span className="fas fa-caret-down"></span>
      </div>
      {isActive && (
        <div className="dropdown-content">
          {options.map((option) => (
            <div
              onClick={(e) => {
                setSelected(option);
                setIsActive(false);
              }}
              className="dropdown-item"
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Dropdown;
