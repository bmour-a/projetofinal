import React from "react";
import { Row, Col } from "reactstrap";
import foto1 from "./images/foto1.png"


function Cursos() {
    return (
        <div>
            <Row>
                <Col>
                    <div>
                        <img src={foto1} className="img-fluid" style={{maxWidth: '300px'}} alt="Foto1"></img>
                        <h1 className="text-primary">Cursos Oferecidos e suas descrições.</h1>
                        <h2 className="text-success">Curso de Canto: Desenvolva a Voz com Técnica e Prática</h2>
                        <p>Como desenvolver a voz de maneira saudável para cantar com técnica e sentimento em qualquer estilo. Com André Fantom.</p>
                        <h3 className="text-info" >Algumas informações sobre o professor deste cuso:</h3>
                        <p>O professor André ele é Publicitário, Cantor, Professor de Canto e Fonoaudiólogo.
                            Ele é uma pessoa calma, motivador, didático, ensina tudo que é possível de ser ensinado quando o assunto é tecnica vocal.
                            o conteúdo deste curso é muito bom e bem explicado, o professor tira todas as suas dúvidas. </p>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col>
                    <h2 className="text-success">Teoria da Música do Básico ao Avançado</h2>
                    <p>Aprenda a ler e escrever uma partitura e os elementos básicos da música: escalas, intervalos, etc.</p>
                    <h3 className="text-info">Algumas informações sobre o professor deste cuso:</h3>
                    <p>O professor Josemir Valverde ele é Doutor e Mestre em Composição Musical pela Universidade Federal do Rio Grande do Sul UFRGS.
                        Graduado em Composição e Regência pela Universidade Federal da Bahia UFBA.
                        Pós-Graduado em Gestão e Negócios pela Unisinos. Ele é um ótimo professor ensina tudo certinho e tira todas as suas dúvidas.</p>
                </Col>
            </Row>
            <Row>
                <Col>
                    <h2 className="text-success">Curso de Piano e Teclado</h2>
                    <p>Aprenda Piano do Principiante ao Avançado, com o melhor método de ensino da actualidade. Curso traduzido em 7 Línguas.</p>
                    <h3 className="text-info">Algumas informações sobre o professor deste cuso:</h3>
                    <p>O pianista e compositor Glauco Segundo é de naturalidade brasileira,
                        formado no Bacharelado em Música/Piano pela Universidade Federal de Pernambuco (UFPE),
                        tem Mestrado em Música/Composição pela Escola Superior de Música de Lisboa, (ESML), sob a orientação do Dr. António Pinho Vargas,
                        é Doutorando em Composição Musical pela Universidade de Évora.</p>
                </Col>
            </Row>
        </div>
    )
}
export default Cursos;