import { describe, expect, it } from 'vitest';
import { render, screen, fireEvent } from '~/test/utils';

import { history } from '../history';

import { Unauthorized } from './unauthorized.component';

describe('Unauthorized', async () => {
  beforeEach(() => {
    history.push('/unauthorized');
  });

  it('should render unauthorized component', () => {
    render(<Unauthorized />);

    expect(screen.getByText('Unauthorized')).toBeInTheDocument();
  });

  it('should move one step backward from unauthorized page when clicks on the "Go Back" button', async () => {
    render(<Unauthorized />);

    expect(history.location.pathname).toBe('/unauthorized');
    const backButton = screen.getByText('Go Back');
    await fireEvent.click(backButton);
    expect(history.go(-1));
  });
});
