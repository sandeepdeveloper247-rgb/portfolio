const Button = ({
  children,
  variant = "primary",
  onClick,
}) => {

  const base =
    "rounded-xl px-7 py-4 font-semibold transition-all duration-300";

  const styles = {
    primary:
      "bg-cyan-400 text-slate-950 hover:scale-105 hover:shadow-[0_0_35px_rgba(34,211,238,0.45)]",

    secondary:
      "border border-white/20 bg-white/5 backdrop-blur-md hover:border-cyan-400 hover:bg-cyan-400/10",
  };

  return (
    <button
      onClick={onClick}
      className={`${base} ${styles[variant]}`}
    >
      {children}
    </button>
  );
};

export default Button;