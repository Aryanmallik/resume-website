import Head from "next/head";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>N!gga</title>
        {/* <meta name="🤓" content="I take photos🤓" /> */}
        <meta
          name="google-site-verification"
          content="UHkTP1PKasHo-DdxCFLDFX6ENef_XUjgoVmavk0bMTg"
        />
          <link rel="icon" type="image/png" sizes="16x16" href="/img/LOgo.png"/>
      </head>

      <body>{children}</body>
    </html>
  );
}
