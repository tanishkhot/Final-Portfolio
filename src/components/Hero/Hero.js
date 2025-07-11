import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Hello! <br />
          I am Tanish Khot.
        </SectionTitle>
        <SectionText>
          I am a Full Stack Developer learning AI and part time wannabe Endurance Athlete. I am passionate about building innovative solutions that make a difference.
        </SectionText>
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
  View My Resume
</a>
      <br />
      {/* <button
        style={{
          margin: '16px 0',
          padding: '10px 24px',
          background: '#0070f3',
          color: '#fff',
          border: 'none',
          borderRadius: '6px',
          cursor: 'pointer',
          fontSize: '1rem'
        }}
        onClick={() => window.open('/resume.pdf', '_blank', 'noopener')}
      >
        Download Resume
      </button> */}
        {/* <Button onClick={props.handleClick}>Learn More</Button> */}
      </LeftSection>
    </Section>
  </>
);

export default Hero;