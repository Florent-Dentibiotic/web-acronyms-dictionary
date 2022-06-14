import { Error } from '@common';
import { ReactNode } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { useQueryErrorResetBoundary } from 'react-query';

interface BoundaryProps {
  children: ReactNode;
}

function ErrorQueryBoundary({ children }: BoundaryProps) {
  const { reset } = useQueryErrorResetBoundary();

  return (
    <ErrorBoundary onReset={reset} FallbackComponent={Error}>
      {children}
    </ErrorBoundary>
  );
}

export default ErrorQueryBoundary;
