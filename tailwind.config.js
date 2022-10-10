/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            colors: {
                primary: {
                    100: "#7da885",
                    200: "#69a274",
                    300: "#599d66",
                    400: "#37a449",
                    500: "#2d8d3d",
                },
            },
            boxShadow: {
                "primary-xl": "0 2px 22px 8px #37a44940",
                "primary-xs": "0px 3px 13px 2px #37a44940",
                "primary-sm": "0px 2px 15px -2px #37a44940",
            },
        },
    },
    plugins: [],
};
