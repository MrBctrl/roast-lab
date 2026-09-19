import { useLayoutEffect, useRef } from "react";

import BeanVisual from "../components/BeanVisual";
import { createHeroAnimation } from "../animations/heroAnimation";

function Hero() {
  const heroRef = useRef(null);

  useLayoutEffect(() => {
    const cleanup = createHeroAnimation(heroRef);

    return cleanup;
  }, []);

  return (
    <section ref={heroRef} className="hero">
      <div className="hero__content">
        <p className="hero__eyebrow">
          COFFEE RESEARCH / FIELD TEST 001
        </p>

        <h1 className="hero__title">
          TUNE
          <br />
          YOUR CUP.
        </h1>

        <p className="hero__description">
          Coffee isn't one-size-fits-all.
          <br />
         Adjust the variables and watch the specimen respond.
        </p>

        <a href="#lab" className="hero__button">
          ENTER THE LAB <span aria-hidden="true">→</span>
        </a>
      </div>

      <div className="hero__visual">
        <BeanVisual />
      </div>
    </section>
  );
}

export default Hero;