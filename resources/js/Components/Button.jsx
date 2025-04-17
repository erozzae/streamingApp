import PropTypes from "prop-types";

Button.propTypes = {
  type: PropTypes.oneOf(["button", "submit", "reset"]),
  className: PropTypes.string,
  variant: PropTypes.oneOf([
    "primary",
    "warning",
    "danger",
    "light-outline",
    "white-outline",
  ]),
  processing: PropTypes.bool,
  childeren: PropTypes.node,
};

export default function Button({
  className = "",
  processing,
  variant = "primary",
  children,
  ...props
}) {
  return (
    <button
      {...props}
      className={`rounded-2xl py-[13px] text-center w-full ${
        processing && "opacity-30"
      } btn-${variant} ${className}`}
      disabled={processing}
    >
      {children}
    </button>
  );
}
