import React from 'react';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { FaAws } from "react-icons/fa";
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';
import { BsClipboard2Data } from "react-icons/bs";
import { SiTensorflow } from "react-icons/si";
import { TbBinaryTree2 } from "react-icons/tb";

/*
To be added:
Python, Java, C++, C, JavaScript, TypeScript, HTML, CSS, Tailwind CSS, Bootstrap, Material UI, Next.js, Express.js, MongoDB, MySQL, PostgreSQL, Git, GitHub, Figma
Machine Learning, Data Science, Algorithms, Data Structures, Object-Oriented Programming (OOP), RESTful APIs, Agile Methodologies, DevOps, Cloud Computing (AWS, Azure), Docker, Kubernetes
*/
const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider divider />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I've worked with a range a technologies in the web development world and in AI.
    </SectionText>
    <List>
      <ListItem>
        <picture>
          <DiReact size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            Experiece with <br />
            - React.js 
            - Next.js
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiFirebase size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Experience with <br />
            - Node and Databases<br />
            - MongoDB, MySQL, PostgreSQL<br />
            - Prisma ORM<br />
            - Express.js<br />
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <FaAws size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>DevOps</ListTitle>
          <ListParagraph>
            - Vercel <br />
            - AWS <br />
            - Docker <br />
            - Kubernetes <br />
            - Git and GitHub
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <BsClipboard2Data size="2rem" />
        </picture>
        <ListContainer>
          <ListTitle>Data Science</ListTitle>
          <ListParagraph>
            - Python, Pandas, NumPy<br />
            - Data Visualization (Matplotlib, Seaborn)<br />
            - SQL for data analysis<br />
            - Jupyter Notebooks
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <SiTensorflow size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Machine Learning</ListTitle>
          <ListParagraph>
            - Scikit-learn, TensorFlow, PyTorch<br />
            - Regression, Classification, Clustering<br />
            - Model Evaluation & Optimization<br />
            - Neural Networks and Deep Learning    
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <TbBinaryTree2 size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Algorithms & DSA</ListTitle>
          <ListParagraph>
            - Strong foundation in Data Structures<br />
            - Algorithms and Problem Solving<br />
            - Competitive programming background<br />
            - Proficient in C++, Java, Python
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
    <SectionDivider colorAlt />
  </Section>
);

export default Technologies;
