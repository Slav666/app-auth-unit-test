import { describe, expect, it } from 'vitest';
import { FormWrapper } from './form-wrapper.component';
import { render, screen } from '~/test/utils';

describe('form-wrapper', () => {
  it('should render form-wrapper on the page with child', () => {
    render(<FormWrapper>Test Child</FormWrapper>);
    expect(screen.getByText('Test Child')).toBeInTheDocument();
  });
});
