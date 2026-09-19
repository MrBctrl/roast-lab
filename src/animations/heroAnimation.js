import { gsap } from "gsap";

export function createHeroAnimation(scope) {
  if (!scope?.current) {
    return () => {};
  }

  const ctx = gsap.context(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefersReducedMotion) {
      gsap.set(
        [
          ".hero__eyebrow",
          ".hero__title",
          ".hero__description",
          ".hero__button",
          ".bean-visual__svg",
          ".bean-visual__label",
          ".bean-visual__coordinates",
          ".bean-visual__ring",
        ],
        {
          clearProps: "all",
        },
      );

      return;
    }

    const intro = gsap.timeline({
      defaults: {
        ease: "power3.out",
      },
    });

    intro
      .from(".hero__eyebrow", {
        opacity: 0,
        y: 20,
        duration: 0.8,
      })
      .from(
        ".hero__title",
        {
          opacity: 0,
          y: 60,
          duration: 1.1,
        },
        "-=0.45",
      )
      .from(
        ".hero__description",
        {
          opacity: 0,
          y: 24,
          duration: 0.8,
        },
        "-=0.55",
      )
      .from(
        ".hero__button",
        {
          opacity: 0,
          y: 18,
          duration: 0.7,
        },
        "-=0.45",
      )
      .from(
        ".bean-visual__svg",
        {
          opacity: 0,
          scale: 0.88,
          rotation: -6,
          duration: 1.4,
        },
        "-=1",
      )
      .from(
        ".bean-visual__label",
        {
          opacity: 0,
          y: 10,
          duration: 0.5,
        },
        "-=0.8",
      )
      .from(
        ".bean-visual__coordinates",
        {
          opacity: 0,
          y: -10,
          duration: 0.5,
        },
        "-=0.65",
      )
      .from(
        ".bean-visual__ring",
        {
          opacity: 0,
          scale: 0.8,
          transformOrigin: "center center",
          duration: 1,
        },
        "-=0.9",
      );

    gsap.to(".bean-visual__svg", {
      rotation: 2,
      y: -8,
      duration: 4,
      ease: "sine.inOut",
      repeat: -1,
      yoyo: true,
    });
  }, scope);

  return () => ctx.revert();
}