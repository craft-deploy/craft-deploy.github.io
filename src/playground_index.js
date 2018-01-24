import React             from 'react';
import ReactDOM          from 'react-dom';

import createMainLayout  from './component/playground/playground_mainlayout';
import createPlayground  from './component/playground/playground';
import createTopNav      from './component/playground/playground_topnav';


((global) => {
  const Playground = createPlayground();
  const TopNav     = createTopNav();
  const MainLayout = createMainLayout(TopNav, Playground);

  const container = global.document.createElement('div');
  global.document.body.appendChild(container);

  const render = () => ReactDOM.render(<MainLayout />, container);

  render();
})(window);
