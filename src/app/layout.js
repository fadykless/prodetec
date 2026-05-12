'use client';

import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from '@/theme';
import Layout from '@/components/Layout';

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Layout>
            {children}
          </Layout>
        </ThemeProvider>
      </body>
    </html>
  );
}