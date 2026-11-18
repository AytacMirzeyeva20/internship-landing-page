import { useId } from "react";

interface TextFieldProps {
  label: string;
  placeholder?: string;
  value: string;
  onChange: (value: string) => void;
  helperText?: string;
  error?: string;
  disabled?: boolean;
}

function TextField({label,placeholder,value,onChange,helperText,error,disabled=false}: TextFieldProps) {
  const id=useId();
  return (
    

      <div className="textfield_content">
        <label htmlFor={id}>{label}</label>

        <input id={id} type="text" value={value} onChange={(e) => onChange(e.target.value)} placeholder={placeholder}
        aria-invalid={!!error} disabled={disabled}
    aria-describedby={error ? `${id}-error` : helperText ? `${id}-helper` : undefined}
        />

        {helperText && <p id={`${id}-helper`}   className="helper_text">{helperText}</p>}

        {error && <p id={`${id}-error`} className="error_text">{error}</p>}
      </div>
  
  );
}

export default TextField;