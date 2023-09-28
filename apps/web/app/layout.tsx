import { ClerkProvider } from "@clerk/nextjs";
import "ui/globals.css";

export const metadata = {
  title: "Airbnb",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <ClerkProvider>
      <html lang="en">
        <head>
          <link rel="icon" href="/favicon.ico" sizes="any" />
        </head>
        <body>{children}</body>
      </html>
    </ClerkProvider>
  );
}
