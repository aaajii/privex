import { useEffect, useState } from "react";

function Decimal({
  field: { name, ...rest }, // { name, value, onChange, onBlur }
  form: { touched, errors, setFieldValue }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
  className,
  ...props
}) {
  const [integer, setInteger] = useState("0");
  const [decimal, setDecimal] = useState("0");

  useEffect(() => {
    setFieldValue(name, +`${integer}.${decimal}`);
  }, [integer, decimal, name, setFieldValue]);

  return (
    <div className={"d-flex col-sm-6 align-items-baseline " + className}>
      <input {...rest} {...props} className="d-none" />

      <div className="w-25">
        <input
          type="number"
          className="form-control col-sm-8"
          onChange={(e) => {
            setInteger(e.target.value);
          }}
          value={integer}
        />
      </div>
      <p className="fw-bolder">•</p>
      <div className="w-25">
        <input
          type="number"
          className="form-control col-sm-8"
          placeholder=""
          onChange={(e) => {
            setDecimal(e.target.value);
          }}
          value={decimal}
        />
      </div>
    </div>
  );
}

export default Decimal;
