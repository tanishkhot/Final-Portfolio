import styled from 'styled-components';

export const List = styled.ul`
  list-style-type: none;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 32px;
  margin: 3rem 0;

  @media ${props => props.theme.breakpoints.lg} {
    margin: 64px 0;
  }

  @media ${props => props.theme.breakpoints.md} {
    margin: 64px 0;
    gap: 24px;
  }

  @media ${props => props.theme.breakpoints.sm} {
    display: flex;
    flex-direction: column;
    margin: 32px 0;
  }
`;

export const ListContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media ${props => props.theme.breakpoints.sm} {
    margin-left: 18px;
  }
`;

export const ListTitle = styled.h4`
  font-weight: 700;
  font-size: 24px;
  line-height: 32px;
  color: #FFFFFF;
  margin-bottom: 8px;

  @media ${props => props.theme.breakpoints.md} {
    font-size: 20px;
    line-height: 28px;
  }

  @media ${props => props.theme.breakpoints.sm} {
    font-size: 18px;
    line-height: 24px;
  }
`;

export const ListParagraph = styled.p`
  font-size: 16px;
  line-height: 28px;
  color: rgba(255, 255, 255, 0.75);

  @media ${props => props.theme.breakpoints.md} {
    font-size: 14px;
    line-height: 24px;
  }

  @media ${props => props.theme.breakpoints.sm} {
    font-size: 13px;
    line-height: 22px;
  }
`;

export const ListItem = styled.li`
  max-width: 400px;
  display: flex;
  flex-direction: column;

  @media ${props => props.theme.breakpoints.md} {
    max-width: 300px;
  }

  @media ${props => props.theme.breakpoints.sm} {
    margin-bottom: 14px;
    max-width: 100%;
    flex-direction: row;
  }
`;
