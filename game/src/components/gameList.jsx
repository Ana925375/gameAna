const GameList = () => {

    const handleEvent = () => {
        console.log("Ativou o Jogo !");
        
    };
    return (
        <div>
        <button onClick={handleEvent}> Clique Aqui!</button>
        </div>
    );
};

export default GameList;