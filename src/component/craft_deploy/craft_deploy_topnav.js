import React, { Component } from 'react';
import styled from 'styled-components';
import { Apricot, LightAzure } from '../../style/color';
import { PtSans } from '../../style/font';

const Container = styled.div`
  margin: none;
  height: 5em;
  width: 100%;
  padding-bottom: 20px;
`;

const create = () => class TopNav extends Component {
  render() {
    return (
      <Container>
        <div id="craft_deploy_header">
          <span className="dark_orange_text">></span>
          <span className="dark_apricot_text">Craft</span>
          <span className="light_apricot_text">|Deploy</span>
          <span className="light_green_text">_</span>
        </div>
        <div className="spacer" />
      </Container>
    );
  }
};

export default create;
