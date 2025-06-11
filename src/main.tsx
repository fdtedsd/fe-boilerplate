import { createRoot } from 'react-dom/client';

import { App } from './App.tsx';
import { Providers } from './providers/providers';
import './i18n/index.ts';

createRoot(document.getElementById('root')!).render(
  <Providers>
    <App />
  </Providers>,
);
