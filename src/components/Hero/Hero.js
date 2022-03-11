import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hi <br />
        I'am TUSHAR CHAUHAN
      </SectionTitle>
      <SectionTitle main center>
        Welcome To <br />
        My Personal Portfolio
      </SectionTitle>
      <SectionText>
        I build attractive web application base on MERN Stack Technology
        I'm also familiar with Front End Languages like php and database like SQL and MongoDB.
      </SectionText>
      <Button onClick={props.handleClick}>Learn More</Button>
    </LeftSection>
  </Section>
);

export default Hero;