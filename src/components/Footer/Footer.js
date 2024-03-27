import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
  <FooterWrapper>
    <LinkList>
    <LinkColumn>
    <LinkTitle>Call</LinkTitle>
    <LinkItem href="tel:+234-706-542-0325">+234-706-542-0325</LinkItem>
    </LinkColumn>
    <LinkColumn>
    <LinkTitle>Email</LinkTitle>
    <LinkItem href="mailto:sweetjeph@gmail.com">sweetjeph@gmail.com</LinkItem>
    </LinkColumn>
    </LinkList>
    <SocialIconsContainer>
      <CompanyContainer>
        <Slogan>Build Your Digital Dreams, One Click at a Time.</Slogan>
      </CompanyContainer>
     <SocialContainer>
     <SocialIcons href="http://github.com">
      <AiFillGithub size="3rem" />
    </SocialIcons>
    <SocialIcons href="http://linkedin.com">
      <AiFillLinkedin size="3rem" />
    </SocialIcons>
    <SocialIcons href="http://instagram.com">
      <AiFillInstagram size="3rem" />
    </SocialIcons>
     </SocialContainer>
    </SocialIconsContainer>
  </FooterWrapper>
  );
};

export default Footer;
