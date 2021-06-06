import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import Image from "next/image";
import { useRouter } from 'next/router';

export default function Page({ allOrganizationsData: allOrganizationsData }) {
  const router = useRouter();

  const contactForm = async (event) => {
    event.preventDefault();

    if (event.target.antispam.value) {
      alert("Vyplnili jste antispamovou kontrolu...");
      return;
    }

    const formData = {
      name: JSON.stringify(event.target.name.value),
      address: JSON.stringify(event.target.address.value),
      url: JSON.stringify(event.target.url.value),
      email: JSON.stringify(event.target.email.value),
      phone: JSON.stringify(event.target.phone.value),
      message: JSON.stringify(event.target.message.value),
    };

    if (!Object.values(formData).some(x => x !== null && x !== "")) {
      alert("Je třeba vyplnit všechny hodnoty...");
      return;
    }

    const message = `
      Název organizace: ${formData.name}\n
      Adresa: ${formData.address}\n
      URL: ${formData.url}\n
      E-mail: ${formData.email}\n
      Telefon: ${formData.phone}\n
      Zpráva: ${formData.message}
    `;

    router.push(`mailto:pecujidoma@seznam.cz?subject=Pečujidoma - Kontaktní formulář&body=${message}`);
  };
  return (
    <Layout page>
      <Head>
        <title>Kontakt</title>
      </Head>
      <div className="aboutUs-container">
        <h3 className="headings">
          Zajišťujete péči doma a chcete svůj kontakt vložit na tento web?
        </h3>
      </div>
      <form className="container" onSubmit={contactForm}>
        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon1">
            Název organizace
          </span>
          <input
            name="name"
            type="text"
            className="form-control"
            placeholder="Název organizace"
            required
          />
        </div>

        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon11">
            Adresa organizace
          </span>
          <input
            name="address"
            type="text"
            className="form-control"
            placeholder="Adresa organizace"
            required
          />
        </div>

        <div className="input-group mb-3">
          <input
            name="url"
            type="url"
            className="form-control"
            placeholder="Vaše webová stránka"
            required
          />
          <span className="input-group-text" id="basic-addon4">
            www
          </span>
        </div>

        <div className="input-group mb-3">
          <input
            name="email"
            type="email"
            className="form-control"
            placeholder="Váš e-mail"
            required
          />
          <span className="input-group-text" id="basic-addon44">
            @
          </span>
        </div>

        <div className="input-group mb-3">
          <input
            name="phone"
            type="text"
            className="form-control"
            placeholder="Kontaktní telefon"
            required
          />
          <span className="input-group-text" id="basic-addon444">
            <Image
              src={`/img/Ikony/phone.png`}
              alt="telefon"
              width={30}
              height={20}
              objectFit="contain"
            />
          </span>
        </div>

        <div className="input-group mb-3">
          <span className="input-group-text">Vaše zpráva</span>
          <textarea
            name="message"
            className="form-control"
            placeholder="Zde je prostor pro Váš vzkaz"
            required
          ></textarea>
        </div>

        <div className="input-group d-none">
          <span className="input-group-text" id="basic-addon1">
            Antispam
          </span>
          <input
            name="antispam"
            type="text"
            className="form-control"
            placeholder="Nevypňujte, pokud nejste robot"
          />
        </div>

        <button className="btn btn-aboutUs" type="submit">
          Odeslat
        </button>
      </form>
    </Layout>
  );
}
