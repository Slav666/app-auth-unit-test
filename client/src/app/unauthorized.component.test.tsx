import { describe, expect, it } from 'vitest';

import { render, screen, userEvent } from '~/test/utils';

import { Unauthorized } from './unauthorized.component';

describe('Unauthorized', () => {
  const goBack = vi.fn();

  it('should render unauthorized component', () => {
    render(<Unauthorized goBack={goBack} />);

    expect(screen.getByRole('heading', { name: /unauthorize/i })).toBeInTheDocument();
    expect(screen.getByText(/you do not have access to the requested page./i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /go back/i })).toBeInTheDocument();
  });

  it('should move one step backward from unauthorized page when clicks on the "Go Back" button', async () => {
    const user = userEvent.setup();
    render(<Unauthorized goBack={goBack} />);

    await user.click(screen.getByRole('button', { name: /go back/i }));

    expect(goBack).toHaveBeenCalled();
  });
});
