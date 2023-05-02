import { FC, ReactElement } from 'react';

interface FieldErrorProps {
  children: string | undefined | ReactElement;
}

export const FieldError: FC<FieldErrorProps> = ({ children }) => (
  <p className="mt-1 text-sm text-red-600">{children}</p>
);
