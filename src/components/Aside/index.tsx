import logoImg from '../../assets/logo.svg';
import {
  MdDashboard,
  MdArrowDownward,
  MdArrowUpward,
  MdExitToApp,
} from 'react-icons/md';

import {
  Container,
  HeaderAside,
  LogImg,
  Title,
  MenuList,
  LinkList,
  Link,
} from './styles';

const Aside: React.FC<{
  isAsideRetracted: boolean;
}> = ({ isAsideRetracted }) => {
  return (
    <Container className={isAsideRetracted ? 'retracted' : ''}>
      <HeaderAside>
        <LogImg src={logoImg} alt="Logo Minha Carteira" />
        <Title className={isAsideRetracted ? 'retracted' : ''}>
          Minha Carteira
        </Title>
      </HeaderAside>

      <MenuList>
        <LinkList>
          <Link className={isAsideRetracted ? 'retracted' : ''}>
            <MdDashboard className={'iconLink'} />
            <p className={'textLink'}>Dashboard</p>
          </Link>
        </LinkList>

        <LinkList>
          <Link className={isAsideRetracted ? 'retracted' : ''}>
            <MdArrowUpward className={'iconLink'} />
            <p className={'textLink'}>Entradas</p>
          </Link>
        </LinkList>

        <LinkList>
          <Link className={isAsideRetracted ? 'retracted' : ''}>
            <MdArrowDownward className={'iconLink'} />
            <p className={'textLink'}>Saídas</p>
          </Link>
        </LinkList>

        <LinkList>
          <Link className={isAsideRetracted ? 'retracted' : ''}>
            <MdExitToApp className={'iconLink'} />
            <p className={'textLink'}>Sair</p>
          </Link>
        </LinkList>
      </MenuList>
    </Container>
  );
};

export default Aside;

//Colocar dentro de um row e deixar afastado um do outro, quando o aside for retraido fazer o delocamento e opacidade.
