import { describe, expect, it } from 'vitest';

import { render, screen, userEvent, waitFor } from '~/test/utils';

import { Unauthorized } from './unauthorized.component';

describe('Unauthorized', () => {
  it('should render unauthorized component', () => {
    render(<Unauthorized />);

    expect(screen.getByRole('heading', { name: /unauthorized/i })).toBeInTheDocument();
    expect(screen.getByText(/you do not have access to the requested page./i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /go back/i })).toBeInTheDocument();
  });

  it('should move one step backward from unauthorized page when clicks on the "Go Back" button', async () => {
    const goBack = vi.fn();
    render(<Unauthorized goBack={goBack} />);

    userEvent.click(screen.getByRole('button', { name: 'Go Back' }));

    await waitFor(() => expect(goBack).toHaveBeenCalled());
  });
});
