import { describe, expect, it } from 'vitest';
import { AstrosatSpinner } from './spinner.component';
import { render, screen } from '~/test/utils';
describe('spinner', () => {
  it('should render the spinner on the page', () => {
    render(<AstrosatSpinner />);
    expect(screen.getByText('Brought to you by Stevenson Astrosat')).toBeInTheDocument();
  });
});
