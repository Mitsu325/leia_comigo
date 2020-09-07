import styled from 'styled-components';

export const BookContainer = styled.section`
  margin: 180px 40px 0;

  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 60px;
`;

export const BookItem = styled.div`
  margin-bottom: 50px;

  display: flex;

  strong {
    display: block;
    margin-top: 16px;
  }

  p {
    margin-top: 8px;
  }

  div + div {
    margin-left: 60px;

    div {
      margin-bottom: 28px;
      display: flex;
      justify-content: center;

      img {
        margin-left: 8px;
      }
    }
  }
`;
