const Button = ({
  children,
  onClick,
  disabled = false,
  className = "",
  ...props
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`px-4 py-2 bg-gray-700 text-white rounded disabled:opacity-50 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
