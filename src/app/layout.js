'use client';

import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from '@/theme';
import Layout from '@/components/Layout';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <head>
        <meta charSet="utf-8" />
        <link rel="icon" href="/icon.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#0f172a" />
        <link rel="apple-touch-icon" href="/icon.png" />
      </head>
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