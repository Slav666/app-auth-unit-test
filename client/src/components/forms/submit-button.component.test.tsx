import { describe, expect, it } from 'vitest';
import { SubmitButton } from './submit-button.component';
import { render, screen } from '~/test/utils';
import { GBIcon } from '../../i18n/icons';
describe('Submit Button', () => {
  it('should render a submit button with text only', () => {
    render(<SubmitButton>Test text</SubmitButton>);
    expect(screen.getByRole('button', { name: 'Test text' })).toBeInTheDocument();
  });
  it('should render a submit button with an icon only', () => {
    render(
      <SubmitButton>
        <GBIcon />
      </SubmitButton>,
    );
    expect(screen.getByRole('button', { name: 'United kingdom Flag' })).toBeInTheDocument();
  });
  it('should render a submit button with text and an icon', () => {
    render(
      <SubmitButton>
        <span>
          <GBIcon />
          <p>Test text</p>
        </span>
      </SubmitButton>,
    );
    expect(screen.getByRole('button', { name: 'United kingdom Flag Test text' })).toBeInTheDocument();
    expect(screen.getByText('Test text')).toBeInTheDocument();
  });
  it('should render a submit button in the disabled state', () => {
    render(<SubmitButton isDisabled>Test text</SubmitButton>);
    expect(screen.getByRole('button', { name: 'Test text' })).toBeDisabled();
  });
  it('should render a submit button in the enabled state', () => {
    render(<SubmitButton>Test text</SubmitButton>);
    expect(screen.getByRole('button', { name: 'Test text' })).toBeEnabled();
  });
});
