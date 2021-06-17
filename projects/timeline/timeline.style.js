import styled from "styled-components";

export const TimelineContainer = styled.div`
  background-color: #f9f3e4;
  padding: 2rem 2rem 1rem;
  /* display: flex;
  flex-direction: column; */
`;

export const SelectorContainer = styled.div`
  display: flex;
  align-items: center;
  margin: -.5rem 2rem .5em;
  div { margin: 0;}
`;

export const Center = styled.div`
  h3 {
    color: #45486d;
    font-size: 2rem;
    margin: 0;
  }
  h4 {
    color: #2c9faa;
    font-size: 1.5rem;
    margin: .5rem 0 0;
  }
  date {
    color: #6b6b6b;
    font-weight: bold;
    font-style: italic;
  }
  p {
    color: #2b3f55;
    line-height: 1.4;
  }
`;

export const LabelCompanies = styled.h3`
  font-size: 1em;
  font-weight: bold;
  margin: 10px 5px 10px auto;
`;

export const Layout = styled.div`
  position: relative;
  display: grid;
  grid-template-rows: 160px 1fr 80px;
  min-height: 100vh;
  @media (max-width: 728px) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
  }
`;

export const Header = styled.header`
  padding: 1rem;
`;

export const Footer = styled.footer`
  background-color: #354156;
  color: #fcfcf4;
  padding: 2rem;
  text-align: right;
`;

export const FirstSection = styled.section`
  background: #fffbf0 url("/timeline-buildings.svg") repeat-x bottom left;
  background-size: 220px;
  padding: 4rem 0 12rem;
  margin-bottom: 5rem;
  min-height: 35vh;
  text-align: center;
  * {
    margin: 0;
  }
  h1 {
    font-size: 3.2rem;
    line-height: 1;
  }
  p {
    font-size: 1.4rem;
    margin-top: 1rem;
  }
`;

export const GraphicSection = styled.section`
  margin: 0 auto 6rem;
  max-width: 70em;
  h2 {
    font-size: 2.2rem;
    font-weight: normal;
    text-align: center;
  }
  svg {
    margin-right: 2rem;
  }
`;

export const TimelineSection = styled.section`
  margin: 2rem auto 4rem;
  max-width: 70em;
`;

export const LineContainer = styled.div`
  width: 100%;
  height: 90px;
  li {
    background-image: none!important;
  }
`;

export const LineGraphicContainer = styled.div`
  background-color: #f9f3e4;
  padding: 0 2rem;
`;

export const TimelineSubtitle = styled.h2`
    font-size: 2.2rem;
    font-weight: normal;
    text-align: center;
    width: 100%;
`;
export const ConclusionContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit,minmax(350px,1fr));
  gap: 1rem;
  margin: 2rem auto;
  max-width: 60em;
`;

export const Conclusion = styled.div`
  background-color: #f9f3e4;
  padding: 2rem;
  width: 300px;
  p { 
    font-size: 1rem;
    margin-top: 0;
    svg { margin-right: 5px; }
  }
  blockquote {
    font-size: 1.2rem;
    margin: 0;
    span { 
      display: block; 
      font-size: 1rem;
      font-style: italic;
      font-weight: 600; 
      margin-top: 1rem;
      text-align: right;
    }
  }
  a {
    color: #2c9faa;
    display: block;
    font-size: 1rem;
    font-weight: 600;
    text-align: right;
  }
`;

export const PlayBtn = styled.button`
  background-color: #2c9faa;
  border: 0;
  border-radius: 25px;
  color: white;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 600;
  padding: .4rem 1.2rem;
  transition .3s ease all;
  &:hover {
    background-color: #2ba881;
    color: white;
  }
`;
