import seta from "./imgs/next.png"

export default function BotaoIniciar({setTela}){
    return <button onClick={() => setTela("")} className = "botao-inicar">Praticar React<img src={seta} /></button>
}