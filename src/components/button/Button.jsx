const Button = ({
    onClick,
    type,
    title,
    className,
    disabled,
    isLoading,
    isLoadingText,
    spinner,
}) => {
    return (
        <button
            onClick={onClick}
            type={type}
            className={`w-full py-3 px-5 font-medium font-rubik cursor-pointer rounded-md ${className} flex gap-2 items-center justify-center`}
            disabled={disabled}
        >
            {isLoading && spinner}
            {isLoading ? isLoadingText : title}
        </button>
    );
};
export default Button;
