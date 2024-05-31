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
      <head>
        <meta name="google-site-verification" content="UHkTP1PKasHo-DdxCFLDFX6ENef_XUjgoVmavk0bMTg" />
        <meta property="og:title" content="Aryan" />
        <meta property="og:description" content="Explore My Portfolio: Discover My Projects, Photos, About Me, and Connect on Social Media" />
        <meta property="og:image" content="/about1.jpg" />
        <link rel="icon" type="image/png" href="/img/LOgo.png" />
      </head>
      <body>
        <svg
          viewBox="0 0 640 512"
          width="100%"
          height="auto"
          className="progress"
        >
          <path
            d="M544 224l-128-16-48-16h-24L227.158 44h39.509C278.333 44 288 41.375 288 38s-9.667-6-21.333-6H152v12h16v164h-48l-66.667-80H18.667L8 138.667V208h8v16h48v2.666l-64 8v42.667l64 8V288H16v16H8v69.333L18.667 384h34.667L120 304h48v164h-16v12h114.667c11.667 0 21.333-2.625 21.333-6s-9.667-6-21.333-6h-39.509L344 320h24l48-16 128-16c96-21.333 96-26.583 96-32 0-5.417 0-10.667-96-32z"
            fill="currentColor"
          />
        </svg>
        <div className="stars"></div>
        <div className="stars2"></div>
        <div className="stars3"></div>
        <div>{children}</div>
      </body>
    </html>

    )
}

