import React from 'react';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Nav from '../../components/Nav';

import foxImage from '../../assets/fox_plan.png';
import coronaBook from '../../assets/book_corona2.png';
import cabeloBook from '../../assets/book_cabelo.png';
import fosforoBook from '../../assets/book_fosforo.png';
import meninaBook from '../../assets/book_menina.png';
import ratoBook from '../../assets/book_rato.png';
import playImage from '../../assets/play.png';
// import checkIcon from '../../assets/icon_check.svg';
import checkNoneIcon from '../../assets/icon_check_none.svg';

import { BookContainer, BookItem } from './styles';

interface Book {
  id: number;
  img: string;
  title: string;
  author: string;
}

const ReadingPlan: React.FC = () => {
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
      img: ratoBook,
      title: 'O rabo do rato',
      author: 'Balbina Oliveira',
    },
    {
      id: 4,
      img: meninaBook,
      title: 'As duas bonecas az...',
      author: 'Janine Rodrigues',
    },
    {
      id: 5,
      img: fosforoBook,
      title: 'A pequena vendedo...',
      author: 'Vanessa Alexandre',
    },
  ];

  return (
    <>
      <Header />
      <Nav />

      <BookContainer>
        <img src={foxImage} alt="Qual a leitura para hoje?" />

        {Books.map((book: Book) => {
          return (
            <BookItem key={book.id}>
              <div>
                <img src={book.img} alt={book.title} />
                <strong>{book.title}</strong>
                <p>{book.author}</p>
              </div>
              <div>
                <div>
                  <h3>Segunda-feira</h3>
                  <img src={checkNoneIcon} alt="Não lido" />
                </div>
                <img src={playImage} alt="Ler agora" />
              </div>
            </BookItem>
          );
        })}
      </BookContainer>

      <Footer />
    </>
  );
};

export default ReadingPlan;
