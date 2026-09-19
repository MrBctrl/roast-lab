import {
  useEffect,
  useLayoutEffect,
  useRef,
} from "react";

import { gsap } from "gsap";

export function useRoastVisuals({
  scopeRef,
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
}) {
  const controlsRef = useRef(null);

  /*
    ========================================
    CREATE GSAP CONTROLLERS ONCE
    ========================================
  */

  useLayoutEffect(() => {
    if (
      !scopeRef.current ||
      !beanRef.current ||
      !bodyRef.current ||
      !ringRef.current ||
      !heatRef.current ||
      !progressRef.current ||
      !warmthRef.current ||
      !acidityRef.current ||
      !sweetnessRef.current ||
      !aromaRef.current ||
      !highlightRef.current
    ) {
      return;
    }

    const ctx = gsap.context(() => {
      /*
        Make sure the SVG geometry starts clean.
        We deliberately avoid scaling the circular
        calibration elements.
      */

      gsap.set(
        [
          ringRef.current,
          progressRef.current,
          heatRef.current,
          sweetnessRef.current,
          acidityRef.current,
          aromaRef.current,
        ],
        {
          scaleX: 1,
          scaleY: 1,
        },
      );

      controlsRef.current = {
        /* ========================================
           ROAST
           ======================================== */

        warmth: gsap.quickTo(
          warmthRef.current,
          "opacity",
          {
            duration: 0.35,
            ease: "power2.out",
          },
        ),

        heatOpacity: gsap.quickTo(
          heatRef.current,
          "opacity",
          {
            duration: 0.35,
            ease: "power2.out",
          },
        ),

        ringOpacity: gsap.quickTo(
          ringRef.current,
          "opacity",
          {
            duration: 0.3,
            ease: "power2.out",
          },
        ),

        progress: gsap.quickTo(
          progressRef.current,
          "strokeDashoffset",
          {
            duration: 0.35,
            ease: "power2.out",
          },
        ),

        /* ========================================
           BODY
           ======================================== */

        bodyScaleX: gsap.quickTo(
          bodyRef.current,
          "scaleX",
          {
            duration: 0.45,
            ease: "power2.out",
          },
        ),

        bodyScaleY: gsap.quickTo(
          bodyRef.current,
          "scaleY",
          {
            duration: 0.45,
            ease: "power2.out",
          },
        ),

        /* ========================================
           ACIDITY
           ======================================== */

        acidityOpacity: gsap.quickTo(
          acidityRef.current,
          "opacity",
          {
            duration: 0.3,
            ease: "power2.out",
          },
        ),

        acidityRotation: gsap.quickTo(
          acidityRef.current,
          "rotation",
          {
            duration: 0.7,
            ease: "power2.out",
          },
        ),

        /*
          Brightness goes directly onto the bean.
        */

        beanBrightness: gsap.quickTo(
          beanRef.current,
          "--bean-brightness",
          {
            duration: 0.35,
            ease: "power2.out",
          },
        ),

        /* ========================================
           SWEETNESS
           ======================================== */

        sweetnessOpacity: gsap.quickTo(
          sweetnessRef.current,
          "opacity",
          {
            duration: 0.45,
            ease: "power2.out",
          },
        ),

        sweetnessHighlightOpacity:
          gsap.quickTo(
            highlightRef.current,
            "opacity",
            {
              duration: 0.35,
              ease: "power2.out",
            },
          ),

        /* ========================================
           AROMA
           ======================================== */

        aromaOpacity: gsap.quickTo(
          aromaRef.current,
          "opacity",
          {
            duration: 0.4,
            ease: "power2.out",
          },
        ),

        aromaY: gsap.quickTo(
          aromaRef.current,
          "y",
          {
            duration: 0.6,
            ease: "power2.out",
          },
        ),

        aromaRotation: gsap.quickTo(
          aromaRef.current,
          "rotation",
          {
            duration: 0.7,
            ease: "power2.out",
          },
        ),
      };
    }, scopeRef);

    return () => {
      controlsRef.current = null;
      ctx.revert();
    };
  }, [
    scopeRef,
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
  ]);

  /*
    ========================================
    REACT STATE → VISUAL SYSTEM
    ========================================
  */

  useEffect(() => {
    if (!controlsRef.current) {
      return;
    }

    /* ========================================
       ROAST
       ======================================== */

    const warmth =
      (roast / 100) * 0.28;

    const ringOpacity =
      0.25 +
      (roast / 100) * 0.35;

    controlsRef.current.warmth(
      warmth,
    );

    controlsRef.current.heatOpacity(
      Math.min(
        0.32,
        warmth + 0.04,
      ),
    );

    controlsRef.current.ringOpacity(
      ringOpacity,
    );

    controlsRef.current.progress(
      1 - roast / 100,
    );

    /* ========================================
       BODY
       ======================================== */

    const bodyScaleX =
      0.94 +
      (body / 100) * 0.12;

    const bodyScaleY =
      0.97 +
      (body / 100) * 0.06;

    controlsRef.current.bodyScaleX(
      bodyScaleX,
    );

    controlsRef.current.bodyScaleY(
      bodyScaleY,
    );

    /* ========================================
       ACIDITY
       ======================================== */

    const acidityOpacity =
      0.08 +
      (acidity / 100) * 0.82;

    const acidityRotation =
      (acidity - 50) * 0.12;

    const acidityBrightness =
      0.94 +
      (acidity / 100) * 0.22;

    controlsRef.current.acidityOpacity(
      acidityOpacity,
    );

    controlsRef.current.acidityRotation(
      acidityRotation,
    );

    controlsRef.current.beanBrightness(
      acidityBrightness,
    );

    /* ========================================
       SWEETNESS
       ======================================== */

    const sweetnessOpacity =
      (sweetness / 100) * 0.72;

    const sweetnessHighlightOpacity =
      0.05 +
      (sweetness / 100) * 0.5;

    controlsRef.current.sweetnessOpacity(
      sweetnessOpacity,
    );

    controlsRef.current.sweetnessHighlightOpacity(
      sweetnessHighlightOpacity,
    );

    /* ========================================
       AROMA
       ======================================== */

    const aromaOpacity =
      (aroma / 100) * 0.9;

    const aromaY =
      -(aroma / 100) * 12;

    const aromaRotation =
      (aroma - 50) * 0.18;

    controlsRef.current.aromaOpacity(
      aromaOpacity,
    );

    controlsRef.current.aromaY(
      aromaY,
    );

    controlsRef.current.aromaRotation(
      aromaRotation,
    );

    /* ========================================
       BEAN COLOR
       ======================================== */

    gsap.to(beanRef.current, {
      fill: beanColor,
      duration: 0.3,
      ease: "power2.out",
      overwrite: "auto",
    });
  }, [
    roast,
    body,
    acidity,
    sweetness,
    aroma,
    beanColor,
    beanRef,
  ]);
}