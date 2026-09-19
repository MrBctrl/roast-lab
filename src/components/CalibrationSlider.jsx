function CalibrationSlider({
  id,
  label,
  value,
  onChange,
  leftLabel,
  rightLabel,
}) {
  const ticks = Array.from(
    { length: 11 },
    (_, index) => index * 10,
  );

  return (
    <div className="calibration-slider">
      <div className="calibration-slider__header">
        <label htmlFor={id}>{label}</label>

        <span className="calibration-slider__value">
          {String(value).padStart(3, "0")}
        </span>
      </div>

      <div className="calibration-slider__control">
        <div className="calibration-slider__track">
          <div
            className="calibration-slider__fill"
            style={{ width: `${value}%` }}
          />

          {ticks.map((tick) => (
            <span
              key={tick}
              className={`calibration-slider__tick ${
                tick % 20 === 0
                  ? "calibration-slider__tick--major"
                  : ""
              }`}
              style={{ left: `${tick}%` }}
            />
          ))}

          <div
            className="calibration-slider__marker"
            style={{ left: `${value}%` }}
          />
        </div>

        <input
          id={id}
          name={id}
          className="calibration-slider__input"
          type="range"
          min="0"
          max="100"
          step="1"
          value={value}
          onChange={(event) =>
            onChange(Number(event.target.value))
          }
          aria-label={`${label} intensity`}
        />
      </div>

      <div className="calibration-slider__scale">
        <span>{leftLabel}</span>
        <span>50</span>
        <span>{rightLabel}</span>
      </div>
    </div>
  );
}

export default CalibrationSlider;