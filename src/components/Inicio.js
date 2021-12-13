import Logo from "./logo/Logo";
import BotaoIniciar from "./BotaoIniciar";

export default function Inicio({setTela}){
    return(
        <div className = "inicio">
            <Logo />
            <BotaoIniciar setTela={setTela}/>
        </div>
    );
}