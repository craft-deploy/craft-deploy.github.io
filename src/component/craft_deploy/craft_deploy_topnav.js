import React, { Component } from 'react';
import styled from 'styled-components';
import { Apricot, LightAzure } from '../../style/color';
import { PtSans } from '../../style/font';

const Container = styled.div`
  margin: none;
  height: 5em;
  background-color: #FFF;
  width: 100%;
  padding-bottom: 20px;
  border-bottom: 1px solid black;
`;

const create = () => class TopNav extends Component {
  render() {
    return (
      <Container>
        <div id="header">>Craft|Deploy_</div>
      </Container>
    );
  }
};

export default create;
