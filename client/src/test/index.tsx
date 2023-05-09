import { history } from '../history';
import React from 'react';

import { Router } from 'react-router-dom';

import { render } from './utils';

export const renderInRouter = (Comp: React.FC) =>
  render(
    <Router history={history}>
      <Comp />
    </Router>,
  );
