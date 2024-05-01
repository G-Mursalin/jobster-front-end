// React
import { ChangeEvent } from "react";

type TFromRow = {
  type: string;
  name: string;
  value: string;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  labelText?: string;
};

const FormRow = ({ type, name, value, handleChange, labelText }: TFromRow) => {
  return (
    <div className="form-row">
      <label htmlFor={name} className="form-label">
        {labelText || name}
      </label>

      <input
        type={type}
        value={value}
        name={name}
        onChange={handleChange}
        className="form-input"
      />
    </div>
  );
};

export default FormRow;
