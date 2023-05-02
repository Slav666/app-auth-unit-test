import { describe, expect, it } from 'vitest';
import { FieldError } from './field-error.component';
import { render, screen } from '~/test/utils';

describe('form-error', () => {
  it('should render field-error on the page with text as children', () => {
    render(<FieldError>Test Error</FieldError>);
    expect(screen.getByText('Test Error')).toBeInTheDocument();
  });
  it('should render field-error on the page with some HTML as children', () => {
    render(
      <FieldError>
        <div>
          <span>Test</span>
          <span>Error</span>
        </div>
      </FieldError>,
    );
    expect(screen.getByText('Test')).toBeInTheDocument();
    expect(screen.getByText('Error')).toBeInTheDocument();
  });
});
