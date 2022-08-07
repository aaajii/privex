function Currency({
  field, // { name, value, onChange, onBlur }
  unit,
  ...props
}) {
  return (
    <div className="input-group w-75">
      <span className="input-group-text">{unit}</span>
      <input {...field} {...props} />
    </div>
  );
}

export default Currency;
