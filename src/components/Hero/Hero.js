import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
        PARTH POSHIYA <br />
          Full Stack  Developer
        </SectionTitle>
        <SectionText>
       Hello World! , I am Parth a last Year UnderGrad at G.k & C.K Bosamiya collage from India , I love creating stuff for web, AI and Mixed Reality enthusiast
        </SectionText>
        <Button onClick={props.handleClick}>Learn More</Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;