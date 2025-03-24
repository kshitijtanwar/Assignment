export const fadeInFromAbove = {
    hidden: {
        opacity: 0,
        y: -5,
    },
    visible: (custom) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: custom * 0.1,
            duration: 0.3,
            ease: "easeOut",
        },
    }),
};
