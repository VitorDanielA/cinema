export default function Navbar(){
    return(
        <div className="flex items-center justify-around h-[100px] gap-5 w-screen px-10 pt-5">
            <h5 className="cinema_title">Square <br /> Cinema</h5>
            <div className="flex gap-7 opcoes">
                <p>Filmes</p>
                <p>Lançamentos</p>
                <p>Sessões</p>
                <p>Informações</p>
            </div>
            <input type="text" className="pesquisar"/>
            <button className="btn_pesquisar">Pesquisar</button>
        </div>
    )
}