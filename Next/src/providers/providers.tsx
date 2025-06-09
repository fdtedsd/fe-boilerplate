'use client';

import { Provider } from 'jotai';
import '@/i18n';

export function Providers({ children }: { children: React.ReactNode }) {
  return <Provider>{children}</Provider>;
}
