import styled from 'styled-components';

export const Title = styled.div`
  margin-top: 180px;
  margin-bottom: 50px;

  display: flex;

  div {
    margin: 30px 0;

    h2 {
      color: #706456;
      font-size: 32px;
      line-height: 37px;
      margin-bottom: 16px;
    }

    h3 {
      color: #bb6bd9;
      font-size: 28px;
      line-height: 33px;
    }
  }
`;

export const BookContainer = styled.section`
  margin: 0 40px;

  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  column-gap: 80px;
`;

export const BookItem = styled.div`
  margin-bottom: 50px;

  strong {
    display: block;
    margin-top: 16px;
  }

  p {
    margin-top: 8px;
  }
`;
