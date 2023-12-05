import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'reactstrap';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './componentes/Home';
import Contato from './componentes/Contato';
import Rodape from './componentes/Rodape';
import React from "react";
import Cursos from './componentes/Cursos';
import Eventos from './componentes/Eventos';
import Menu from './componentes/Menu';
import Inscricoes from './componentes/Inscricoes';


function App() {
  return (
    <Container fluid>
      <BrowserRouter>
        <Row>
          <Col>
            {/* Aqui vai o Navbar */}
            <Menu />
          </Col>
        </Row>

        <Row>
          {/* Aqui vai o conteúdo (rotas do site) */}
          <Col>
            {/* Rotas */}
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/cursos" element={<Cursos />} />
              <Route exact path="/contato" element={<Contato />} />
              <Route exact path="/eventos" element={<Eventos />} />
              <Route exact path="/inscricoes" element={<Inscricoes />} />

            </Routes>

          </Col>
        </Row>

      </BrowserRouter>

      <Row>
        {/* Aqui vai o rodapé */}
        <Rodape />
      </Row>
    </Container >
  );
}
export default App;
