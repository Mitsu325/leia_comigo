import styled from 'styled-components';

export const FoxImg = styled.img`
  position: absolute;
  top: 180px;
  right: 40px;
`;

export const BookContainer = styled.section`
  padding: 0 40px;
  margin-top: 250px;

  display: flex;
  align-items: center;
`;

export const BookContainerText = styled.div`
  width: 680px;
  margin-left: 30px;

  display: flex;
  flex-direction: column;

  h2 {
    font-size: 32px;
    margin-bottom: 24px;
  }

  p {
    margin-bottom: 8px;

    &:last-of-type {
      margin-top: 24px;
    }
  }

  button {
    width: 400px;

    align-self: center;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      position: absolute;
      right: 16px;
    }
  }
`;

export const DescriptionContainer = styled.section`
  margin: 60px;

  display: grid;
  grid-template-columns: 1fr 2fr 1fr 1fr;
  column-gap: 80px;
`;

export const DescriptionItem = styled.div`
  p {
    margin-top: 8px;

    & + strong {
      display: block;
      margin-top: 32px;
    }
  }
`;
