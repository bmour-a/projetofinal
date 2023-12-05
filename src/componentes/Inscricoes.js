import React, { useState } from 'react';
import foto4 from "./images/foto4.png"
import { Row, Col, Button } from "reactstrap";


function Inscricoes() {
    return (
        <div>
            <Row className="my-4">
                <Col>
                    <img src={foto4} className="img-fluid" style={{ maxWidth: '300px' }} alt="Foto4"></img>
                </Col>
            </Row>
            <Row>
                <Col className="text-info">
                    <p>
                        <label>
                            Nome:
                        </label>
                        <input type="text" name="nome" />
                    </p>
                    <p>
                        <label>
                            Email:
                        </label>
                        <input type="email" name="email" />
                    </p>
                    <p>
                        Senha:
                        <label>
                            <input type="senha" name="senha" />
                        </label>
                    </p>
                    <p>
                        <label>
                            Requisitos para Matrícula:
                        </label>
                        <textarea name="requisitos" />
                        <Button color="primary" >Enviar inscrição</Button>
                    </p>
                </Col>
            </Row>
        </div>
    );
};
export default Inscricoes;