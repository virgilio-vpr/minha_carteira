import styled from 'styled-components';

export const Grid = styled.div`
  /**
  * Layout
  * MH = Main Header
  * As = Aside
  * CT = Content
  */

  display: grid;
  grid-template-columns: 250px auto;
  transition: grid-template-columns 0.7s ease-in-out;
  grid-template-rows: 70px auto;

  &.retracted {
    grid-template-columns: 70px auto;
  }

  grid-template-areas:
    'AS MH'
    'AS CT';

  height: 100vh;
`;
