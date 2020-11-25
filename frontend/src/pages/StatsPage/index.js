import React from 'react';
import { Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Header from '../../components/Header';
import ShortenerService from '../../services/shortenerService';
import { StatsContainer, StatsRow, StatsBox, StatsBoxTitle } from './styles';
import { parseISO, formatRelative } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

class StatsPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: false,
      shortenedURL: {},
      errorMessage: ''
    }
  }

  /**
   * É invocado imediatamente após um componente ser montado.
   * https://pt-br.reactjs.org/docs/react-component.html
   */
  async componentDidMount() {
    const code = this.props.match.params.code;

    try {
      const service = new ShortenerService();
      const shortenedURL = await service.getStats(code);

      const parsedDate = parseISO(shortenedURL.updatedAt); // Data que vem da API
      const currentDate = new Date(); // Data atual
      const relativeDate = formatRelative(parsedDate, currentDate, {
        locale: ptBR
      });

      shortenedURL.relativeDate = relativeDate;

      this.setState({ isLoading: false, shortenedURL });
    } catch (error) {
      this.setState({ isLoading: false, errorMessage: 'Ops, a URL solicitada não existe!' });
    }
  }

  render() {
    const { shortenedURL, errorMessage } = this.state;

    return (
      <Container>
        <Header>Estatísticas</Header>
        {errorMessage ? (
          <StatsContainer className="text-center">
            <FontAwesomeIcon size="3x" color="#f8d7da" icon="exclamation-triangle" />
            <p className="m-3">{errorMessage}</p>
            <a className="btn btn-primary" href="/">Encurtar nova URL</a>
          </StatsContainer>
        ) : (
            <StatsContainer className="text-center">
              <p><b>https://pitu.tk/{shortenedURL.code}</b></p>
              <p>
                Redireciona para:
              <br />
                {shortenedURL.url}
              </p>
              <StatsRow>
                <StatsBox>
                  <b>{shortenedURL.hits}</b>
                  <StatsBoxTitle>Visitas</StatsBoxTitle>
                </StatsBox>
                <StatsBox>
                  <b>{shortenedURL.relativeDate}</b>
                  <StatsBoxTitle>Última visita</StatsBoxTitle>
                </StatsBox>
              </StatsRow>
              <a className="btn btn-primary" href="/">Encurtar nova URL</a>
            </StatsContainer>
          )}
      </Container>
    )
  }
}

export default StatsPage;