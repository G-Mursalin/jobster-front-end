// React
import { ChangeEvent } from "react";

type TFromRow = {
  type: string;
  name: string;
  value: string;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  labelText?: string;
  placeholder?: string;
  disabled?: boolean;
};

const FormRow = ({
  type,
  name,
  value,
  handleChange,
  labelText,
  placeholder,
  disabled,
}: TFromRow) => {
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
        placeholder={placeholder}
        disabled={disabled}
      />
    </div>
  );
};

export default FormRow;
