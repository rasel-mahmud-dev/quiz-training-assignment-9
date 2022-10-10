/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            boxShadow: {
                "rose-xl": "0 2px 22px 13px rgb(251 113 133 / 20%)",
                "rose-xs": "0px 3px 13px 2px #fedbdfb0",
            },
        },
    },
    plugins: [],
};
