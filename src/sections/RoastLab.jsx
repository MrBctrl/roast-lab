import { useRef, useState } from "react";

import BeanVisual from "../components/BeanVisual";
import CalibrationSlider from "../components/CalibrationSlider";
import RoastSpectrum from "../components/RoastSpectrum";

import {
  getBeanColor,
  getRoastProfile,
} from "../data/roastProfiles";

import { defaultCalibration } from "../data/calibrationDefaults";
import { getCoffeeProfile } from "../data/profileEngine";

import { useRoastVisuals } from "../hooks/useRoastVisuals";

function RoastLab() {
  const [calibration, setCalibration] = useState(
    defaultCalibration,
  );

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
    Update one calibration value
    without touching the others.
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

  const roast = calibration.roast;
  const body = calibration.body;
  const acidity = calibration.acidity;
  const sweetness = calibration.sweetness;
  const aroma = calibration.aroma;

  /*
    Derived values
  */
  const roastProfile =
    getRoastProfile(roast);

  const beanColor =
    getBeanColor(roast);

  const coffeeProfile =
    getCoffeeProfile(calibration);

  /*
    Visual engine
  */
  useRoastVisuals({
    scopeRef: labRef,
    roast,
    body,
    acidity,
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

  const headingTracking =
    -0.055 -
    (roast / 100) * 0.012;

  return (
    <section
      id="lab"
      ref={labRef}
      className="roast-lab"
    >
      <div
        ref={warmthRef}
        className="roast-lab__warmth"
        aria-hidden="true"
      />

      <div className="roast-lab__inner">
        {/* ========================================
            CONTROLS / INFORMATION
            ======================================== */}

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

          {/* ========================================
              ROAST
              ======================================== */}

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

          {/* ========================================
              BODY
              ======================================== */}

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

          {/* ========================================
              CURRENT PROFILE
              ======================================== */}

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

            <RoastSpectrum
              roast={roast}
            />

            {/* ========================================
                TECHNICAL PROFILE
                ======================================== */}

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

            {/* ========================================
                TASTING NOTES
                ======================================== */}

            <div className="roast-lab__notes">
              {roastProfile.notes.map(
                (note) => (
                  <span key={note}>
                    {note}
                  </span>
                ),
              )}
            </div>

            {/* ========================================
                PRODUCT MATCH
                ======================================== */}

            <div className="roast-lab__match">
              <span>
                MATCHED ROAST
              </span>

              <strong>
                {roastProfile.product}
              </strong>
            </div>
          </div>
        </div>

        {/* ========================================
            BEAN VISUAL
            ======================================== */}

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
    </section>
  );
}

export default RoastLab;