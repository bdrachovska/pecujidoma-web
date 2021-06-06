import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';

export default function Page({ allOrganizationsData: allOrganizationsData }) {
  return (
    <Layout page>
      <Head>
        <title>Finanční pomoc</title>
      </Head>
      <div className="index-container">
        <div className="index-intro finHelp__background--img">
          <h2 className="headings index-heading">Finanční pomoc</h2>
          <p className="intro__text bold">
            Když se rozhodnete pečovat doma, je nezbytné zajistit finanční
            prostředky na pečovatelské služby nebo nahradit výpadek Vašich
            příjmů, když musíte dočasně opustit své zaměstnání. Zde najdete
            informace o tom, kde hledat finanční pomoc.
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
                Příspěvek na péči
                <span className="pruhledne">11</span>
                <sub>
                  Podpora pro ty, kdo potřebují pomoc při zvládání základních
                  životních potřeb.
                </sub>
              </button>
            </h2>
            <div
              id="flush-collapseOne"
              className="accordion-collapse collapse accordion__flex--column"
              aria-labelledby="flush-headingOne"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body accordion__flex--column">
                <p>
                  {' '}
                  Příspěvek na péči je určen osobám, které kvůli nemoci, úrazu
                  nebo věku nejsou schopny vykonávat činnosti běžného života a
                  potřebují tedy pomoc jiné osoby. Příspěvek náleží osobě, o
                  kterou je pečováno, nikoliv osobě, která péči zajišťuje.
                  Příjemci mohou z příspěvku dle vlastního uvážení hradit služby
                  jim poskytované osobou blízkou, asistenty sociální péče,
                  registrovaným poskytovatelem sociálních služeb nebo zařízením
                  hospicového typu.{' '}
                </p>
                <p>
                  Rozsah péče stanovuje stupeň závislosti nemocného. Při
                  posuzování stupně závislosti osoby se hodnotí schopnost
                  zvládat základní životní potřeby jako je mobilita, orientace,
                  komunikace, tělesná hygiena nebo péče o domácnost.
                </p>
                <p>
                  O příspěvek na péči žádáte podáním písemné žádosti na
                  kontaktním pracovišti Úřadu práce v místě trvalého pobytu
                  žadatele o příspěvek.{' '}
                </p>
              </div>
              <a
                href="https://pece.cz/prispevek-peci"
                target="_blank"
                className="btn btn-list_of_services"
              >
                <span className="bold">
                  Bližší informace o příspěvku na péči
                </span>
              </a>
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
                  Dlouhodobé ošetřovné
                  <span className="pruhledne">11</span>
                  <sub>
                    Dlouhodobé ošetřovné umožňuje pečující osobě čerpat až 90
                    kalendářních dní pracovního volna.
                  </sub>
                </button>
              </h2>
              <div
                id="flush-collapseTwo"
                className="accordion-collapse collapse accordion__flex--colum"
                aria-labelledby="flush-headingTwo"
                data-bs-parent="#flush-headingTwo"
              >
                <div className="accordion-body  accordion__flex--column">
                  <p>
                    {' '}
                    Dlouhodobé ošetřovné umožňuje čerpání až 90 kalendářních dní
                    pracovního volna s náhradou příjmů ve výši 60 % denního
                    vyměřovacího základu. Má sloužit pečující osobě pro pokrytí
                    doby, která následuje po propuštění osoby blízké z nemocnice
                    např. po vážném úrazu nebo nemoci.
                  </p>
                  <p>
                    Dávka je poskytována zaměstnanci, nebo osobě samostatně
                    výdělečně činné, která nemůže vykonávat činnost z důvodu
                    péče v domácím prostředí. K možnosti zabezpečit péči v rámci
                    rodiny má přispět též možnost střídání v poskytování péče s
                    jiným členem rodiny.{' '}
                  </p>
                  <p>
                    O potřebě celodenní péče rozhoduje ošetřující lékař
                    lůžkového zařízení. Nárok na dlouhodobé ošetřovné vzniká v
                    případě, trvala-li hospitalizace osoby závislé na péči
                    alespoň 7 dní, a bude-li zdravotní stav této osoby vyžadovat
                    dlouhodobou péči alespoň 30 kalendářních dnů.
                  </p>
                  <p>
                    Na předepsaném tiskopise bude třeba předložit vyplněnou
                    žádost a k ní připojit doklad, který vydal ošetřující lékař
                    lůžkového zařízení o potřebě poskytování dlouhodobé péče.
                    Zároveň musí být připojen písemný souhlas ošetřované osoby,
                    aby o ní pečovala osoba žádající o dlouhodobé ošetřovné.
                    Tato žádost bude zaměstnavatelem odeslána na okresní správu
                    sociálního zabezpečení.{' '}
                  </p>
                </div>
                <a
                  href="https://www.cssz.cz/web/cz/podrobne-informace-o-dlouhodobem-osetrovnem"
                  target="_blank"
                  className="btn btn-list_of_services"
                >
                  <span className="bold">
                    Bližší informace o dlouhodobém ošetřovném
                  </span>
                </a>
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
                  Příspěvek na zvláštní pomůcku
                  <span className="pruhledne">11</span>
                  <sub>
                    Zvláštní pomůckou může být speciální počítač, schodolez,
                    schodová plošina nebo auto.
                  </sub>
                </button>
              </h2>
              <div
                id="flush-collapseThree"
                className="accordion-collapse collapse accordion__flex--colum"
                aria-labelledby="flush-headingThree"
                data-bs-parent="#flush-headingThree"
              >
                <div className="accordion-body  accordion__flex--column">
                  <p>
                    Jedná se o pomůcky, které těmto lidem umožní sebeobsluhu,
                    nebo které tito lidé potřebují kvůli práci, studiu,
                    získávání informací, vzdělávání nebo styku s okolím. V běžné
                    řeči se můžeme setkat i s označením příspěvek na auto, které
                    se vztahuje jen k jednomu typu pomůcky.
                  </p>
                  <p>
                    Při stanovení výše příspěvku se zohledňuje příjem žadatele a
                    společně posuzovaných osob. Pravidla se liší u pomůcek v
                    ceně do 10.000 korun a nad 10.000 korun. Obecně platí, že je
                    nutná spoluúčast žadatele, činí obvykle 10% ceny a její
                    minimální výše je 1.000 korun.{' '}
                  </p>
                  <p>
                    Maximální výše příspěvku na zvláštní pomůcku na pořízení
                    motorového vozidla činí 200 000 Kč, se zvyšujícím se příjmem
                    se snižuje. Nejnižší výše dávky je 100 000 Kč.
                  </p>
                  <p>
                    Limity: Maximální výše příspěvku na zvláštní pomůcku činí
                    350 000 Kč; 400 000 Kč v případě příspěvku na zvláštní
                    pomůcku na pořízení „plošiny“. Součet vyplacených příspěvků
                    na zvláštní pomůcku nesmí v 60 kalendářních měsících po sobě
                    jdoucích přesáhnout částku 800 000 Kč; 850 000 Kč, pokud v
                    této době byl poskytnut příspěvek na zvláštní pomůcku na
                    pořízení schodišťové plošiny.{' '}
                  </p>
                </div>
                <a
                  href="https://www.mpsv.cz/-/zadost-o-prispevek-na-zvlastni-pomucku"
                  target="_blank"
                  className="btn btn-list_of_services"
                >
                  <span className="bold">
                    Bližší informace o příspěvku na zvláštní pomůcku
                  </span>
                </a>
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
                  Invalidní důchod<span className="pruhledne">11</span>
                  <sub>
                    O invalidní důchod si mohou zažádat pacienti, kteří mají
                    sníženou pracovní schopnost{' '}
                  </sub>
                </button>
              </h2>
              <div
                id="flush-collapse3"
                className="accordion-collapse collapse accordion__flex--colum"
                aria-labelledby="flush-heading3"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body  accordion__flex--column">
                  <p>
                    U dlouhodobě nemocných je často nutné řešit jiné formy
                    příspěvku než je nemocenská - ta se vyplácí pouze jeden rok.
                    Další možností je invalidní důchod. Stupně invalidity se
                    rozlišují podle poklesu pracovní schopnosti – invalidní
                    důchod prvního stupně při poklesu o 35 až 49 procent,
                    invalidní důchod druhého stupně při poklesu o 50 až 69
                    procent a třetího stupně při poklesu pracovní schopnosti o
                    70 procent a víc. O invalidní důchod se žádá na státní
                    správě sociálního zabezpečení.
                  </p>{' '}
                  <p>
                    Výsledkem tohoto procesu je posudek o invaliditě, který OSSZ
                    postupuje spolu s žádostí na ústředí ČSSZ, v jehož
                    kompetenci je rozhodnout o nároku na důchod a jeho výši.
                    OSSZ posudek zašle také posuzovanému občanovi, a to do 7 dnů
                    od jeho vypracování. Je důležité vědět, že posudek je jedním
                    z podkladů pro rozhodnutí o nároku na invalidní důchod a že
                    nárok na invalidní důchod nenastane automaticky s uznanou
                    invaliditou. Zákonná lhůta pro vyřízení je 90 dnů, proto
                    doporučujeme začít jednat s úřady včas. Je možné zažádat o
                    zasílání záloh po dobu posouzení žádosti.
                  </p>
                </div>
                <a
                  href="https://www.cssz.cz/invalidni-duchod"
                  target="_blank"
                  className="btn btn-list_of_services"
                >
                  <span className="bold">
                    Bližší informace o invalidním důchodu
                  </span>
                </a>
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
                  Příspěvek na mobilitu<span className="pruhledne">11</span>
                  <sub>
                    Příspěvek na mobilitu mohou využít držitelé průkazů ZTP a
                    ZTTP kteří se dopravují například k lékaři.
                  </sub>
                </button>
              </h2>
              <div
                id="flush-collapse4"
                className="accordion-collapse collapse accordion__flex--colum"
                aria-labelledby="flush-heading4"
                data-bs-parent="#flush-heading4"
              >
                <div className="accordion-body  accordion__flex--column">
                  <p>
                    Příspěvek na mobilitu je definován jako opakující se
                    nároková dávka, na kterou mají nárok osoby starší jednoho
                    roku, které jsou zároveň držiteli průkazů ZTP nebo ZTTP,
                    nebo kterým byly přiznány mimořádné výhody II. a III.
                    stupně. Příspěvek na mobilitu formulář je třeba vyzvednout
                    na krajských pobočkách úřadu práce.
                  </p>
                  <p>
                    {' '}
                    Výše dávky: 550 Kč měsíčně. Vyplácí se tzv. zpětně, to
                    znamená do konce kalendářního měsíce následujícího po
                    kalendářním měsíci, za který náleží. Na žádost příjemce může
                    být příspěvek na mobilitu vyplácen jednou splátkou vždy za 3
                    kalendářní měsíce, za které náležel.
                  </p>
                </div>
                <a
                  href="https://www.mpsv.cz/-/prispevek-na-mobilitu"
                  target="_blank"
                  className="btn btn-list_of_services"
                >
                  <span className="bold">
                    Bližší informace o příspěvku na mobilitu
                  </span>
                </a>
              </div>
            </div>

            <div className="accordion-item">
              <h2 className="accordion-header" id="flush-heading6">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapse6"
                  aria-expanded="false"
                  aria-controls="flush-collapse4"
                >
                  Další druhy podpory<span className="pruhledne">11</span>
                  <sub>
                    Úprava pracovní doby, podpora v nezaměstnanosti, náhradní
                    doba pojištění
                  </sub>
                </button>
              </h2>
              <div
                id="flush-collapse6"
                className="accordion-collapse collapse accordion__flex--colum"
                aria-labelledby="flush-heading6"
                data-bs-parent="#flush-heading6"
              >
                <div className="accordion-body  accordion__flex--column">
                  <p>Nárok na podporu v nezaměstnanosti</p>
                  <p>
                    Doba péče se hodnotí jako zaměstnání a započítává se do doby
                    pojištění pro důchod. Po ukončení péče máte tudíž nárok na
                    podporu v nezaměstnanosti, pokud jste během dvou předchozích
                    let platili sociální pojištění alespoň dvanáct měsíců. Stát
                    během doby péče sociální pojištění sice nehradí, doba péče
                    se však započítává stejně jako zaměstnání do doby pojištění
                    pro důchod.{' '}
                  </p>
                  <p>Úprava týdenní pracovní doby</p>
                  <p>
                    Pokud pečujete o osobu závislou na péči jiné fyzické osoby,
                    můžete si neomezeně přivydělat, i pracovat na plný úvazek.
                    Pokud zaměstnanec prokáže, že převážně sám dlouhodobě pečuje
                    o osobu, která se považuje za osobu závislou na pomoci jiné
                    fyzické osoby v II., III. nebo IV. stupni závislosti, může
                    požádat o kratší pracovní dobu nebo jinou vhodnou úpravu
                    stanovené týdenní pracovní doby. Zaměstnavatel je povinen
                    vaší žádosti vyhovět, nebrání-li tomu vážné provozní důvody.
                  </p>

                  <p>Náhradní doba pojištění pro důchod</p>
                  <p>
                    Dobu důchodové pojištění lze získat výdělečnou činností,
                    dobrovolnými platbami nebo tzv. náhradními dobami pojištění.
                    Mezi náhradní doby pojištění patří např.: doba péče o
                    závislé osoby do 10 let věku v I. stupni závislosti nebo
                    doba péče o závislé osoby na péči jiné fyzické osoby ve II.,
                    III. nebo IV. stupni závislosti
                  </p>
                </div>
                <a
                  href="https://socialnipolitika.eu/2021/01/na-co-maji-pecujici-osoby-narok/"
                  target="_blank"
                  className="btn btn-list_of_services"
                >
                  <span className="bold">
                    Bližší informace o dalších podporách
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
