import { describe, expect, it } from 'vitest';
import { FormWrapper } from './form-wrapper.component';
import { render, screen } from '~/test/utils';
import { LoginForm } from '~/accounts/authentication/login-form.component';

let loginUser: () => void;

describe('form-wrapper', () => {
  beforeEach(() => {
    loginUser = vi.fn();
  });
  it('should render form-wrapper on the page with login form', () => {
    render(
      <FormWrapper>
        <LoginForm loginUser={loginUser} />
      </FormWrapper>,
    );
    expect(screen.getByRole('article')).toBeInTheDocument();
  });
});
