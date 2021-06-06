import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';

export default function Page({ allOrganizationsData: allOrganizationsData }) {
  return (
    <Layout page>
      <Head>
        <title>Přehled služeb</title>
      </Head>
      <div className="services-container">
        <div className="index-intro listOfServices__background--img">
          <h2 className="headings index-heading">Přehled služeb</h2>
          <p className="intro__text bold">
            Veškeré služby, které vám mohou pomoci v péči o vaše blízké, najdete
            přehledně na této stránce. Popisy jednotlivých služeb vám pomohou s
            výběrem té správné pomocné ruky právě pro vás a vaše blízké.
          </p>
        </div>
        <div className="accordion accordion-flush" id="accordionFlushExample">
          <div className="accordion-item">
            <h2 className="accordion-header" id="flush-headingOne">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseOne"
                aria-expanded="false"
                aria-controls="flush-collapseOne"
              >
                Terénní odlehčovací služby
                <span className="pruhledne">1111111</span>
                <sub>
                  Pomocná ruka pro pečující, kteří si potřebují vyřídit to
                  nejnutnější, odpočinout si nebo se věnovat svým koníčkům.
                </sub>
              </button>
            </h2>
            <div
              id="flush-collapseOne"
              className="accordion-collapse collapse text_flex"
              aria-labelledby="flush-headingOne"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="services__accordion--display">
                <Image
                  src={`/img/Ikony/Ikona_pece.png`}
                  alt={`terenni_odlehcovaci_sluzby`}
                  width={150}
                  height={150}
                  objectFit="contain"
                  className="listOfServices_img"
                />
                <div className="accordion-body">
                  Pomocná ruka pro všechny pečující, kteří si potřebují vyřídit
                  nejnutnější záležitosti, odpočinout si od každodenní péče nebo
                  se věnovat svým koníčkům. Domů přijede pečovatelka, případně
                  zdravotní sestra a postará se o vše potřebné. Vašim blízkým
                  bude poskytnuta profesionální péče a vy získáte trochu volného
                  času.
                </div>
              </div>
              <div className="services__accordion--button">
                <Link href={`/organizations?services=service1`}>
                  <a className="btn btn-list_of_services">
                    <span className="bold">
                      Organizace poskytující terénní odlehčovací služby
                    </span>
                  </a>
                </Link>
              </div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header" id="flush-headingTwo">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseTwo"
                aria-expanded="false"
                aria-controls="flush-collapseTwo"
              >
                Paliativní péče
                <span className="pruhledne">11111111111111111</span>
                <sub>
                  Péče o nevyléčitelně nemocné pacienty v domácích podmínkách.
                </sub>
              </button>
            </h2>
            <div
              id="flush-collapseTwo"
              className="accordion-collapse collapse text_flex"
              aria-labelledby="flush-headingTwo"
              data-bs-parent="#flush-headingTwo"
            >
              <div className="services__accordion--display">
                <Image
                  src={`/img/Ikony/Ikona_hospic.png`}
                  alt={`paliativní péče`}
                  width={150}
                  height={150}
                  objectFit="contain"
                  className="listOfServices_img"
                />
                <div className="accordion-body">
                  Péče o nevyléčitelně nemocné pacienty v domácích podmínkách.
                  Domácí hospicová péče nabízí pomoc zdravotních sester i
                  pečovatelek 24 hodin denně 7 dní v týdnu. Pečující mohou
                  využít pomoc při dávkování léků, zdravotní péči, s hygienou
                  nemocného nebo psychologickou a sociální podporu.
                </div>
              </div>
              <div className="services__accordion--button">
                <Link href={`/organizations?services=service2`}>
                  <a className="btn btn-list_of_services">
                    <span className="bold">
                      Organizace poskytující paliativní péči
                    </span>
                  </a>
                </Link>
              </div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header" id="flush-headingThree">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseThree"
                aria-expanded="false"
                aria-controls="flush-collapseThree"
              >
                Osobní asistence
                <span className="pruhledne">111111111111111</span>
                <sub>
                  Pomoc a podpora pro pacienty při chodu domácnosti, hygieně
                  nebo při sociálních kontaktech.
                </sub>
              </button>
            </h2>
            <div
              id="flush-collapseThree"
              className="accordion-collapse collapse text_flex"
              aria-labelledby="flush-headingThree"
              data-bs-parent="#flush-headingThree"
            >
              <div className="services__accordion--display">
                <Image
                  src={`/img/Ikony/Ikona_osobni_asistence.png`}
                  alt={`osobní asistence`}
                  width={150}
                  height={150}
                  objectFit="contain"
                  className="listOfServices_img"
                />
                <div className="accordion-body">
                  Pomoc a podpora pro pacienty při chodu domácnosti, hygieně, se
                  sociálními kontakty a dalšími potřebami. Osobní asistence je
                  placená sociální služba pomáhající osobám, které z důvodu
                  zdravotního postižení, věku nebo nemoci potřebují pomoc v
                  běžných činnostech života.
                </div>
              </div>
              <div className="services__accordion--button">
                <Link href={`/organizations?services=service3`}>
                  <a className="btn btn-list_of_services">
                    <span className="bold">
                      Organizace poskytující osobní asistenci
                    </span>
                  </a>
                </Link>
              </div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header" id="flush-heading3">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapse3"
                aria-expanded="false"
                aria-controls="flush-collapse3"
              >
                Psychologická péče
                <span className="pruhledne">1111111111111</span>
                <sub>
                  Psychologická pomoc pro pacienty i jejich rodiny, zejména o
                  pečující členy domácnosti je velmi potřebná.
                </sub>
              </button>
            </h2>
            <div
              id="flush-collapse3"
              className="accordion-collapse collapse text_flex"
              aria-labelledby="flush-heading3"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="services__accordion--display">
                <Image
                  src={`/img/Ikony/Ikona_psycholog.png`}
                  alt={`psychologická péče`}
                  width={150}
                  height={150}
                  objectFit="contain"
                  className="listOfServices_img"
                />
                <div className="accordion-body">
                  Psychologická pomoc pro pacienty i jejich rodiny, zejména o
                  pečující členy domácnosti, je velmi potřebná. Psycholog
                  vyslechne, poradí a pomůže v těžké situaci. Nebojte se obrátit
                  na odborníky, kteří vám mohou v náročném životním období
                  ulehčit.
                </div>
              </div>
              <div className="services__accordion--button">
                <Link href={`/organizations?services=service4`}>
                  <a className="btn btn-list_of_services">
                    <span className="bold">
                      Organizace poskytující psychologickou péči
                    </span>
                  </a>
                </Link>
              </div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header" id="flush-heading4">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapse4"
                aria-expanded="false"
                aria-controls="flush-collapse4"
              >
                Půjčovna kompenzačních pomůcek
                <sub>
                  Velká pomoc pro pečující rodiny i jejich pacienty jsou různé
                  kompenzační pomůcky.
                </sub>
              </button>
            </h2>
            <div
              id="flush-collapse4"
              className="accordion-collapse collapse text_flex"
              aria-labelledby="flush-heading4"
              data-bs-parent="#flush-heading4"
            >
              <div className="services__accordion--display">
                <Image
                  src={`/img/Ikony/Ikona_pujcovna.png`}
                  alt={`půjčovna kompenzačních pomůcek`}
                  width={150}
                  height={150}
                  objectFit="contain"
                  className="listOfServices_img"
                />
                <div className="accordion-body">
                  Velká pomoc pro pečující rodiny i jejich pacienty jsou různé
                  kompenzační pomůcky, které pomohou ulehčit péči i každodenní
                  běžné fungování rodiny. Půjčovny kompenzačních pomůcek
                  nabízejí mnoho možností od polohovacích postelí, vozíků,
                  chodítek, až po oxygenátory či lienární dávkovače léků.
                </div>
              </div>
              <div className="services__accordion--button">
                <Link href={`/organizations?services=service5`}>
                  <a className="btn btn-list_of_services">
                    <span className="bold">Půjčovny kompenzačních pomůcek</span>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="index-intro services__form--display services__form_divide">
        <h2 className="headings index-heading">
          Vyhledejte vhodné služby dle místa péče:
        </h2>
      </div>
      <form
        method="GET"
        action="/organizations"
        className="services__form--display"
        id="form_services"
      >
        <div className="services__form--column">
          <div>
            <select
              id="town-select"
              name="town"
              className="form-select form__lisOfServices"
              aria-label="Default select example"
            >
              <option value="" disabled selected hidden>
                Vyberte město, kde chcete pečovat
              </option>
              <option
                className="listOfServices__dropdown--content"
                value="borovany"
              >
                Borovany
              </option>
              <option
                className="listOfServices__dropdown--content"
                value="ceske-budejovice"
              >
                České Budějovice
              </option>
              <option
                className="listOfServices__dropdown--content"
                value="cesske-velenice"
              >
                České Velenice
              </option>
              <option
                className="listOfServices__dropdown--content"
                value="cesky-krumlov"
              >
                Český Krumlov
              </option>
              <option
                className="listOfServices__dropdown--content"
                value="dacice"
              >
                Dačice
              </option>
              <option
                className="listOfServices__dropdown--content"
                value="driten"
              >
                Dříteň
              </option>
              <option
                className="listOfServices__dropdown--content"
                value="jindrichuv-hradec"
              >
                Jindřichův Hradec
              </option>
              <option
                className="listOfServices__dropdown--content"
                value="kaplice"
              >
                Kaplice
              </option>
              <option
                className="listOfServices__dropdown--content"
                value="pisek"
              >
                Písek
              </option>
              <option
                className="listOfServices__dropdown--content"
                value="prachatice"
              >
                Prachatice
              </option>
              <option
                className="listOfServices__dropdown--content"
                value="strakonice"
              >
                Strakonice
              </option>
              <option
                className="listOfServices__dropdown--content"
                value="sušice"
              >
                Sušice
              </option>
              <option
                className="listOfServices__dropdown--content"
                value="tabor"
              >
                Tábor
              </option>
              <option
                className="listOfServices__dropdown--content"
                value="trhove-sviny"
              >
                Trhové Sviny
              </option>
              <option
                className="listOfServices__dropdown--content"
                value="trebon"
              >
                Třeboň
              </option>
              <option
                className="listOfServices__dropdown--content"
                value="tyn-nad-vltavou"
              >
                Týn nad Vltavou
              </option>
              <option
                className="listOfServices__dropdown--content"
                value="veseli-nad-luznici"
              >
                Veselí nad Lužnicí
              </option>
              <option
                className="listOfServices__dropdown--content"
                value="vimperk"
              >
                Vimperk
              </option>
            </select>
          </div>
          <h5 className="heading__services--form">
            Vyberte služby, o které máte zájem:
          </h5>
          <div>
            <div className="form-check form-check-inline form__lisOfServices">
              <input
                className="form-check-input"
                type="checkbox"
                id="inlineCheckbox1"
                name="services"
                value="service1"
              />
              <label className="form-check-label" htmlFor="inlineCheckbox1">
                Terénní odlehčovací služby
              </label>
            </div>
            <div className="form-check form-check-inline form__lisOfServices">
              <input
                className="form-check-input"
                type="checkbox"
                id="inlineCheckbox2"
                name="services"
                value="service2"
              />
              <label className="form-check-label" htmlFor="inlineCheckbox2">
                Paliativní péče
              </label>
            </div>
            <div className="form-check form-check-inline form__lisOfServices">
              <input
                className="form-check-input"
                type="checkbox"
                id="inlineCheckbox3"
                name="services"
                value="service3"
              />
              <label className="form-check-label" htmlFor="inlineCheckbox3">
                Osobní asistence
              </label>
            </div>
            <div className="form-check form-check-inline form__lisOfServices">
              <input
                className="form-check-input"
                type="checkbox"
                id="inlineCheckbox4"
                name="services"
                value="service4"
              />
              <label className="form-check-label" htmlFor="inlineCheckbox4">
                Psychologická péče
              </label>
            </div>
            <div className="form-check form-check-inline form__lisOfServices">
              <input
                className="form-check-input"
                type="checkbox"
                id="inlineCheckbox5"
                name="services"
                value="service5"
              />
              <label className="form-check-label" htmlFor="inlineCheckbox5">
                Půjčovna kompenzačních pomůcek
              </label>
            </div>
          </div>
        </div>
        <div className="services__form--btn-display">
          <button className="btn services__form--btn" type="submit">
            Najít službu
          </button>
        </div>
      </form>
    </Layout>
  );
}
