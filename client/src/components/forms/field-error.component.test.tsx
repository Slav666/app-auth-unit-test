import { describe, expect, it } from 'vitest';
import { FieldError } from './field-error.component';
import { render, screen } from '~/test/utils';

describe('form-error', () => {
  it('should render field-error on the page', () => {
    render(<FieldError>Test Error</FieldError>);
    expect(screen.getByText('Test Error')).toBeInTheDocument();
  });
  it('should render field-error with proper font size and message colour', () => {
    render(<FieldError>Test Error</FieldError>);
    expect(screen.getByText('Test Error')).toHaveClass('text-sm text-red-600');
  });
});
