import { useMemo } from 'react';

import { MdKeyboardDoubleArrowLeft } from 'react-icons/md';

import Toggle from '../Toggle';

import emojis from '../../utils/emojis';

import { Container, Profile, Welcome, UserName, HeaderButton } from './styles';

const MainHeader: React.FC<{
  isAsideRetracted: boolean;
  onToggleAside: () => void;
}> = ({ isAsideRetracted, onToggleAside }) => {
  const emoji = useMemo(() => {
    const indice = Math.floor(Math.random() * emojis.length);
    return emojis[indice];
  }, []);

  return (
    <Container>
      <HeaderButton
        className={isAsideRetracted ? 'retracted' : ''}
        onClick={onToggleAside}
      >
        <MdKeyboardDoubleArrowLeft className={'icon'} />
      </HeaderButton>

      <Toggle />

      <Profile>
        <Welcome>Olá, {emoji}</Welcome>
        <UserName>Virgilio Rosa</UserName>
      </Profile>
    </Container>
  );
};

export default MainHeader;
