import Logo from "./logo/Logo";
import BotaoIniciar from "./BotaoIniciar";

export default function Inicio({setTela}){
    return(
        <div className = "inicio">
            <Logo />
            <BotaoIniciar data-identifier="start-zap-recall" setTela={setTela}/>
        </div>
    );
}