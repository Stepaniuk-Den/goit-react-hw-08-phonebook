import styled from 'styled-components';

export const StyledUserMenu = styled.div`
  display: flex;
  flex-direction: row;

  & p {
    /* margin-left: 50%; */
    padding: 5px 10px;
    min-height: 36px;
  }

  & button {
    margin-left: 10px;
    padding: 5px 10px;
    min-height: 36px;
    border: 1px solid transparent;
    border-radius: 4px;
    transition: all 0.3s ease-in-out;
    scale: 1;
    background-color: #ffffff;
    color: rgb(46, 116, 203);

    &:hover {
      background-color: rgb(46, 116, 203);
      color: #ffffff;
      scale: 1.1;
      box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.2),
        0px 1px 5px 0px rgba(0, 0, 0, 0.14),
        0px 2px 5px -1px rgba(0, 0, 0, 0.12);
    }
    &:active {
      scale: 0.9;
    }
  }
`;
