import React from "react";
import Inicio from "./components/Inicio"
import Cartas from "./components/Cartas"
import TelaFinalCerto from "./components/TelaFinalCerto";
import TelaFinalIncorreto from "./components/TelaFinalIncorreto";

export default function App() {
    
    const [resultado, setResultado] = React.useState("respondendo");
    const [resultadoCerto, setResultadoCerto] = React.useState("certo")
    const [tela, setTela] = React.useState('telaInicio');
  
    return (
        <>
            {(resultado === "respondendo") ?
            <div>
                {(tela === 'telaInicio') ? <Inicio setTela={setTela}/> : <Cartas setResultadoCerto = {setResultadoCerto} setResultado ={setResultado} /> }
            </div>
            :
            <div>
                {(resultadoCerto === "certo") ? 
                <TelaFinalCerto />
                : 
                <TelaFinalIncorreto />}
            </div>
            }
        </>
    )
  }
