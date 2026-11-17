import { useId } from "react";
import { FaPen } from "react-icons/fa6";

interface TextFieldProps {
  label: string;
  placeholder?: string;
  value: string;
  onChange: (value: string) => void;
  helperText?: string;
  error?: string;
}

function TextField({label,placeholder,value,onChange,helperText,error,}: TextFieldProps) {
  const id=useId();
  return (
    <div className="button_card">
      <div className="button_heading">
        <FaPen className="icon" />
        <h2>TextField</h2>
        <p>Input with validation</p>
      </div>

      <div className="textfield_content">
        <label htmlFor="username">{label}</label>

        <input id={id} type="text" value={value} onChange={(e) => onChange(e.target.value)} placeholder={placeholder}
        aria-invalid={!!error}
    aria-describedby={error ? `${id}-error` : helperText ? `${id}-helper` : undefined}
        />

        {helperText && <p id={`${id}-helper`}   className="helper_text">{helperText}</p>}

        {error && <p id={`${id}-error`} className="error_text">{error}</p>}
      </div>
    </div>
  );
}

export default TextField;