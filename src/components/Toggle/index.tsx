import { useState } from 'react';
import { Container, ToogleLabel, ToogleSelector } from './styles';

const Toggle: React.FC = () => {
  const [toggleChange, setToggleChange] = useState<boolean>(true);

  return (
    <Container>
      <ToogleLabel>Light</ToogleLabel>
      <ToogleSelector
        checked={toggleChange}
        onChange={() => setToggleChange(!toggleChange)}
        uncheckedIcon={false}
        checkedIcon={false}
        height={20}
        width={51}
        handleDiameter={18}
      />
      <ToogleLabel>Dark</ToogleLabel>
    </Container>
  );
};

export default Toggle;
