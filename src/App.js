import Input from "./components/Input";
import Button from "./components/Button";

import { Container, Content, Row } from './styles';

import { useState } from "react";

const App = () => {
   const [currentNumber, setCurrentNumber] = useState('0'); //onde são armazenados valores
   const [firstNumber, setFirstNumber] = useState('0'); //reconhecimento das ordens dos valores por exemplo adicionando 1 e depois mais 2 para poder fazer os calculos 
   const [operation, setOperation] = useState(''); //necessário para realização do botão igual

   //setfirstnumber tem que ficar no clear para limpar os dados anteriores
   const handleOnClear = () =>{
      setCurrentNumber('0')
      setFirstNumber('0')
      setOperation('')
   }
   const handleAddNumber = (num) =>{
      setCurrentNumber(prev => `${prev === '0' ? '' : prev}${num}`) //manter o num depois do prev para a ordem da calculadora não inverter
   }

   const handleSumNumbers = () => {
      if(firstNumber === '0') {
         setFirstNumber(String(currentNumber));
         setCurrentNumber('0')
         setOperation('+')
      } else {
         const sum = Number(firstNumber) + Number(currentNumber)
         setCurrentNumber(String(sum))
         setOperation('')
      }
   }

   const handleRemNumbers = () => {
      if(firstNumber === '0') {
         setFirstNumber(String(currentNumber));
         setCurrentNumber('0')
         setOperation('-')
      } else {
         const sum = Number(firstNumber) - Number(currentNumber)
         setCurrentNumber(String(sum))
         setOperation('')
      }
   }

   const handleMultNumbers = () => {
      if(firstNumber === '0') {
         setFirstNumber(String(currentNumber));
         setCurrentNumber('0')
         setOperation('x')
      } else {
         const sum = Number(firstNumber) * Number(currentNumber)
         setCurrentNumber(String(sum))
         setOperation('')
      }
   }

   const handleDivNumbers = () => {
      if(firstNumber === '0') {
         setFirstNumber(String(currentNumber));
         setCurrentNumber('0')
         setOperation('/')
      } else {
         const sum = Number(firstNumber) / Number(currentNumber)
         setCurrentNumber(String(sum))
         setOperation('')
      }
   }

   const handleEquals = () => {
      if(firstNumber !== '0' && operation !== '' && currentNumber !== '0') {
            switch(operation){
               case '+':
                  handleSumNumbers();
                  break;
               case '-':
                  handleRemNumbers();
                  break;
               case 'x':
                  handleMultNumbers();
                  break;
               case '/':
                  handleDivNumbers();
                  break;   
               default:
                  break;
            }
         } 
      }

  return (
    <Container>
        <Content>
            <Input value={currentNumber}/>
            <Row>
               <Button label="x" onClick={handleMultNumbers}/>
               <Button label="/" onClick={handleDivNumbers}/>
               <Button label="C" onClick={handleOnClear}/>
               <Button label="=" onClick={handleEquals}/>
            </Row>
            <Row>
               <Button label="7" onClick={() => handleAddNumber('7')}/>
               <Button label="8" onClick={() => handleAddNumber('8')}/>
               <Button label="9" onClick={() => handleAddNumber('9')}/>
               <Button label="-" onClick={handleRemNumbers}/>
            </Row>
            <Row>
               <Button label="4" onClick={() => handleAddNumber('4')}/>
               <Button label="5" onClick={() => handleAddNumber('5')}/>
               <Button label="6" onClick={() => handleAddNumber('6')}/>
               <Button label="+" onClick={handleSumNumbers}/>
            </Row>
            <Row>
               <Button label="1" onClick={() => handleAddNumber('1')}/>
               <Button label="2" onClick={() => handleAddNumber('2')}/>
               <Button label="3" onClick={() => handleAddNumber('3')}/>
               <Button label="0" onClick={() => handleAddNumber('0')}/>
            </Row>
        </Content>
    </Container>
  );
}

export default App;
