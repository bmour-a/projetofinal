import foto3 from "./images/foto3.png"
import { Row, Col } from "reactstrap"


function Home() {
    return (
        <div>
            <Row>
                <Col>
                    <img src={foto3} className="img-fluid" style={{ maxWidth: '300px' }} alt="Foto3"></img>
                    <p>
                        <p className="text-primary">SingJing Escola de Música</p>

                        <p className="text-info">Descrição da Escola:</p>
                        SingJing é uma escola de música dedicada a inspirar e nutrir talentos musicais.
                        Com uma abordagem inovadora, buscamos proporcionar uma experiência educacional
                        envolvente e apaixonante para todos os amantes da música.

                        <p className="text-info">Cursos Oferecidos:</p>

                        <p>Canto: Desenvolva sua voz com cursos que abrangem desde técnicas vocais fundamentais até estilos avançados. </p>

                        <p>Instrumentos: Aprenda a tocar diversos instrumentos, incluindo guitarra, piano, violão, bateria e muito mais. </p>

                        <p>Teoria Musical: Aprofunde seu entendimento da música, abrangendo teoria, harmonia e composição. </p>

                        <p className="text-info">Professores:</p>
                        Nossos instrutores são músicos experientes e apaixonados, comprometidos em orientar os alunos em sua jornada musical. Conheça nossos talentosos educadores em nosso site.

                        <p className="text-info">Eventos:</p>
                        Participe dos nossos eventos musicais que celebram o talento de nossos alunos. Mantenha-se atualizado sobre apresentações especiais e colaborações.

                        <p className="text-info">Processo de Inscrição: </p>
                        Saiba como se tornar parte da comunidade SingJing. Detalhes sobre inscrição, requisitos e prazos estão disponíveis em nosso site.

                        <p className="text-info">Contato:</p>
                        Entre em contato conosco para mais informações. 
                        <p> Estamos aqui para responder às suas perguntas e ajudar você a começar sua jornada musical.</p>

                        <p>Descubra o seu potencial musical na SingJing, onde a paixão pela música encontra a excelência educacional.</p>
                    </p>

                </Col>
            </Row>
        </div>
    )
}
export default Home;
