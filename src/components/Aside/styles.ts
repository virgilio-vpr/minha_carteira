import styled from 'styled-components';

export const Container = styled.div`
  grid-area: AS;
  background-color: ${(props) => props.theme.colors.secondary};

  border-right: 1px solid ${(props) => props.theme.colors.gray};
  /* z-index: -1; */
`;

export const HeaderAside = styled.header`
  height: 70px;
  display: flex;
  width: 100%;
  align-items: center;
  position: fixed;
`;

export const LogImg = styled.img`
  margin-left: 15px;
  margin-right: 15px;
  height: 40px;
  width: 40px;
`;

export const Title = styled.h3`
  color: ${(props) => props.theme.colors.white};
  opacity: 1;
  transition: opacity 0.7s ease-in-out;

  &.retracted {
    opacity: 0;
    transition: opacity 0.5s ease-in-out;
  }
`;

export const MenuList = styled.ul`
  list-style-type: none;
  margin-top: 100px;
  display: flex;
  flex-direction: column;
`;

export const LinkList = styled.li`
  margin: 10px 0;
  display: flex;
  align-items: center;
  position: inline;
  text-decoration: none;
  color: ${(props) => props.theme.colors.info};
`;

export const Link = styled.a`
  display: flex;
  align-items: center;
  text-decoration: none;
  cursor: pointer;
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.5;
  }

  .iconLink {
    margin-left: 14px;
    margin-right: 14px;
    /* width: 40px;
    height: 40px; */
    font-size: 2.5em;
  }

  .textLink {
    font-size: 1.2em;
    opacity: 1;
    transition: opacity 0.7s ease-in-out;
  }
  &.retracted .textLink {
    opacity: 0;
    transition: opacity 0.5s ease-in-out;
  }
`;
