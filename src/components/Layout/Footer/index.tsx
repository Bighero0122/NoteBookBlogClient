import React from "react";

import { PATH } from "consts";
import { AppFooter, Container, FooterAuthor, FooterLine } from "./styles";

export const FooterSection: React.FC = () => {
  return (
    <Container>
      <AppFooter></AppFooter>
      <FooterLine />
      <FooterAuthor>
        Designed By Themefisher & Developed By Gethugothemes
      </FooterAuthor>
    </Container>
  );
};
