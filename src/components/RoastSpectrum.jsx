import { getRoastMetrics } from "../data/roastProfiles";

function RoastSpectrum({ roast }) {
  const metrics = getRoastMetrics(roast);

  const values = [
    {
      label: "BRIGHTNESS",
      value: metrics.brightness,
    },
    {
      label: "ROAST DEPTH",
      value: metrics.depth,
    },
    {
      label: "INTENSITY",
      value: metrics.intensity,
    },
  ];

  return (
    <div className="roast-spectrum">
      <div className="roast-spectrum__heading">
        <span>VISUAL PROFILE</span>
        <span>LAB INDEX</span>
      </div>

      <div className="roast-spectrum__items">
        {values.map((item) => (
          <div
            className="roast-spectrum__item"
            key={item.label}
          >
            <div className="roast-spectrum__label-row">
              <span>{item.label}</span>

              <strong>
                {String(item.value).padStart(3, "0")}
              </strong>
            </div>

            <div className="roast-spectrum__track">
              <div
                className="roast-spectrum__fill"
                style={{
                  width: `${item.value}%`,
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RoastSpectrum;