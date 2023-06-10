/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,jsx}'],
    theme: {
        extend: {
            colors: {
                MainBackground: '#282a36',
                MainCurrentline: '#44475a',
                MainForground: '#f8f8f2',
                MainComment: '#6272a4',
                MainCyan: '#8be9fd',
                MainGreen: '#50fa7b',
                MainOrange: '#ffb86c',
                MainPink: '#ff79c6',
                MainPurple: '#bd93f9',
                MainRed: '#ff5555',
                MainYellow: '#f1fa8c',
            },
        },
    },
    plugins: [],
};

