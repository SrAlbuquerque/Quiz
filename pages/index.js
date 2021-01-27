import styled from 'styled-components';
import db from '../db.json';
import Widget from '../src/components/Widget/index';
import QuizBackground from '../src/components/QuizBackground/index';
import Footer from '../src/components/Footer/index';
import GitHubCorner from '../src/components/GitHubCorner/index';


export const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding-top: 45px;
  margin: auto 10%;
  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 15px;
  }
`;


export default function Home() {
  return (
    <QuizBackground backgroundImage = {db.bg} >
      <QuizContainer>
        <Widget>
          <Widget.Header>
            <h1>Bloodborne</h1>
          </Widget.Header>
          <Widget.Content>
            <p>Alguma coisa escrita aqui</p>
          </Widget.Content>
        </Widget>

        <Widget>
          <Widget.Content>
            <h1>Quiz da galera</h1>

            <p>Alguma coisa escrita aqui</p>
          </Widget.Content>
        </Widget>
        <Footer />
      </QuizContainer>
      <GitHubCorner projectUrl= "https://github.com/SrAlbuquerque" />
    </QuizBackground>
  );
}
