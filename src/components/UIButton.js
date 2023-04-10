const UIButton = ({
    className,
    rounded = false,
    disabled = false,
    onClick,
    children,
    secondary = false,
    cargando = false
}) => {
    return (
        <button
            disabled={cargando}
            className={`w-full tracking-tight shrink-0 relative h-[55px] items-center text-[14px] font-bold transition-all duration-700 px-4 
            ${rounded ? 'rounded-full' : 'rounded-[5px]'}
            ${
                secondary
                    ? disabled
                        ? 'bg-secondary-300 text-secondary-700'
                        : 'border-primary hover:shadow-xl hover:bg-primary hover:text-white border hover:animate-pulse bg-secondary-500 text-primary'
                    : disabled
                    ? 'bg-gray-100 text-gray-300 cursor-not-allowed'
                    : 'hover:shadow-xl hover:animate-pulse bg-primary text-white'
            }
            ${ cargando ? 'animate-pulse':''}
            ${className}`}
            onClick={onClick !== '' ? onClick : null}
        >
         {
            cargando ? 'Cargando...' : children
         }
        </button>
    );
};

export default UIButton;