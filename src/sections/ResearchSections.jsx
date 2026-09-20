const variables = [
  {
    number: "01",
    name: "ROAST",
    description:
      "Controls depth, heat and the overall character of the cup.",
    left: "LIGHT",
    right: "DARK",
  },
  {
    number: "02",
    name: "BODY",
    description:
      "Controls weight, texture and how substantial the cup feels.",
    left: "LIGHT",
    right: "HEAVY",
  },
  {
    number: "03",
    name: "ACIDITY",
    description:
      "Controls brightness, energy and the shape of the finish.",
    left: "MELLOW",
    right: "BRIGHT",
  },
  {
    number: "04",
    name: "SWEETNESS",
    description:
      "Controls balance, roundness and how long the sweetness stays.",
    left: "DRY",
    right: "SWEET",
  },
  {
    number: "05",
    name: "AROMA",
    description:
      "Controls fragrance, complexity and the character above the cup.",
    left: "FLORAL",
    right: "NUTTY",
  },
];

const collection = [
  {
    id: "01",
    name: "ORIGIN 01",
    description:
      "Bright, delicate and expressive.",
    image: "/images/origin-01.jpg",
    roast: "LIGHT",
    body: "LIGHT",
    acidity: "BRIGHT",
    sweetness: "MODERATE",
    aroma: "FRUITY",
  },
  {
    id: "02",
    name: "DAILY 02",
    description:
      "Balanced, familiar and easy to return to.",
    image: "/images/daily-02.jpg",
    roast: "MEDIUM",
    body: "MEDIUM",
    acidity: "BALANCED",
    sweetness: "SWEET",
    aroma: "FRUITY",
  },
  {
    id: "03",
    name: "NIGHT SHIFT 03",
    description:
      "Deep, heavy and unapologetically dark.",
    image: "/images/night-shift-03.jpg",
    roast: "DARK",
    body: "HEAVY",
    acidity: "LOW",
    sweetness: "DEEP",
    aroma: "ROASTED",
  },
  {
    id: "04",
    name: "RESERVE 04",
    description:
      "Complex, aromatic and deliberately unusual.",
    image: "/images/reserve-04.jpg",
    roast: "VARIABLE",
    body: "MEDIUM",
    acidity: "BRIGHT",
    sweetness: "HIGH",
    aroma: "COMPLEX",
  },
];

const processSteps = [
  {
    number: "01",
    title: "CALIBRATE",
    description:
      "Set the five variables and define the character you want from the cup.",
  },
  {
    number: "02",
    title: "OBSERVE",
    description:
      "Watch the specimen respond as each variable shifts the visual profile.",
  },
  {
    number: "03",
    title: "LOCK",
    description:
      "Commit the calibration once the profile feels right.",
  },
  {
    number: "04",
    title: "MATCH",
    description:
      "The system interprets your variables and identifies the closest roast profile.",
  },
];

const notes = [
  {
    number: "004",
    title: "WHY ACIDITY MATTERS",
    excerpt:
      "Acidity is not simply sourness. In coffee, it creates lift, brightness and structure.",
    image: "/images/lab-note-acidity.jpg",
  },
  {
    number: "003",
    title: "ROAST CHANGES EVERYTHING",
    excerpt:
      "As roast depth increases, the balance between acidity, sweetness and roasted character shifts.",
    image: "/images/lab-note-roast.jpg",
  },
];

export function LabOverview() {
  return (
    <section
      id="research"
      className="research-overview"
    >
      <div className="research-overview__top">
        <p className="research-overview__eyebrow">
          COFFEE RESEARCH / THE VARIABLES
        </p>

        <span className="research-overview__index">
          SYSTEM 01 / 05
        </span>
      </div>

      <div className="research-overview__heading">
        <h2>
          THE CUP
          <br />
          IS A SYSTEM.
        </h2>

        <p>
          Coffee is influenced by more than roast level.
          Roast Lab treats the cup as a combination of
          interacting variables — each one shaping the
          final character.
        </p>
      </div>

      <div className="research-variables">
        {variables.map((variable) => (
          <article
            className="research-variable"
            key={variable.number}
          >
            <div className="research-variable__top">
              <span>{variable.number}</span>

              <span>
                {variable.left} / {variable.right}
              </span>
            </div>

            <h3>{variable.name}</h3>

            <p>{variable.description}</p>

            <div className="research-variable__line">
              <span />
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export function CollectionSection() {
  return (
    <section
      id="collection"
      className="collection-section"
    >
      <div className="collection-section__header">
        <div>
          <p className="section-eyebrow">
            ROAST LAB / COLLECTION
          </p>

          <h2>
            FOUR WAYS
            <br />
            TO MEET THE CUP.
          </h2>
        </div>

        <p>
          Four fictional profiles generated around
          different coffee personalities.
        </p>
      </div>

      <div className="collection-grid">
        {collection.map((item) => (
          <article
            className="collection-card"
            key={item.id}
          >
            <div className="collection-card__image">
              <img
                src={item.image}
                alt={`${item.name} coffee profile`}
              />

              <span>
                {item.id}
              </span>
            </div>

            <div className="collection-card__body">
              <div className="collection-card__title">
                <div>
                  <span>PROFILE {item.id}</span>

                  <h3>{item.name}</h3>
                </div>

                <span>→</span>
              </div>

              <p>
                {item.description}
              </p>

              <div className="collection-card__specs">
                <span>
                  ROAST
                  <strong>
                    {item.roast}
                  </strong>
                </span>

                <span>
                  BODY
                  <strong>
                    {item.body}
                  </strong>
                </span>

                <span>
                  ACIDITY
                  <strong>
                    {item.acidity}
                  </strong>
                </span>

                <span>
                  AROMA
                  <strong>
                    {item.aroma}
                  </strong>
                </span>
              </div>

              <a
                href="#lab"
                className="collection-card__link"
              >
                CALIBRATE THIS PROFILE
                <span>→</span>
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export function ProcessSection() {
  return (
    <section
      id="process"
      className="process-section"
    >
      <div className="process-section__heading">
        <p className="section-eyebrow">
          ROAST LAB / PROCESS
        </p>

        <h2>
          FROM VARIABLE
          <br />
          TO CUP.
        </h2>
      </div>

      <div className="process-list">
        {processSteps.map((step) => (
          <article
            className="process-step"
            key={step.number}
          >
            <span className="process-step__number">
              {step.number}
            </span>

            <h3>{step.title}</h3>

            <p>{step.description}</p>

            <span className="process-step__arrow">
              ↗
            </span>
          </article>
        ))}
      </div>

      <div className="process-section__footer">
        <span>INPUT</span>
        <span>RESPONSE</span>
        <span>PROFILE</span>
      </div>
    </section>
  );
}

export function LabNotesSection() {
  return (
    <section
      id="notes"
      className="lab-notes-section"
    >
      <div className="lab-notes-section__heading">
        <div>
          <p className="section-eyebrow">
            ROAST LAB / FIELD NOTES
          </p>

          <h2>
            OBSERVATIONS
            <br />
            FROM THE LAB.
          </h2>
        </div>

        <p>
          Small pieces of coffee research, process
          and calibration thinking.
        </p>
      </div>

      <div className="lab-notes-grid">
        {notes.map((note) => (
          <article
            className="lab-note"
            key={note.number}
          >
            <div className="lab-note__image">
              <img
                src={note.image}
                alt={note.title}
              />

              <span>
                NOTE / {note.number}
              </span>
            </div>

            <div className="lab-note__body">
              <span>FIELD NOTE {note.number}</span>

              <h3>{note.title}</h3>

              <p>{note.excerpt}</p>

              <button type="button">
                READ NOTE
                <span>→</span>
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export function SiteFooter() {
  return (
    <footer className="research-footer">
      <div className="research-footer__top">
        <p className="section-eyebrow">
          ROAST LAB / FIELD TEST 001
        </p>

        <span>
          COFFEE RESEARCH SYSTEM / V1.0
        </span>
      </div>

      <div className="research-footer__main">
        <h2>
          READY
          <br />
          TO CALIBRATE?
        </h2>

        <a href="#lab">
          ENTER THE LAB
          <span>→</span>
        </a>
      </div>

      <div className="research-footer__bottom">
        <div>
          <strong>ROAST LAB</strong>
          <span>
            Coffee Research / Experimental System
          </span>
        </div>

        <nav>
          <a href="#research">RESEARCH</a>
          <a href="#lab">LAB</a>
          <a href="#collection">COLLECTION</a>
          <a href="#process">PROCESS</a>
          <a href="#notes">NOTES</a>
        </nav>

        <span>
          © 2026 ROAST LAB
        </span>
      </div>
    </footer>
  );
}

export default function ResearchSections() {
  return null;
}