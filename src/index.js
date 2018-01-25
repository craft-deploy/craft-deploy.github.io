import React             from 'react';
import ReactDOM          from 'react-dom';
import styled from 'styled-components';

import createTopNav      from './component/craft_deploy/craft_deploy_topnav';
import createMainLayout  from './component/craft_deploy/craft_deploy_main';

const Content = styled.div`
  margin: none;
  height: 5em;
  width: 100%;
  padding-bottom: 20px;
  `;

((global) => {
  const TopNav     = createTopNav();
  const MainLayout = createMainLayout(TopNav, Content);

  const container = global.document.createElement('div');
  global.document.body.appendChild(container);

  const render = () => ReactDOM.render(<MainLayout />, container);

  render();
})(window);
