import type { Metadata } from "next";


export const metadata: Metadata = {
  title: "Create Next App in Auth Layout",
  description: "Metadata example in auth layout",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
        <footer style={{ fontFamily: "var(--font-geist-mono)", padding: "1rem", backgroundColor: "#443d3d" }}>
          <p>Login Layout: Footer:© 2024 My App. All rights reserved.</p>
        </footer>
      </body>
    </html>
  );
}
