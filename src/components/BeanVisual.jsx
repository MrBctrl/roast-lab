function BeanVisual({
  beanRef,
  ringRef,
  heatRef,
  progressRef,
  bodyRef,
  acidityRef,
  sweetnessRef,
  aromaRef,
  highlightRef,
}) {
  return (
    <div className="bean-visual" aria-hidden="true">
      <div className="bean-visual__label">
        SPECIMEN 001
      </div>

      <svg
        className="bean-visual__svg"
        viewBox="0 0 500 500"
        role="presentation"
      >
        <defs>
          <radialGradient
            id="sweetnessGlow"
            cx="50%"
            cy="50%"
            r="50%"
          >
            <stop
              offset="0%"
              className="bean-visual__sweetness-stop"
            />

            <stop
              offset="55%"
              className="bean-visual__sweetness-stop"
              stopOpacity="0.35"
            />

            <stop
              offset="100%"
              className="bean-visual__sweetness-stop"
              stopOpacity="0"
            />
          </radialGradient>
        </defs>

        {/* OUTER CALIBRATION RING */}

        <circle
          ref={ringRef}
          className="bean-visual__ring"
          cx="250"
          cy="250"
          r="180"
        />

        {/* ROAST PROGRESS */}

        <circle
          ref={progressRef}
          className="bean-visual__progress"
          cx="250"
          cy="250"
          r="158"
          pathLength="1"
          strokeDasharray="1"
          strokeDashoffset="1"
        />

        {/* ROAST HEAT */}

        <circle
          ref={heatRef}
          className="bean-visual__heat"
          cx="250"
          cy="250"
          r="145"
        />

        {/* SWEETNESS DIFFUSION */}

        <g
          ref={sweetnessRef}
          className="bean-visual__sweetness"
        >
          <circle
            cx="250"
            cy="250"
            r="175"
            fill="url(#sweetnessGlow)"
          />
        </g>

        {/* ACIDITY ENERGY */}

        <g
          ref={acidityRef}
          className="bean-visual__acidity"
        >
          <line
            x1="250"
            y1="42"
            x2="250"
            y2="66"
          />

          <line
            x1="250"
            y1="42"
            x2="250"
            y2="66"
            transform="rotate(30 250 250)"
          />

          <line
            x1="250"
            y1="42"
            x2="250"
            y2="66"
            transform="rotate(60 250 250)"
          />

          <line
            x1="250"
            y1="42"
            x2="250"
            y2="66"
            transform="rotate(90 250 250)"
          />

          <line
            x1="250"
            y1="42"
            x2="250"
            y2="66"
            transform="rotate(120 250 250)"
          />

          <line
            x1="250"
            y1="42"
            x2="250"
            y2="66"
            transform="rotate(150 250 250)"
          />

          <line
            x1="250"
            y1="42"
            x2="250"
            y2="66"
            transform="rotate(180 250 250)"
          />

          <line
            x1="250"
            y1="42"
            x2="250"
            y2="66"
            transform="rotate(210 250 250)"
          />

          <line
            x1="250"
            y1="42"
            x2="250"
            y2="66"
            transform="rotate(240 250 250)"
          />

          <line
            x1="250"
            y1="42"
            x2="250"
            y2="66"
            transform="rotate(270 250 250)"
          />

          <line
            x1="250"
            y1="42"
            x2="250"
            y2="66"
            transform="rotate(300 250 250)"
          />

          <line
            x1="250"
            y1="42"
            x2="250"
            y2="66"
            transform="rotate(330 250 250)"
          />
        </g>

        {/* AROMA */}

        <g
          ref={aromaRef}
          className="bean-visual__aroma"
        >
          <circle cx="145" cy="165" r="4" />
          <circle cx="350" cy="160" r="3" />
          <circle cx="120" cy="265" r="3" />
          <circle cx="390" cy="280" r="4" />
          <circle cx="170" cy="365" r="3" />
          <circle cx="335" cy="375" r="4" />
        </g>

        {/* CROSSHAIR */}

        <line
          className="bean-visual__crosshair"
          x1="70"
          y1="250"
          x2="430"
          y2="250"
        />

        <line
          className="bean-visual__crosshair"
          x1="250"
          y1="70"
          x2="250"
          y2="430"
        />

        {/* BEAN */}

        <g
          ref={bodyRef}
          className="bean-visual__body"
        >
          <ellipse
            ref={beanRef}
            className="bean-visual__bean"
            cx="250"
            cy="250"
            rx="82"
            ry="135"
            transform="rotate(-28 250 250)"
          />

          <ellipse
            ref={highlightRef}
            className="bean-visual__highlight"
            cx="225"
            cy="210"
            rx="26"
            ry="55"
            transform="rotate(-28 225 210)"
          />

          <path
            className="bean-visual__seam"
            d="M250 125 C205 175 205 325 250 375"
          />
        </g>
      </svg>

      <div className="bean-visual__coordinates">
        04° 12' 08"
      </div>
    </div>
  );
}

export default BeanVisual;