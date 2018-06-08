import React, { Component } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Project = props => {
  console.log(props.name);
  return (
    <Box>
      <Paragraph>
        <a style={{ textDecoration: "none" }} href={props.props.url}>
          <Paragraph style={{ fontFamily: "Avenir-Medium" }}>
            {props.props.name}
          </Paragraph>
        </a>
        {props.props.description}
      </Paragraph>
    </Box>
  );
};

Project.propTypes = {
  props: PropTypes.object.isRequired
};

export default Project;

const Box = styled.div`
  background-color: black;
  padding: 2%;
  width: 30%;
  min-height: 20%;
  margin: 1%;
`;

const Paragraph = styled.p`
  font-size: 16px;
  font-family: Avenir-Book;
  color: white;
`;
