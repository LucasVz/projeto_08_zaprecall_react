import React from "react";
import MiniLogo from "./MiniLogo"
import Carta from "./Carta"


export default function Cartas({setResultado, setResultadoCerto}){
    const [indice, setIndice] = React.useState(0);

    const deck = [
        {pergunta :"O que é JSX? ",
        resposta: "Uma extensão de linguagem do JavaScript"
        },
        {pergunta :"O React é __ ",
        resposta: "uma biblioteca JavaScript para construção de interfaces"
        },
        {pergunta :"Componentes devem iniciar com __",
        resposta: "letra maiúscula"
        },
        {pergunta :"Podemos colocar __ dentro do JSX ",
        resposta: "expressões"
        },
        {pergunta :"O ReactDOM nos ajuda __ ",
        resposta: "interagindo com a DOM para colocar componentes React na mesma"
        },
        {pergunta :"Usamos o npm para __",
        resposta: " gerenciar os pacotes necessários e suas dependências"
        },
        {pergunta :"Usamos props para __ ",
        resposta: "Usamos props para __ "
        },
        {pergunta :"Usamos estado (state) para __",
        resposta: "dizer para o React quais informações quando atualizadas devem renderizar a tela novamente"
        },
    ]
    const tamanhoArray = deck.length;


    const passarCartas = deck.map(c =>(
        <Carta {...c} indice = {indice} setIndice = {setIndice}tamanhoArray = {tamanhoArray} setResultado = {setResultado} setResultadoCerto = {setResultadoCerto}/>
    ))
    

    return(
        <div>
            <MiniLogo />
            <div className="cartas">
                {passarCartas[indice]}
            </div>
        </div>
    )
}

