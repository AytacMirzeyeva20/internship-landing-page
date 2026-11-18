interface ButtonProps {
  variant?: "primary" | "secondary";
  loading?: boolean;
  disabled?: boolean;
  onClick?: () => void;
  children: React.ReactNode;
}

function Button({variant = "primary",loading = false,disabled = false,onClick,children,}: ButtonProps) {
  return (
    <button className={`button ${variant} ${loading ? "loading" : ""}`} onClick={onClick} disabled={disabled || loading} aria-busy={loading}>
      {loading ? "Loading..." : children}
    </button>
  );
}

export default Button;