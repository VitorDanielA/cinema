import Image from "next/image";
import FilmeDeDanca from "./../assets/FilmeDeDanca.jpg";
import SetaEsquerda from './../assets/seta-esquerda.png';
import SetaDireita from './../assets/seta-direita.png';

export default function Carrousel(){
    return(
        <div className="ms-20 mt-10 flex">
            <Image alt="Capa do filme" src={FilmeDeDanca}/>
            <div className="inf_filme px-10">
                <p className="flex justify-end gap-4 pe-16">
                    <Image alt="Seta_esquerda" src={SetaEsquerda} className="setas"/>
                    <Image alt="Seta_Direita" src={SetaDireita} className="setas"/>
                </p>    
                <h1 className="titulo py-5">Ritmo Além do Tempo</h1>
                <p className="info_geral py-2">1h 34m / Duração</p>
                <p className="info_geral pb-6">24 Fev - 2024, Lançamento</p>
                <p className="sinopse pe-20">Sinopse: Em Ritmo Além do Tempo, acompanhamos a jornada de um grupo eclético de dançarinos que se unem para competir em um prestigioso concurso de dança. Com estilos únicos e personalidades vibrantes, eles descobrem que a verdadeira magia da dança vai além dos movimentos coreografados - ela transcende o tempo e conecta almas de maneiras inesperadas.</p>
                <p className="agendamento mt-4">Agendar Filme</p>
            </div>
        </div>
    )
}