import React from 'react';
import { Container, InputGroup, FormControl, Button, Alert, Spinner } from 'react-bootstrap';
import Header from '../../components/Header';
import { ContentContainer, Form, AdSenseBlock } from './styles';
import ShortenerSevice from '../../services/shortenerService';
import vars from '../../configs/vars';

class HomePage extends React.Component {
  constructor(props) {
    super(props);

    // Preserva a informação do componente
    this.state = {
      isLoading: false,
      url: '',
      shortenerURL: '',
      errorMessage: ''
    }
  }

  handleSubmit = async (event) => {
    // Cancelando o evento para evitar o post da página
    event.preventDefault();

    const { url } = this.state; // Obtém apenas a URL do state

    this.setState({ isLoading: true, errorMessage: '' });

    if (!url) {
      this.setState({ isLoading: false, errorMessage: 'Informe uma URL para encurtar!' });
    } else {
      try {
        const service = new ShortenerSevice();
        const result = await service.generate({ url });

        this.setState({ isLoading: false, shortenerURL: result.code });
      } catch (error) {
        this.setState({ isLoading: false, errorMessage: 'Ops! Ocorreu um erro, tente novamente.' });
      }
    }
  }

  copyToClipboard = () => {
    const element = this.inputURL; // Obter o elemento
    element.select(); // Seleciona todo o conteúdo do input (elemento)
    document.execCommand('copy'); // Copia o conteúdo
  }

  render() {
    const { isLoading, shortenerURL, errorMessage } = this.state;

    return (
      <Container>
        <Header>Encurtador de URL</Header>
        <ContentContainer>
          <Form onSubmit={this.handleSubmit}>
            <InputGroup className="mb-3">
              <FormControl
                placeholder="Digite a URL para encurtar"
                defaultValue=""
                onChange={e => this.setState({ url: e.target.value })}
              />
              <InputGroup.Append>
                <Button variant="primary" type="submit">Encurtar</Button>
              </InputGroup.Append>
            </InputGroup>

            {isLoading ? (
              <Spinner animation="border" />
            ) : (
                // Se o "shortenerURL" for diferente de vazio
                shortenerURL && (
                  <>
                    <InputGroup className="mb-3">
                      <FormControl
                        autoFocus={true}
                        defaultValue={vars.HOST_APP + shortenerURL}
                        ref={(input) => this.inputURL = input}
                      />
                      <InputGroup.Append>
                        <Button variant="outline-secondary" onClick={() => this.copyToClipboard()}>Copiar</Button>
                      </InputGroup.Append>
                    </InputGroup>
                    <p>Para acompanhar as estatísticas, acesse {vars.HOST_APP + shortenerURL}/stats</p>
                  </>
                )
              )}

            {errorMessage && <Alert variant="danger">{errorMessage}</Alert>}
          </Form>
        </ContentContainer>
        <ContentContainer>
          <AdSenseBlock>AdSense</AdSenseBlock>
        </ContentContainer>
      </Container>
    )
  }
}

export default HomePage;