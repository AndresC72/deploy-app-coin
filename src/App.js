import React from 'react';
import { Container, Navbar  } from 'react-bootstrap';
import Accordion from 'react-bootstrap/Accordion';
import './App.css';

function App() {

  

  const data = [{coin: "Valor de moneda", "valor": 1}, {coin: "Valor de moneda", "valor": 2}, {coin:"Valor de moneda", "valor": 4} ]
  


  const dineroAMonedas = (cantidad, monedas) => {
   
    monedas.sort((unNumero, otroNumero) => otroNumero - unNumero);
    const monedasUsadas = [];
    for (const moneda of monedas) {
        while (cantidad >= moneda) {
            monedasUsadas.push(moneda);
            cantidad -= moneda;
        }
    }
    return monedasUsadas;
};




const cantidad = 10;
const monedas = [1, 2, 4];
const monedasYBilletes = dineroAMonedas(cantidad, monedas);


  return (

    <div className="App" >
  

     <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home"> <p className="text-center">MUTA CoinsApp  🏦</p> </Navbar.Brand>
        </Container>
      </Navbar>
      <br />


      <Accordion defaultActiveKey={['0']} alwaysOpen>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Dado el valor del billete 💵 :</Accordion.Header>

        <Accordion.Body>
        <h3 className="container p-5 my-5 border"><ul>   💲{cantidad}</ul></h3>
        </Accordion.Body>

      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>Monedas disponibles 💰 : </Accordion.Header>
        <Accordion.Body>
        

      <div className="container p-5 my-5 bg-primary text-white">
      {function() {
      let monedasLista = []
      for (let i = 0; i<data.length; i++){
      monedasLista.push(<p>{data[i].coin + ": " + "💲" + data[i].valor }</p>)
      }
      return monedasLista
      }()
      }</div>

        </Accordion.Body>
      </Accordion.Item>


      <Accordion.Item eventKey="3">
        <Accordion.Header>El listado de monedas mínimo para dar la cantidad de dinero ${cantidad} es:</Accordion.Header>
        <Accordion.Body>
        

        <h3>
   
   <div className="container p-5 my-5 bg-primary text-white">
    {function() {
      let monedasLista = []
    for (let i = 0; i<1 ; i++){
      monedasLista.push(<li>{"Una moneda de: "+"💲"+ monedasYBilletes[0] }</li>)
      monedasLista.push(<li>{"Otra moneda de: "+"💲"+ monedasYBilletes[1] }</li>)
      monedasLista.push(<li>{"Por ultimo una moneda de: "+"💲"+ monedasYBilletes[2] }</li>)
    }
    return monedasLista
    }()
    }</div>

   </h3>

   
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>




  <footer>
  <p>Licencia 📄
Este proyecto está bajo la Licencia Andres Cristancho 2022 © Todos los derechos reservados.
    </p>
</footer>
      




        

    </div>
  );
}

export default App;
