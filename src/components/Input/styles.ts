import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  color: #b7db61;
  background: #fff;
  border-radius: 16px;
  border: 2px solid #b7db61;
  padding: 8px 16px;

  display: flex;
  align-items: center;

  & + div {
    margin-top: 16px;
  }

  input {
    flex: 1;
    color: #007ba4;
    background: transparent;
    border: 0;

    &::placeholder {
      color: #b7db61;
    }
  }

  /* Icon */
  svg {
    margin-right: 16px;
  }
`;
