import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './styles/index.css';
import '@mantine/core/styles.css';
import { MantineProvider, createTheme, Button } from '@mantine/core';
import { App } from './App.tsx';

const theme = createTheme({
  components: {
    Button: Button.extend({
      defaultProps: {
        variant: 'filled',
      },
    }),
  },
});

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MantineProvider theme={theme}>
      <App />
    </MantineProvider>
  </StrictMode>,
);
