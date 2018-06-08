import React, { Component } from "react";
import ReactDOM from "react-dom";
import Vivus from "vivus";
import styled from "styled-components";
import Project from "./Project";
const face = require("./images/face.svg");
const beet = require("./images/beet.svg");
const submarine = require("./images/submarine.svg");

class App extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    new Vivus("face", { duration: 4000, file: face });
    new Vivus("beet", { duration: 4000, file: beet });
    new Vivus("sub", { duration: 4000, file: submarine });
  }

  render() {
    return (
      <div style={{ backgroundColor: "white" }}>
        <Section>
          <div style={{ width: "60%", padding: "3%" }}>
            <div
              style={{
                position: "absolute",
                width: "15%",
                height: "auto",
                bottom: 0,
                right: "25%"
              }}
              id="face"
            />
            <Header>Ryan</Header>
            <img
              style={{ width: "80%", height: "auto", margin: "2% 3%" }}
              src={require("./images/simpson.svg")}
            />
            <Paragraph>socal-based designer &<br />developer</Paragraph>
          </div>
          <div style={{ width: "20%" }}>
            <Headshot
              src={
                "https://www.dropbox.com/s/gsw2syxanxabph8/headshot.JPG?raw=1"
              }
            />
          </div>
        </Section>
        <Column>
          <MeIcon src={require("./images/person.svg")} />
          <img
            style={{ width: "15%", height: "auto" }}
            src={require("./images/aboutme.svg")}
          />
          <Paragraph
            style={{ width: "40%", fontSize: "20px", textAlign: "center" }}
          >
            Hello! I’m Ryan, a 17 year-old
            designer and developer centered in
            Southern California.
            <br /><br />
            My life revolves around my creative
            pursuits and ambitions. I’m currently working
            on creating an international group of young developers
            to build awesome tech.
          </Paragraph>
          <div
            style={{
              position: "absolute",
              width: "20%",
              height: "auto",
              left: "10%"
            }}
            id="beet"
          />
          <div
            style={{
              position: "absolute",
              width: "20%",
              height: "auto",
              right: "5%",
              bottom: "-60%"
            }}
            id="sub"
          />
        </Column>
        <End>
          <div
            style={{
              width: "60%",
              display: "flex",
              justifyContent: "center",
              padding: "5%",
              flexDirection: "column",
              alignItems: "center"
            }}
          >
            <img
              style={{ width: "25%", height: "auto" }}
              src={require("./images/myskills.svg")}
            />
            <Paragraph
              style={{
                fontSize: "14px",
                textAlign: "center",
                color: "white",
                marginBottom: 0
              }}
            >
              CODE
            </Paragraph>
            <Paragraph
              style={{
                width: "60%",
                fontSize: "20px",
                textAlign: "center",
                color: "white"
              }}
            >
              I have extensive experience working with React and Firebase.
              Additionally, I have some experience programming in Swift/XCode,
              Python, and Node/Express.{" "}
            </Paragraph>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center"
              }}
            >
              <img
                style={{ width: 30, height: 30, margin: 5 }}
                src={require("./images/reactlogo.png")}
              />
              <img
                style={{ width: 30, height: "auto", margin: 5 }}
                src={require("./images/firebase logo.png")}
              />
              <img
                style={{ width: 30, height: "auto", margin: 5, opacity: 0.5 }}
                src={require("./images/swiftlogo.png")}
              />
              <img
                style={{ width: 30, height: "auto", margin: 5, opacity: 0.5 }}
                src={require("./images/pythonlogo.png")}
              />
              <img
                style={{ width: 30, height: "auto", margin: 5, opacity: 0.5 }}
                src={require("./images/nodelogo.png")}
              />
            </div>
            <Paragraph
              style={{
                fontSize: "14px",
                textAlign: "center",
                color: "white",
                marginBottom: 0
              }}
            >
              DESIGN
            </Paragraph>
            <Paragraph
              style={{
                width: "60%",
                fontSize: "20px",
                textAlign: "center",
                color: "white"
              }}
            >
              Graphic and UI/UX design are my real fortes. I know Sketch and
              Adobe Illustrator inside and out and love prototyping.
            </Paragraph>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center"
              }}
            >
              <img
                style={{ width: 30, height: 30, margin: 5 }}
                src={require("./images/sketchlogo.svg")}
              />
              <img
                style={{ width: 30, height: "auto", margin: 5 }}
                src={require("./images/illustratorlogo.png")}
              />
            </div>
          </div>
          <img
            style={{ height: "auto", width: "40%", alignSelf: "flex-end" }}
            src={"https://www.dropbox.com/s/8w3k9p4gz582k9d/walking.jpg?raw=1"}
          />
        </End>
        <Column>
          <img
            style={{ width: "15%", height: "auto" }}
            src={require("./images/projects.svg")}
          />
          <div
            style={{
              display: "flex",
              flexWrap: "row wrap",
              justifyContent: "center",
              paddingTop: 20
            }}
          >
            <Project
              props={{
                name: "Bonfire",
                description:
                  "Web and mobile application to integrate the student club experience by providing communication tools and exposure to organizations across campus. Designed all materials associated with the project and coded complete web app using ReactJS.",
                url: "https://bonfireapp.squarespace.com/#home"
              }}
            />
            <Project
              props={{
                name: "Walt Grace Library",
                description:
                  "Mobile application to assist a lirary as part of the 2018 FBLA Mobile App Competition. Placed 4th in state and currently competing in Nationals. Built with React Native.",
                url: "https://github.com/rsimpsonn/lib"
              }}
            />
            <Project
              props={{
                name: "Team Spring",
                description:
                  "Team of international high school-age developers building technology of tomorrow. Built website with ReactJS and recruited team using Instagram ads.",
                url: "https://www.teamspring.io"
              }}
            />
          </div>
        </Column>
        <Column>
          <img
            style={{ width: "15%", height: "auto" }}
            src={require("./images/getintouch.svg")}
          />
          <Paragraph
            style={{ width: "40%", fontSize: "20px", textAlign: "center" }}
          >
            Coffee&#39;s on me.
          </Paragraph>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center"
            }}
          >
            <a href={"mailto:" + "rsimpson6531@gmail.com"}>
              <img
                style={{ width: 60, height: 60, margin: 15 }}
                src={require("./images/emailicon.png")}
              />
            </a>
            <a href={"https://www.instagram.com/ryansimpson3/?hl=en"}>
              <img
                style={{ width: 60, height: 60, margin: 15 }}
                src={require("./images/instagramicon.png")}
              />
            </a>
          </div>
        </Column>
      </div>
    );
  }
}

const Header = styled.p`
  font-family: Avenir-Black;
  font-size: 100px;
  color: black;
  margin: 2% 3%;
`;

const End = styled.div`
  display: flex;
  margin: 0;
  margin-top: 5%;
  background-color: black;
`;

const MeIcon = styled.img`
  width: 10%;
  height: auto;
  margin-top: 5%;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0;
  margin-top: 20px;
  padding: 5%;
  justify-content: center;
  align-items: center;
`;

const Headshot = styled.img`
  border-radius: 50%;
  height: auto;
  width: 100%;
`;

const Paragraph = styled.p`
  font-family: Avenir-Book;
  font-size: 30px;
  color: black;
  margin: 3%;
`;

const Section = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0;
  padding-top: 5%;
  align-items: center;
`;

export default App;
