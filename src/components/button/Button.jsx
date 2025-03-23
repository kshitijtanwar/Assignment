const Button = ({ onClick, type, title, className }) => {
    return (
        <button
            onClick={onClick}
            type={type}
            className={`w-full py-3 px-5 font-medium font-rubik cursor-pointer rounded-md ${className}`}
        >
            {title}
        </button>
    );
};
export default Button;
