'use client';
import { AppProgressBar as ProgressBar } from 'next-nprogress-bar';
import ThemeProvider from '@/lib/hooks/use-theme';
import Cursor from '@/components/ui/Cursor';

export default function RootLayoutClient({
  children,
  fontVariables,
}: {
  children: React.ReactNode;
  fontVariables: string;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script src="/scripts/no-flash.js" async />
      </head>
      <body className={`text-text bg-bg ${fontVariables}`}>
        <Cursor className="hidden dark:lg:block" />
        <ThemeProvider>{children}</ThemeProvider>
        <ProgressBar
          height="4px"
          color="#2299DD"
          options={{ showSpinner: false }}
          shallowRouting
        />
      </body>
    </html>
  );
}