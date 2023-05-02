import { describe, expect, it } from 'vitest';
import { FormWrapper } from './form-wrapper.component';
import { render, screen } from '~/test/utils';

describe('form-wrapper', () => {
  it('should render form-wrapper on the page with a form', () => {
    render(
      <FormWrapper>
        <form aria-label="Add your details">
          <label htmlFor="firstName">First Name:</label>
          <input type="text" id="firstName" />
          <label htmlFor="lastName">Last Name:</label>
          <input type="text" id="lastName" />

          <button type="submit">Submit Me</button>
        </form>
      </FormWrapper>,
    );
    expect(screen.getByRole('article')).toBeInTheDocument();
    expect(screen.getByRole('form')).toBeInTheDocument();
    expect(screen.getByRole('textbox', { name: 'First Name:' })).toBeInTheDocument();
    expect(screen.getByRole('textbox', { name: 'Last Name:' })).toBeInTheDocument();
    expect(screen.getByRole('button')).toBeInTheDocument();
  });
});
