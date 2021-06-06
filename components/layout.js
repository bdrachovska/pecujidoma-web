import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

const APP_NAME = 'Pečuji doma';
export const siteTitle = 'Pečuji doma';

export default function Layout({ children, home }) {
  const router = useRouter();
  return (
    <>
      <Head>
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta property="og:image" content="/img/LogoSkia.png" />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon/favicon-16x16.png"
        />
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="theme-color" content="#ffffff"></meta>
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-wEmeIV1mKuiNpC+IOBjI7aAzPcEZeedi5yW5f2yOq55WWLwNGmvvx4Um1vskeMj0"
          crossOrigin="anonymous"
        />
        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-p34f1UUtsS3wqzfto5wAAmdvj+osOnFyQFpp4Ua3gs/ZVWx6oOypYoCJhGGScy+8"
          crossOrigin="anonymous"
        ></script>
        <script
          src="https://kit.fontawesome.com/e5df4230c0.js"
          crossOrigin="anonymous"
        ></script>
      </Head>
      <div className="container_flex">
        <header>
          <nav className="navbar navbar-expand-lg navbar-light fix-top">
            <div className="container-fluid">
              <Link href="/" className="navbar-brand">
                <a>
                  <Image
                    priority
                    src="/img/LogoSkia.png"
                    width={150}
                    height={75}
                    alt="logo"
                  />
                </a>
              </Link>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <Link href="/organizations">
                      <a
                        className={
                          router.pathname === '/organizations'
                            ? 'nav-link active'
                            : 'nav-link'
                        }
                      >
                        Seznam organizací
                      </a>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link href="/services">
                      <a
                        className={
                          router.pathname === '/services'
                            ? 'nav-link active'
                            : 'nav-link'
                        }
                      >
                        Přehled služeb
                      </a>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link href="/financial-help">
                      <a
                        className={
                          router.pathname === '/financial-help'
                            ? 'nav-link active'
                            : 'nav-link'
                        }
                      >
                        Finanční pomoc
                      </a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </header>
        <main>{children}</main>
        <footer className="footer_flex">
          <p>
            <Link href="/about">
              <a className={router.pathname === '/about' ? 'active' : ''}>
                O nás
              </a>
            </Link>
            {' | '}
            <Link href="/contact">
              <a className={router.pathname === '/contact' ? 'active' : ''}>
                Kontakt
              </a>
            </Link>
          </p>
          <p>&copy; 2021, Vytvořeno při Digitální akademii WEB</p>
        </footer>
      </div>
    </>
  );
}
