import "../styles/global.scss"
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
            <head><meta name="google-site-verification" content="UHkTP1PKasHo-DdxCFLDFX6ENef_XUjgoVmavk0bMTg" />
            <meta property="og:title" content="Aryan"/>
                <meta property="og:description" content="Explore My Portfolio: Discover My Projects, Photos, About Me, and Connect on Social MediaExplore My Portfolio: Discover My Projects, Photos, About Me, and Connect on Social Media"/>
                        <meta property="og:image" content="/about1.jpg"/>
                        </head>
                        <body>
                            <link rel="icon" type="image/png" href="/img/LOgo.png" />
                            <div>{children}</div>
                            <div className="stars"> </div>
                            <div className="stars-duplicate"> </div>
                            <div className="stars2"> </div>
                            <div className="stars2-duplicate"> </div>
                            <div className="stars3"> </div>
                            <div className="stars3-duplicate"> </div>
                        </body>
                    </html>
                    )
}

