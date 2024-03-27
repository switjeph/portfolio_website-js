import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
<Section row nopadding>
<LeftSection>
  <SectionTitle main center>
    Welcome To <br />
    My Personal Portfolio
  </SectionTitle>
  <SectionText>
  As a dedicated front-end developer, I'm committed to crafting engaging and interactive digital experiences that captivate users and elevate brands. With a keen eye for design and a passion for cutting-edge technologies, I offer a range of services tailored to meet your unique project needs.
  </SectionText>
  <Button onClick={() => window.location = 'https//google.com'}>Learn More</Button>
</LeftSection>
</Section>
);

export default Hero;