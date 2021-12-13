import React from "react";
import botãoVirar from "./imgs/turn.png"

export default function Carta({pergunta, resposta, indice, setIndice, tamanhoArray, setResultado, setResultadoCerto}){

    const [virarCarta, setVirarCarta] = React.useState("frente")

    const [trocarBotao, setTrocarBotao] = React.useState("botaoResposta")

    const [borda, setBorda] = React.useState("")

    function virar(){
        setVirarCarta("verso")
    }

    function responder(alternativa){
        setTrocarBotao("");
        setBorda(alternativa);
        if(alternativa !== "correto"){
            setResultadoCerto("");
        }
    }

    function passarCarta(){
        setIndice(indice + 1);
        setVirarCarta("frente");
        setTrocarBotao("botaoResposta")
        setBorda("");
        if(indice === 7){
            setResultado("");
        }

    }

    return (
        <div className= {`carta ${borda}`}>
            {(virarCarta === "frente") ? 
            <div className="frente">
                <p className="contador">{indice+1}/{tamanhoArray}</p>
                <p className="pergunta">{pergunta}</p>
                <img src={botãoVirar} onClick={virar} className ="botao-virar-carta"/>
            </div>
            :
            <div className="verso">
                <p className="contador">{indice+1}/{tamanhoArray}</p>
                <p className="pergunta-menor">{pergunta}</p>
                <p className="resposta"> {resposta}</p>
                
                {(trocarBotao === "botaoResposta") ? 
                <div className="botoes-resposta">
                    <button className="botao-resposta botao-neutro" onClick={() => responder("neutro")}>Aprendi agora</button>
                    <button className="botao-resposta botao-incorreto" onClick={() => responder("incorreto")}>Não lembrei</button>
                    <button className="botao-resposta botao-esforco" onClick={() => responder("esforco")}>Lembrei com esforço</button>
                    <button className="botao-resposta botao-correto" onClick={() => responder("correto")}>Zap</button>
                </div>
                :
                <img src={botãoVirar} onClick={passarCarta} className ="botao-virar-carta"/>
            }
            </div>}
        </div>
    )}