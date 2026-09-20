import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";

function ProfileResult({
  calibration,
  profile,
  notes,
  product,
  description,
  onReset,
  isLocked,
}) {
  const resultRef = useRef(null);

  useLayoutEffect(() => {
    if (!isLocked || !resultRef.current) {
      return;
    }

    const ctx = gsap.context(() => {
      gsap.set(resultRef.current, {
        opacity: 0,
        visibility: "visible",
        pointerEvents: "auto",
      });

      const timeline = gsap.timeline({
        delay: 0.35,
        defaults: {
          ease: "power3.out",
        },
      });

      timeline
        .to(resultRef.current, {
          opacity: 1,
          duration: 0.45,
        })

        .from(
          ".profile-result__header",
          {
            opacity: 0,
            y: 14,
            duration: 0.45,
          },
          "-=0.15",
        )

        .from(
          ".profile-result__headline > span",
          {
            opacity: 0,
            y: 12,
            duration: 0.35,
          },
          "-=0.18",
        )

        .from(
          ".profile-result__headline h2",
          {
            opacity: 0,
            y: 55,
            duration: 0.75,
          },
          "-=0.15",
        )

        .from(
          ".profile-result__description",
          {
            opacity: 0,
            y: 20,
            duration: 0.5,
          },
          "-=0.45",
        )

        .from(
          ".profile-result__specs > div",
          {
            opacity: 0,
            y: 18,
            stagger: 0.08,
            duration: 0.4,
          },
          "-=0.2",
        )

        .from(
          ".profile-result__notes > span",
          {
            opacity: 0,
            y: 10,
            duration: 0.3,
          },
          "-=0.15",
        )

        .from(
          ".profile-result__notes > div span",
          {
            opacity: 0,
            y: 10,
            stagger: 0.06,
            duration: 0.3,
          },
          "-=0.12",
        )

        .from(
          ".profile-result__match",
          {
            opacity: 0,
            y: 18,
            duration: 0.45,
          },
          "-=0.2",
        )

        .from(
          ".profile-result__reset",
          {
            opacity: 0,
            y: 12,
            duration: 0.35,
          },
          "-=0.15",
        );
    }, resultRef);

    return () => ctx.revert();
  }, [isLocked]);

  return (
    <div
      ref={resultRef}
      className="profile-result"
    >
      <div className="profile-result__header">
        <p className="profile-result__eyebrow">
          ROAST LAB / PROFILE LOCKED
        </p>

        <span className="profile-result__id">
          PROFILE {String(calibration.roast).padStart(3, "0")}
        </span>
      </div>

      <div className="profile-result__main">
        <div className="profile-result__headline">
          <span>YOUR COFFEE</span>

          <h2>
            CALIBRATION
            <br />
            COMPLETE.
          </h2>
        </div>

        <div className="profile-result__description">
          <p>{description}</p>
        </div>
      </div>

      <div className="profile-result__specs">
        <div>
          <span>ROAST</span>
          <strong>{profile.roast}</strong>
        </div>

        <div>
          <span>BODY</span>
          <strong>{profile.body}</strong>
        </div>

        <div>
          <span>ACIDITY</span>
          <strong>{profile.acidity}</strong>
        </div>

        <div>
          <span>SWEETNESS</span>
          <strong>{profile.sweetness}</strong>
        </div>

        <div>
          <span>AROMA</span>
          <strong>{profile.aroma}</strong>
        </div>
      </div>

      <div className="profile-result__bottom">
        <div className="profile-result__notes">
          <span>FLAVOR NOTES</span>

          <div>
            {notes.map((note) => (
              <span key={note}>
                {note}
              </span>
            ))}
          </div>
        </div>

        <div className="profile-result__match">
          <span>MATCHED ROAST</span>

          <strong>{product.name}</strong>

          <p>{product.description}</p>
        </div>
      </div>

      <button
        type="button"
        className="profile-result__reset"
        onClick={onReset}
      >
        ← RECALIBRATE
      </button>
    </div>
  );
}

export default ProfileResult;