import logo from "./logo.svg";
import "./App.css";
import styled from "styled-components";

const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 21px;
  gap: 25px;
`;
const Nav = styled.div`
  display: flex;
  width: 100vw;
  flex-direction: row;
  background-color: #0a4ea3;
  color: #fff;
  align-items: center;
  justify-content: space-between;
  padding: 0 100px;

  @media only screen and (max-width: 800px) {
    flex-direction: column;
  }
`;
const Logo = styled.h3`
  @media only screen and (max-width: 800px) {
    font-size: 15px;
  }
`;
const NavItems = styled.div`
  display: flex;
  color: #c6d3e0;
  flex-direction: row;
  gap: 35px;

  @media only screen and (max-width: 800px) {
    font-size: 15px;
  }
`;
const NavItem = styled.div``;
const Heading = styled.h2`
  font-weight: 400;

  @media only screen and (max-width: 800px) {
    text-align: center;
  }
`;
const Hero = styled.div`
  display: flex;
  gap: 5px;
  flex-direction: row;
  gap: 50px;
  align-items: center;
  padding: 0 25px;

  @media only screen and (max-width: 800px) {
    flex-direction: column;
  }
`;
const HeroText = styled.h1`
  font-size: 45px;

  @media only screen and (max-width: 800px) {
    text-align: center;
  }
`;
const HeroImage = styled.img`
  height: 300px;
  object-fit: cover;
  width: 400px;
  border-radius: 15px;

  @media only screen and (max-width: 800px) {
    width: 90vw;
    height: auto;
  }
`;

const Cards = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 50px;

  @media only screen and (max-width: 800px) {
    flex-direction: column;
  }
`;
const Card = styled.div`
  padding: 50px 15px;
  box-shadow: 2px 1px 10px 2px rgb(0 0 0 / 20%);
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  gap: 10px;
`;
const CardHeading = styled.h3`
  margin: 0;
  padding: 0;
`;
const CardText = styled.div``;
const Padding = styled.div`
  padding: 0 100px;
  display: flex;
  gap: 50px;
  flex-direction: column;
  padding-bottom: 100px;
  align-items: center;
`;
function App() {
  return (
    <Main>
      <Nav>
        <Logo>Coding Masters</Logo>
        <NavItems>
          <NavItem>Home</NavItem>
          <NavItem>Blog</NavItem>
          <NavItem>Courses</NavItem>
          <NavItem>Contact Us</NavItem>
          <NavItem>Login / Signup</NavItem>
        </NavItems>
      </Nav>

      <Padding>
        <Heading>
          Education is the key to unlock the golder door of freedom
        </Heading>

        <Hero>
          <HeroText>Leet code practise interview preparation</HeroText>
          <HeroImage src="1.png" />
        </Hero>

        <Cards>
          <Card>
            <CardHeading>Javascript</CardHeading>
            <CardText>
              Learn Javascript. The worlds most popular language
            </CardText>
          </Card>

          <Card>
            <CardHeading>React</CardHeading>
            <CardText>Learn React. The worlds most Javascript library</CardText>
          </Card>
        </Cards>
      </Padding>
    </Main>
  );
}

export default App;
