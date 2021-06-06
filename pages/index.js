import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import Link from 'next/link';

export default function Home({ allOrganizationsData: allOrganizationsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <div className="index-container">
        <div className="index-intro">
          <h1 className="headings index-heading">Pomůžeme Vám pečovat doma</h1>
          <p className="intro__text">
            Náš web Vás rychle přivede ke kontaktu na organizace, které nabízejí
            pomocnou ruku. Díky nám se zorientujete i v přehledu služeb těchto
            organizací a finančního úhrady služeb.
          </p>
        </div>
        <div className="index-img">
          <div className="index-box index-box-1">
            <p>
              Jakou službu potřebujete? Zjistíte to lehce pomocí našeho
              speciálně sestaveného dotazníku.
            </p>
            <Link href={`/form`}>
              <a className="btn btn-index bold">O koho pečujete?</a>
            </Link>
          </div>
          <div className="index-box index-box-2">
            <p>
              Jaké organizace působí v&nbsp;místě, kde pečujete o&nbsp;svého
              blízkého? Vyhledávat můžete podle nejbližší obce s&nbsp;přenesenou
              působností.
            </p>
            <Link href={`/services/#form_services`}>
              <a className="btn btn-index bold">Kde pečujete?</a>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
}
