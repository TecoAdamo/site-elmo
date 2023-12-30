import Porto from '../assets/Porto.jpg';

function Carrossel() {
    return (
        <>
            <div className="container">
                <img
                    src={Porto}
                    alt="Minha Imagem"
                    className="header-image"
                />
            </div>
        </>
    );
}

export default Carrossel;
