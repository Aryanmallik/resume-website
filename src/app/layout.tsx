import "../styles/global.css"
export const metadata = {
    title: 'Aryan',
    description: '',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <head><meta name="google-site-verification" content="UHkTP1PKasHo-DdxCFLDFX6ENef_XUjgoVmavk0bMTg" /></head>
            <body>
                <link rel="icon" type="image/png" href="/img/logo.PNG" />
                <div className="container">{children}</div>
            </body>
        </html>
    )
}
