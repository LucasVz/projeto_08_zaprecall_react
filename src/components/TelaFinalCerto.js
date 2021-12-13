import emoteFeliz from "./imgs/party.png"
import MiniLogo from "./MiniLogo"

export default function TelaFinalCerto(){
    return(
        <>
            <MiniLogo />
            <div className="conteudo-resposta">
                <div className="mesma-linha">
                    <p className="titulo-resposta">PARABÉNS! </p>
                    <img src={emoteFeliz} alt="emote feliz" />
                </div>
                <p className="frase-resposta">Você não esqueceu de nenhum flashcard!</p>
            </div>
        </>
    )
}