import React from 'react';
import { Section, SectionDivider, SectionTitle, SectionText } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './EducationStyles';

const educationData = [
  {
    institution: "Pune Institute of Computer Technology (PICT)",
    degree: "B.E. in Information Technology",
    duration: "2022 – 2026"
  },
  {
    institution: "Indian Institute of Technology, Madras (IIT Madras)",
    degree: "B.S. in Data Science",
    duration: "2024 – 2028"
  }
];

const Education = () => (
  <Section id="education">
    <SectionDivider divider />
    <SectionTitle>Education</SectionTitle>
    <SectionText>
      Here's a snapshot of my academic background:
    </SectionText>
    <List>
      {educationData.map((edu, index) => (
        <ListItem key={index}>
          <ListContainer>
            <ListTitle>{edu.institution}</ListTitle>
            <ListParagraph>
              {edu.degree} <br />
              {edu.duration}
            </ListParagraph>
          </ListContainer>
        </ListItem>
      ))}
    </List>
  </Section>
);

export default Education;
