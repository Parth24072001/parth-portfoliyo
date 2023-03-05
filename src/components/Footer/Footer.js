import React from 'react';
import { AiFillGithub, AiFillLinkedin, AiFillTwitterCircle,AiFillRedditCircle  } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Call</LinkTitle>
          <LinkItem href="tel:314-343-3432">##-##-##-##-x1</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="mailto:poshiyaparth2022@gmail.com">
          poshiyaparth2022@gmail.com
          </LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Dive into Code of Chaos</Slogan>
        </CompanyContainer>
        <SocialContainer>
        <SocialIcons target="_blank" href="https://github.com/Parth24072001">
            <AiFillGithub size="3rem" />
          </SocialIcons>
          <SocialIcons target="_blank" href="https://www.linkedin.com/in/poshiyaparth2407/">
            <AiFillLinkedin size="3rem" />
          </SocialIcons>
          <SocialIcons target="_blank" href="https://twitter.com/poshiyaparth24">
            <AiFillTwitterCircle size="3rem" />
          </SocialIcons>
          <SocialIcons target="_blank" href="/">
            <AiFillRedditCircle size="3rem" />
          </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
