import { Form } from "react-bootstrap";

function Dropdown({ field, options, defaultOption = null, ...props }) {
  return (
    <Form.Select
      aria-label="Default select example"
      className="col"
      {...field}
      {...props}
    >
      {defaultOption && (
        <option value={defaultOption.value}>{defaultOption.label}</option>
      )}
      {options.map(({ value, label }) => (
        <option value={value} key={value}>
          {label}
        </option>
      ))}
    </Form.Select>
  );
}

export default Dropdown;
