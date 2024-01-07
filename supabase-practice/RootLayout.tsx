import React from "react";
import "./globals.css";
import SupabaseProvider from "@/provider/SupabaseProvider";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <SupabaseProvider>{children}</SupabaseProvider> {/* Provider로 감싸줌*/}
      </body>
    </html>
  );
}
