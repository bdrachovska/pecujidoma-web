import Layout from '../../components/layout';
import {
  getAllOrganizationIds,
  getOrganizationData,
} from '../../lib/organizations';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

export default function Organization({ organizationData: organizationData }) {
  return (
    <Layout>
      <Head>
        <title>{organizationData.name}</title>
      </Head>

      <div className="detail">
        <div className="detail-flex">
          <div className="detail__logo">
            <Image
              src={`/img/loga/${organizationData.logo}`}
              alt={organizationData.name}
              width={400}
              height={300}
              objectFit="contain"
            />
          </div>
          <div className="detail__info">
            <h2 className="detail__info--name">{organizationData.name}</h2>

            <ul className="detail__info-contacts">
              <li className="detail-town">{organizationData.town}</li>
              <li className="detail-www">
                <a href={organizationData.url} target="_blank" className="bold">
                  {organizationData.url}
                </a>
              </li>
              <li
                className="detail-email"
                href={`mailto:${organizationData.email}`}
              >
                e-mail: <span className="e-mail">{organizationData.email}</span>
              </li>

              <li className="detail-phone">
                tel.:{' '}
                <span className="phone-number">{organizationData.phone}</span>
              </li>
            </ul>
          </div>
        </div>
        <div
          dangerouslySetInnerHTML={{ __html: organizationData.contentHtml }}
        />
        <div className="detail__description">
          <h3>Popis služeb</h3>
          <ul className="detail__description-services">
            <li
              className={organizationData.service1 === true ? 'true' : 'false'}
            >
              <Image
                src={`/img/ikony/ikona_pece.png`}
                alt="Ikona Terenní odlehčovací služba"
                width={60}
                height={40}
                objectFit="contain"
                className="orgDetails__icons"
              />
              Terénní odlehčovací služba (pečovatelská služba + domácí zdravotní
              péče)
            </li>
            <li
              className={organizationData.service2 === true ? 'true' : 'false'}
            >
              <Image
                src={`/img/ikony/ikona_hospic.png`}
                alt="Ikona hospic"
                width={60}
                height={40}
                objectFit="contain"
                className="orgDetails__icons"
              />
              Paliativní péče (domácí hospic + paliativní lůžka)
            </li>
            <li
              className={organizationData.service3 === true ? 'true' : 'false'}
            >
              <Image
                src={`/img/ikony/ikona_osobni_asistence.png`}
                alt="Ikona osobní asistence"
                width={60}
                height={40}
                objectFit="contain"
                className="orgDetails__icons"
              />
              Osobní asistence
            </li>
            <li
              className={organizationData.service4 === true ? 'true' : 'false'}
            >
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
            <li
              className={organizationData.service5 === true ? 'true' : 'false'}
            >
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
          <Link href={`/organizations/`}>
            <a className="btn btn-details">
              <span className="bold"> Zpět na výpis organizací</span>
            </a>
          </Link>
        </div>
      </div>
    </Layout>
  );
}

export async function getStaticPaths() {
  const paths = getAllOrganizationIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const organizationData = await getOrganizationData(params.id);
  return {
    props: {
      organizationData,
    },
  };
}
