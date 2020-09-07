import React from 'react';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Nav from '../../components/Nav';
import Button from '../../components/Button';

import foxImage from '../../assets/fox_home.png';
import coronaBook from '../../assets/book_corona.png';
import playIcon from '../../assets/icon_play.png';

import {
  FoxImg,
  BookContainer,
  BookContainerText,
  DescriptionContainer,
  DescriptionItem,
} from './styles';

const Home: React.FC = () => {
  return (
    <>
      <Header />
      <Nav />

      <FoxImg src={foxImage} alt="Hora da leitura!" />

      <BookContainer>
        <img src={coronaBook} alt="Sai fora, coronavírus" />

        <BookContainerText>
          <h2>Sai fora, coronavírus</h2>
          <p>
            <strong>Autor(a):</strong> China Children's Press & Publication
            Group
          </p>
          <p>
            <strong>Editora:</strong>Pipa
          </p>
          <p>
            <strong>Edição:</strong> 1ª ed.
          </p>
          <p>
            Sai fora, coronavírus! é um livro ilustrado digital gratuito criado
            para o público infantil com orientações para que as famílias possam
            se proteger e compreender os cuidados que devem ser tomados, para
            evitar o contágio e compreender as angustias emocionais que estão
            vivenciando.
          </p>
          <Button>
            Ler agora
            <img src={playIcon} alt="play" />
          </Button>
        </BookContainerText>
      </BookContainer>

      <DescriptionContainer>
        <DescriptionItem>
          <strong>Tipo de leitor:</strong>
          <p>Autônomo</p>

          <strong>Idioma:</strong>
          <p>Português</p>
        </DescriptionItem>

        <DescriptionItem>
          <strong>Categoria:</strong>
          <p>Ciências da natureza - Ciências da saúde</p>
          <p>Saúde e bem-estar - Família e relacionamentos</p>
        </DescriptionItem>

        <DescriptionItem>
          <strong>Temática:</strong>
          <p>Saúde</p>
          <p>Higiene e saúde</p>
          <p>Doença</p>
          <p>Família</p>
          <p>Infância</p>
        </DescriptionItem>

        <DescriptionItem>
          <strong>Características:</strong>
          <p>Didático</p>
          <p>Técnico</p>
        </DescriptionItem>
      </DescriptionContainer>

      <Footer />
    </>
  );
};

export default Home;
