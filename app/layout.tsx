import Image from "next/image";
import type { ReactNode } from "react";
import { StoreProvider } from "./StoreProvider";

import "./globals.css";

interface Props {
  readonly children: ReactNode;
}

export default function RootLayout({ children }: Props) {
  return (
    <StoreProvider>
      <html lang="en">
        <body>
          {children}
        </body>
      </html>
    </StoreProvider>
  );
}
