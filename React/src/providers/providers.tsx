import { Provider } from 'jotai';

import { DesignTokenProvider } from '../components/DesignTokenProvider';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <Provider>
      <DesignTokenProvider>{children}</DesignTokenProvider>
    </Provider>
  );
}
