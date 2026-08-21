import imagemm from '../assets/imagemm.jpg'

const GameCard = () => {

    const handleEvent = () => {
        console.log("Ativou o Jogo !");
        
    };
    return (
        <div>
        <h3> Meu Primeiro site para Jogos!</h3>
        <img src={imagemm} alt="Imagemm"/>
        </div>
    );
};

export default GameCard;