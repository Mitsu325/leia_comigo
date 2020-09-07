import React from 'react';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Nav from '../../components/Nav';

import foxImage from '../../assets/fox_library.png';
import coronaBook from '../../assets/book_corona2.png';
import adivinhaBook from '../../assets/book_adivinha.png';
import atumBook from '../../assets/book_atum.png';
import cabeloBook from '../../assets/book_cabelo.png';
import cavaloBook from '../../assets/book_cavalo.png';
import ceuBook from '../../assets/book_ceu.png';
import chaBook from '../../assets/book_cha.png';
import fabricaBook from '../../assets/book_fabrica.png';
import fosforoBook from '../../assets/book_fosforo.png';
import histoBook from '../../assets/book_histo.png';
import meninaBook from '../../assets/book_menina.png';
import meninoBook from '../../assets/book_menino.png';
import monstroBook from '../../assets/book_monstro.png';
import pandoraBook from '../../assets/book_pandora.png';
import ratoBook from '../../assets/book_rato.png';
import vovoBook from '../../assets/book_vovo.png';

import { Title, BookContainer, BookItem } from './styles';

interface Book {
  id: number;
  img: string;
  title: string;
  author: string;
}

const Library: React.FC = () => {
  const Books = [
    {
      id: 1,
      img: cabeloBook,
      title: 'Cabelo bom é o que?',
      author: 'Rodrigo Goecks',
    },
    {
      id: 2,
      img: coronaBook,
      title: 'Sai fora, coronavírus!',
      author: "China Children's Press",
    },
    {
      id: 3,
      img: adivinhaBook,
      title: 'Adivinha onde estou?',
      author: 'Sonia Junqueira',
    },
    {
      id: 4,
      img: chaBook,
      title: 'Chá de sumiço e ou...',
      author: 'André Ricardo Aguiar',
    },
    {
      id: 5,
      img: cavaloBook,
      title: 'Um cavalo para Edu...',
      author: 'Antonio Carlos Flori...',
    },
    {
      id: 6,
      img: meninaBook,
      title: 'As duas bonecas az...',
      author: 'Janine Rodrigues',
    },
    {
      id: 7,
      img: vovoBook,
      title: 'Vovó Viaja e não sai...',
      author: 'Sylvia Orthof',
    },
    {
      id: 8,
      img: monstroBook,
      title: 'O monstro do sono',
      author: 'Maria Vago',
    },
    {
      id: 9,
      img: pandoraBook,
      title: "Pandora's box",
      author: 'Eliana Sá',
    },
    {
      id: 10,
      img: meninoBook,
      title: 'O menino e o peixinho',
      author: 'Sonia Junqueira',
    },
    {
      id: 11,
      img: ratoBook,
      title: 'O rabo do rato',
      author: 'Balbina Oliveira',
    },
    {
      id: 12,
      img: histoBook,
      title: 'As mil e uma históri...',
      author: 'Marcelo Maluf',
    },
    {
      id: 13,
      img: ceuBook,
      title: 'Nuvem no céu, nuve...',
      author: 'Fabiola Braga',
    },
    {
      id: 14,
      img: fosforoBook,
      title: 'A pequena vendedo...',
      author: 'Vanessa Alexandre',
    },
    {
      id: 15,
      img: atumBook,
      title: 'Atum, o Gato Grato...',
      author: 'Thais Laham Morello',
    },
    {
      id: 16,
      img: fabricaBook,
      title: 'A grande fábrica de ...',
      author: 'Agnès de Lestrade',
    },
  ];

  return (
    <>
      <Header />
      <Nav />

      <Title>
        <img src={foxImage} alt="Hora da leitura!" />
        <div>
          <h2>Que tal gravar um áudio book agora?</h2>
          <h3>Escolha o livro, selecione e clique em gravar...</h3>
        </div>
      </Title>

      <BookContainer>
        {Books.map((book: Book) => {
          return (
            <BookItem key={book.id}>
              <img src={book.img} alt={book.title} />
              <strong>{book.title}</strong>
              <p>{book.author}</p>
            </BookItem>
          );
        })}
      </BookContainer>

      <Footer />
    </>
  );
};

export default Library;
