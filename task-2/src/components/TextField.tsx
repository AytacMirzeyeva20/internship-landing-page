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
  return (
    <div className="button_card">
      <div className="button_heading">
        <FaPen className="icon" />
        <h2>TextField</h2>
        <p>Input with validation</p>
      </div>

      <div className="textfield_content">
        <label htmlFor="username">{label}</label>

        <input id="username" type="text" value={value} onChange={(e) => onChange(e.target.value)} placeholder={placeholder}/>

        {helperText && <p className="helper_text">{helperText}</p>}

        {error && <p className="error_text">{error}</p>}
      </div>
    </div>
  );
}

export default TextField;