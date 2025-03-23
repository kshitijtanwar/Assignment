const Button = ({ onClick, type, title, className, disabled }) => {
    return (
        <button
            onClick={onClick}
            type={type}
            className={`w-full py-3 px-5 font-medium font-rubik cursor-pointer rounded-md ${className}`}
            disabled={disabled}
        >
            {title}
        </button>
    );
};
export default Button;
