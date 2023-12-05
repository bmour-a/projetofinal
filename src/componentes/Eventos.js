import React from "react";
import {Col, Row} from "reactstrap";
import foto2 from "./images/foto2.png"

function Eventos() {
    return (
        <div>
            <Row>
                <Col>
                <img src={foto2} className="img-fluid" style={{maxWidth: '400px'}}  alt="Foto2"></img>
                    <h1 className="text-primary">Eventos e informações sobre shows.</h1>
                    <h2 className="text-info">Pocket Show</h2>
                    <p>Nossos Pocket Shows são pequenas apresentações que acontecem entre Abril e Julho.
                        Cada professor faz um show com seus alunos. Geralmente com formação reduzida de banda e plateia intimista,
                        os shows acontecem no Auditório da Escola de Música Intermezzo, com capacidade média de 100 pessoas.
                        É mais uma forma de ir deixando o aluno cada vez mias motivado e acostumado com o palco e o processo de tocar ao vivo para uma plateia.
                    </p>
                </Col>
            </Row>
            <Row>
                <Col>
                    <h2 className="text-info">Show de Rock</h2>
                    <p>São shows que ocorrem durante o mês de Abril no Manifesto Bar.
                        Juntamos alunos que gostam do gênero Rock e montamos as bandas para se apresentarem.
                        Geralmente são alunos que já fazem aulas e possuem uma certa experiência.
                        Neste curso damos uma autonomia para as bandas que muitas vezes fazem os ensaios sem um professor presente,
                        tendo que pensar em arranjo, tom da música, gerando assim uma experiência real de banda.</p>
                </Col>
            </Row>
            <Row>
                <Col>
                    <h2 className="text-info">Intermezzo Music City</h2>
                    <p>Este foi um evento criado durante a Pandemia do Covid-19.
                        Com a paralisação de praticamente tudo, restrições de aglomeração,
                        de eventos e shows, queríamos manter acesa a chama de todo artista:estar no palco, 
                        se apresentar para uma plateia. Foi daí que surgiu esse evento que foi um sucesso.
                        Em um formato totalmente ao ar livre, as pessoas ficavam dentro de seus carros assistindo o show.
                        O mais incrível é que a música que estava sendo tocado no palco também saia no rádio do carro,
                        possibilitando aos pais e amigos uma experiência inesquecível. Ao todo foram 20 shows neste formato,
                        com mais de 500 alunos se apresentando e vivendo um momento que será lembrado para sempre.</p>
                </Col>
            </Row>
        </div>
    )
}
export default Eventos;