module.exports = {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                sans: ["Inter", "sans-serif"], // Add modern font family
            },
        },
    },
    plugins: [require("daisyui")],
    daisyui: {
        themes: ["dark", "retro"],
    },
};
