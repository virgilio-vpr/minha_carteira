import { Grid } from "./styles";

import { useState } from "react";

import MainHeader from "../MainHeader";
import Aside from "../Aside";
import Content from "../Content";

const Layout = () => {
  const [isAsideRetracted, setIsAsideRetracted] = useState(false);

  const toggleAside = () => {
    setIsAsideRetracted(!isAsideRetracted);
  };
  return (
    <Grid className={isAsideRetracted ? "retracted" : ""}>
      <MainHeader
        isAsideRetracted={isAsideRetracted}
        onToggleAside={toggleAside}
      />
      <Aside isAsideRetracted={isAsideRetracted} />
      <Content />
    </Grid>
  );
};

export default Layout;
