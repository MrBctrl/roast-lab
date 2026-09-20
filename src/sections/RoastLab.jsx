import { useLayoutEffect, useRef, useState } from "react";
import { gsap } from "gsap";

import BeanVisual from "../components/BeanVisual";
import CalibrationSlider from "../components/CalibrationSlider";
import ProfileResult from "../components/ProfileResult";
import RoastSpectrum from "../components/RoastSpectrum";

import {
  getBeanColor,
  getRoastProfile,
} from "../data/roastProfiles";

import { defaultCalibration } from "../data/calibrationDefaults";

import {
  getCoffeeProfile,
  getFlavorNotes,
  getRecommendedProduct,
  getProfileDescription,
} from "../data/profileEngine";

import { useRoastVisuals } from "../hooks/useRoastVisuals";

function RoastLab() {
  /*
    ========================================
    MAIN CALIBRATION STATE
    ========================================
  */

  const [calibration, setCalibration] = useState(
    defaultCalibration,
  );

  /*
    Controls whether the user is viewing
    the calibration interface or the
    completed profile.
  */

  const [isLocked, setIsLocked] = useState(false);

  /*
    ========================================
    DOM REFS
    ========================================
  */

  const labRef = useRef(null);

  const beanRef = useRef(null);
  const bodyRef = useRef(null);
  const ringRef = useRef(null);
  const heatRef = useRef(null);
  const progressRef = useRef(null);
  const warmthRef = useRef(null);

  const acidityRef = useRef(null);
  const sweetnessRef = useRef(null);
  const aromaRef = useRef(null);
  const highlightRef = useRef(null);

  /*
    ========================================
    CALIBRATION UPDATE
    ========================================
    
    Changes only the selected variable
    while preserving the rest.
  */

  const updateCalibration = (
    key,
    value,
  ) => {
    setCalibration((current) => ({
      ...current,
      [key]: value,
    }));
  };

  /*
    ========================================
    CURRENT VALUES
    ========================================
  */

  const roast = calibration.roast;
  const body = calibration.body;
  const acidity = calibration.acidity;
  const sweetness = calibration.sweetness;
  const aroma = calibration.aroma;

  /*
    ========================================
    DERIVED DATA
    ========================================
  */

  const roastProfile = getRoastProfile(
    roast,
  );

  const beanColor = getBeanColor(
    roast,
  );

  const coffeeProfile =
    getCoffeeProfile(
      calibration,
    );

  const flavorNotes =
    getFlavorNotes(
      calibration,
    );

  const recommendedProduct =
    getRecommendedProduct(
      calibration,
    );

  const profileDescription =
    getProfileDescription(
      calibration,
    );

  /*
    ========================================
    VISUAL ENGINE
    ========================================

    React provides the current values.
    GSAP handles the visual response.
  */

  useRoastVisuals({
    scopeRef: labRef,

    roast,
    body,
    acidity,
    sweetness,
    aroma,

    beanColor,

    beanRef,
    bodyRef,
    ringRef,
    heatRef,
    progressRef,
    warmthRef,

    acidityRef,
    sweetnessRef,
    aromaRef,
    highlightRef,
  });

  useLayoutEffect(() => {
  if (!isLocked || !labRef.current) {
    return;
  }

  const ctx = gsap.context(() => {
    const bean = beanRef.current;
    const ring = ringRef.current;
    const highlight = highlightRef.current;

    const timeline = gsap.timeline({
      defaults: {
        ease: "power2.out",
      },
    });

    if (bean) {
      timeline
        .to(bean, {
          scale: "+=0.035",
          duration: 0.28,
        })
        .to(bean, {
          scale: "-=0.035",
          duration: 0.38,
          ease: "power2.inOut",
        });
    }

    if (ring) {
      timeline
        .to(
          ring,
          {
            scale: "+=0.07",
            duration: 0.32,
            ease: "power2.out",
          },
          "<",
        )
        .to(
          ring,
          {
            scale: "-=0.07",
            duration: 0.42,
            ease: "power2.inOut",
          },
        );
    }

    if (highlight) {
      timeline
        .to(
          highlight,
          {
            scale: "+=0.045",
            duration: 0.28,
          },
          "<",
        )
        .to(
          highlight,
          {
            scale: "-=0.045",
            duration: 0.38,
          },
        );
    }
  }, labRef);

  return () => ctx.revert();
}, [isLocked]);

  /*
    ========================================
    TYPOGRAPHY RESPONSE
    ========================================
  */

  const headingTracking =
    -0.055 -
    (roast / 100) * 0.012;

  return (
    <section
      id="lab"
      ref={labRef}
      className="roast-lab"
    >
      {/* ======================================
          ROAST ATMOSPHERE
          ====================================== */}

      <div
        ref={warmthRef}
        className="roast-lab__warmth"
        aria-hidden="true"
      />

      {/* ======================================
          MAIN STAGE
          ====================================== */}

      <div
        className={`roast-lab__stage ${
          isLocked
            ? "roast-lab__stage--locked"
            : ""
        }`}
      >
        {/* ====================================
            CALIBRATION EXPERIENCE
            ==================================== */}

        <div className="roast-lab__inner">
          {/* ==================================
              CONTROLS / INFORMATION
              ================================== */}

          <div className="roast-lab__controls">
            <p className="roast-lab__eyebrow">
              ROAST LAB / CALIBRATION
            </p>

            <div className="roast-lab__heading-row">
              <h2
                style={{
                  "--heading-tracking": `${headingTracking}em`,
                }}
              >
                Start with the variables.
              </h2>

              <span className="roast-lab__profile-id">
                PROFILE 001
              </span>
            </div>

            <p className="roast-lab__intro">
              Adjust the variables and watch
              the specimen respond.
            </p>

            {/* ==================================
                ROAST
                ================================== */}

            <CalibrationSlider
              id="roast"
              label="ROAST"
              value={calibration.roast}
              onChange={(value) =>
                updateCalibration(
                  "roast",
                  value,
                )
              }
              leftLabel="LIGHT"
              rightLabel="DARK"
            />

            {/* ==================================
                BODY
                ================================== */}

            <CalibrationSlider
              id="body"
              label="BODY"
              value={calibration.body}
              onChange={(value) =>
                updateCalibration(
                  "body",
                  value,
                )
              }
              leftLabel="LIGHT"
              rightLabel="HEAVY"
            />

            {/* ==================================
                ACIDITY
                ================================== */}

            <CalibrationSlider
              id="acidity"
              label="ACIDITY"
              value={calibration.acidity}
              onChange={(value) =>
                updateCalibration(
                  "acidity",
                  value,
                )
              }
              leftLabel="MELLOW"
              rightLabel="BRIGHT"
            />

            {/* ==================================
                SWEETNESS
                ================================== */}

            <CalibrationSlider
              id="sweetness"
              label="SWEETNESS"
              value={calibration.sweetness}
              onChange={(value) =>
                updateCalibration(
                  "sweetness",
                  value,
                )
              }
              leftLabel="DRY"
              rightLabel="SWEET"
            />

            {/* ==================================
                AROMA
                ================================== */}

            <CalibrationSlider
              id="aroma"
              label="AROMA"
              value={calibration.aroma}
              onChange={(value) =>
                updateCalibration(
                  "aroma",
                  value,
                )
              }
              leftLabel="FLORAL"
              rightLabel="NUTTY"
            />

            {/* ==================================
                CURRENT PROFILE
                ================================== */}

            <div className="roast-lab__readout">
              <div className="roast-lab__readout-top">
                <span>
                  CURRENT PROFILE
                </span>

                <strong>
                  {String(roast).padStart(
                    3,
                    "0",
                  )}
                </strong>
              </div>

              <h3>
                {roastProfile.level}
              </h3>

              <p>
                {roastProfile.description}
              </p>

              {/* ==================================
                  VISUAL PROFILE
                  ================================== */}

              <RoastSpectrum
                roast={roast}
              />

              {/* ==================================
                  TECHNICAL PROFILE
                  ================================== */}

              <div className="roast-lab__technical-profile">
                <div>
                  <span>BODY</span>

                  <strong>
                    {coffeeProfile.body}
                  </strong>
                </div>

                <div>
                  <span>ACIDITY</span>

                  <strong>
                    {coffeeProfile.acidity}
                  </strong>
                </div>

                <div>
                  <span>SWEETNESS</span>

                  <strong>
                    {coffeeProfile.sweetness}
                  </strong>
                </div>

                <div>
                  <span>AROMA</span>

                  <strong>
                    {coffeeProfile.aroma}
                  </strong>
                </div>
              </div>

              {/* ==================================
                  TASTING NOTES
                  ================================== */}

              <div className="roast-lab__notes">
                {roastProfile.notes.map(
                  (note) => (
                    <span key={note}>
                      {note}
                    </span>
                  ),
                )}
              </div>

              {/* ==================================
                  PRODUCT MATCH
                  ================================== */}

              <div className="roast-lab__match">
                <span>
                  CURRENT MATCH
                </span>

                <strong>
                  {recommendedProduct.name}
                </strong>
              </div>

              {/* ==================================
                  LOCK PROFILE
                  ================================== */}

              <button
                type="button"
                className="roast-lab__lock"
                onClick={() => {
                  console.log("LOCK CLICKED");
                  setIsLocked(true);
                }}
              >
                LOCK PROFILE

                <span aria-hidden="true">
                  →
                </span>
              </button>
            </div>
          </div>

          {/* ==================================
              BEAN VISUAL
              ================================== */}

          <div className="roast-lab__visual">
            <BeanVisual
              beanRef={beanRef}
              bodyRef={bodyRef}
              ringRef={ringRef}
              heatRef={heatRef}
              progressRef={progressRef}
              acidityRef={acidityRef}
              sweetnessRef={sweetnessRef}
              aromaRef={aromaRef}
              highlightRef={highlightRef}
            />
          </div>
        </div>

        {/* ====================================
            PROFILE RESULT
            ==================================== */}

        <ProfileResult
          calibration={calibration}
          profile={coffeeProfile}
          notes={flavorNotes}
          product={recommendedProduct}
          description={profileDescription}
          onReset={() =>
            setIsLocked(false)
          }
        />
      </div>
    </section>
  );
}

export default RoastLab;