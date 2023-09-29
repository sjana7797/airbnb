import type { AppProps } from "next/app";
import { ClerkProvider } from "@clerk/nextjs";
import NextNProgress from "nextjs-progressbar";

import "ui/globals.css";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ClerkProvider {...pageProps}>
      <NextNProgress
        height={3}
        color="#FF5A5F"
        options={{
          showSpinner: false,
        }}
      />
      <Component {...pageProps} />
    </ClerkProvider>
  );
}
