import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './styles/index.css';
import '@mantine/core/styles.css';
import { MantineProvider, createTheme, Button } from '@mantine/core';
import { Provider } from 'react-redux';
import { App } from './App.tsx';
import { store } from '../stores/store.ts';

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
    <Provider store={store}>
      <MantineProvider theme={theme}>
        <App />
      </MantineProvider>
    </Provider>
  </StrictMode>,
);
