import emoteTriste from "./imgs/sad.png"
import MiniLogo from "./MiniLogo"

export default function TelaFinalIncorreto(){
    return(
        <>
            <MiniLogo />
            <div className="conteudo-resposta">
                <div className="mesma-linha">
                    <p className="titulo-resposta">Putz..</p>
                    <img src={emoteTriste} alt="emote triste" />
                </div>
                <p className="frase-resposta">Você esqueceu alguns flashcards..  Não desanime! Na próxima você consegue!</p>
            </div>
        </>
    )
}