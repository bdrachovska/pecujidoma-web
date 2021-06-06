import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Page({ allOrganizationsData: allOrganizationsData }) {
  const router = useRouter();
  return (
    <Layout page>
      <Head>
        <title>Jakou službu potřebuji?</title>
      </Head>
      <h3 className="headings">Jakou službu potřebuji?</h3>
      <p className="intro__text text-margin">
        Stačí zodpovědět pár otázek a hned budete vědět, kterou službu Vy či Váš
        blízký potřebuje.
      </p>

      <div className="form-container">
        <div className="result"></div>
        <div className="result__answer">
          <h4>Služba, kterou hledáte, je:</h4>
          <ul className="detail__description-services">
            <li
              className={
                router.query.zdravotni === 'true' ||
                router.query.pecovatelska === 'true' ||
                router.query.terenni === 'true'
                  ? 'true'
                  : 'false'
              }
            >
              <Image
                src={`/img/ikony/ikona_pece.png`}
                alt="Ikona Terenní odlehčovací služba"
                width={60}
                height={40}
                objectFit="contain"
                className="orgDetails__icons"
              />
              Terénní odlehčovací služba
            </li>
            <li
              className={
                router.query.palliativni === 'true' ||
                router.query.hospic === 'true'
                  ? 'true'
                  : 'false'
              }
            >
              <Image
                src={`/img/ikony/ikona_hospic.png`}
                alt="Ikona hospic"
                width={60}
                height={40}
                objectFit="contain"
                className="orgDetails__icons"
              />
              Palliativní péče
            </li>
            <li
              className={router.query.asistence === 'true' ? 'true' : 'false'}
            >
              <Image
                src={`/img/ikony/ikona_osobni_asistence.png`}
                alt="Ikona osobní asistence"
                width={60}
                height={40}
                objectFit="contain"
                className="orgDetails__icons"
              />{' '}
              Osobní asistence
            </li>
            <li className={router.query.psycho === 'true' ? 'true' : 'false'}>
              <Image
                src={`/img/ikony/ikona_psycholog.png`}
                alt="Ikona psychologiská péče"
                width={60}
                height={40}
                objectFit="contain"
                className="orgDetails__icons"
              />
              Psychologická péče
            </li>
            <li className={router.query.pomucky === 'true' ? 'true' : 'false'}>
              <Image
                src={`/img/ikony/ikona_pujcovna.png`}
                alt="Ikona půjčovna"
                width={60}
                height={40}
                objectFit="contain"
                className="orgDetails__icons"
              />
              Půjčovna kompenzačních pomůcek
            </li>
          </ul>
          <div className="result-btn">
            <Link href={`/services/`}>
              <a className="btn bold btn-form">Zjistit víc o službách</a>
            </Link>

            <Link href={`/`}>
              <a className="btn btn-form">Zpět na hlavní stránku</a>
            </Link>
          </div>
        </div>
        <form action="">
          <div className="question">
            <p>
              1. Potřebujete doma pomoci se zdravotnickými úkony, jako jsou
              aplikace injekcí, pooperační péče, převazy ran, podání infuzí
              atd.?
            </p>

            <input type="radio" id="yes1" name="zdravotni" value="true" />
            <label htmlFor="yes1">ANO</label>

            <input type="radio" id="no1" name="zdravotni" value="false" />
            <label htmlFor="no1">NE</label>
          </div>

          <div className="question">
            <p>
              2. Potřebujete výpomoc pro seniora nebo osobu se sníženou
              soběstačností při péči o sebe nebo o domácnost?
            </p>
            <input type="radio" id="yes2" name="pecovatelska" value="true" />
            <label htmlFor="yes2">ANO</label>
            <input type="radio" id="no2" name="pecovatelska" value="false" />
            <label htmlFor="no2">NE</label>
          </div>

          <div className="question">
            <p>
              3. Potřebujete doma pomoci s péčí nebo zastoupit po určitou dobu
              (např. 4 hodiny denně)?
            </p>
            <input type="radio" id="yes3" name="terenni" value="true" />
            <label htmlFor="yes3">ANO</label>
            <input type="radio" id="no3" name="terenni" value="false" />
            <label htmlFor="no3">NE</label>
          </div>

          <div className="question">
            <p>
              4. Ukončili lékaři u vašeho nevyléčitelně nemocného blízkého
              aktivní léčbu?
            </p>
            <input type="radio" id="yes4" name="palliativni" value="true" />
            <label htmlFor="yes4">ANO</label>
            <input type="radio" id="no4" name="palliativni" value="false" />
            <label htmlFor="no4">NE</label>
          </div>

          <div className="question">
            <p>
              5. Máte nevyléčitelně nemocného blízkého v nemocnici a chtěli
              byste si ho vzít domů?
            </p>
            <input type="radio" id="yes5" name="hospic" value="true" />
            <label htmlFor="yes5">ANO</label>
            <input type="radio" id="no5" name="hospic" value="false" />
            <label htmlFor="no5">NE</label>
          </div>

          <div className="question">
            <p>
              6. Pečujete o zdravotně postižené děti a potřebujete jim pomoci
              žít běžným způsobem jejich vrstevníků? Nebo potřebujete pomoci
              dospělým osobám se zdravotním postižením a seniorům zvládnout s
              pomocí osobního asistenta činnosti, které nemohou vykonávat
              samostatně?
            </p>
            <input type="radio" id="yes6" name="asistence" value="true" />
            <label htmlFor="yes6">ANO</label>
            <input type="radio" id="no6" name="asistence" value="false" />
            <label htmlFor="no6">NE</label>
          </div>

          <div className="question">
            <p>
              7. Potřebujete pomoc psychologa pro sebe nebo pro osobu, o kterou
              pečujete?
            </p>
            <input type="radio" id="yes7" name="psycho" value="true" />
            <label htmlFor="yes7">ANO</label>
            <input type="radio" id="no7" name="psycho" value="false" />
            <label htmlFor="no7">NE</label>
          </div>

          <div className="question">
            <p>
              8. Potřebujete pro nemocného kompenzační pomůcky, jako je
              invalidní vozík, oxygenátor nebo toaletní křeslo?
            </p>
            <input type="radio" id="yes8" name="pomucky" value="true" />
            <label htmlFor="yes8">ANO</label>
            <input type="radio" id="no8" name="pomucky" value="false" />
            <label htmlFor="no8">NE</label>
          </div>

          <input
            className="btn btn-aboutUs btn-form"
            type="submit"
            value="ZJISTIT"
          />
        </form>
      </div>
    </Layout>
  );
}
