import type { AppProps } from "next/app";
import { ClerkProvider } from "@clerk/nextjs";

import "ui/globals.css";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ClerkProvider {...pageProps}>
      <Component {...pageProps} />
    </ClerkProvider>
  );
}
