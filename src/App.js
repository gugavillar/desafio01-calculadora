
import Input from './components/Input';
import Button from './components/Button';

import { Container, Content, Row } from './styles';
import { useCalculator } from './hooks/useCalculator'


const App = () => {
  const {currentNumber, handleAddNumber, handleClear, handleOperation, handleCalculate} = useCalculator()

  return (
    <Container>
      <Content>
        <Input value={currentNumber}/>
        <Row>
          <Button label="x" onClick={() => handleOperation('x')}/>
          <Button label="/" onClick={() => handleOperation('/')}/>
          <Button label="c" onClick={handleClear}/>
          <Button label="."/>
        </Row>
        <Row>
          <Button label="7" onClick={() => handleAddNumber('7')}/>
          <Button label="8" onClick={() => handleAddNumber('8')}/>
          <Button label="9" onClick={() => handleAddNumber('9')}/>
          <Button label="-" onClick={() => handleOperation('-')} />
        </Row>
        <Row>
          <Button label="4" onClick={() => handleAddNumber('4')}/>
          <Button label="5" onClick={() => handleAddNumber('5')}/>
          <Button label="6" onClick={() => handleAddNumber('6')}/>
          <Button label="+" onClick={() => handleOperation('+')} />
        </Row>
        <Row>
          <Button label="1" onClick={() => handleAddNumber('1')}/>
          <Button label="2" onClick={() => handleAddNumber('2')}/>
          <Button label="3" onClick={() => handleAddNumber('3')}/>
          <Button label="=" onClick={() => handleCalculate('=')} />
        </Row>
      </Content>
    </Container>
  );
}

export default App;
