import styled from 'styled-components';

export const Container = styled.div`
  grid-area: MH;
  color: ${(props) => props.theme.colors.white};
  background-color: ${(props) => props.theme.colors.secondary};
  z-index: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
  border-bottom: 1px solid ${(props) => props.theme.colors.gray};
`;

export const Profile = styled.div``;

export const Welcome = styled.div``;

export const UserName = styled.div``;

export const HeaderButton = styled.a`
  background-color: transparent;
  border: 2px solid ${(props) => props.theme.colors.info};
  border-radius: 50%;
  color: ${(props) => props.theme.colors.info};
  cursor: pointer;
  height: 30px;
  width: 30px;
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.2);
  transition: 0.2s ease-in-out;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }

  &.retracted {
    transform: rotate(180deg);
    transition: 0.2s ease-in-out;
    border: 2px solid ${(props) => props.theme.colors.warning};
    color: ${(props) => props.theme.colors.warning};
  }

  .icon {
    font-size: 26px;
  }
`;
