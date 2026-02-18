module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Professional earth-tone palette
        primary: {
          50: '#f9f7f4',
          100: '#f3ede6',
          200: '#e8dcc8',
          300: '#d9c5a3',
          400: '#c4a877',
          500: '#a68560',
          600: '#8b6f4e',
          700: '#6d5740',
          800: '#5a4a36',
          900: '#4a3d2f',
        },
        accent: {
          50: '#f0f8f5',
          100: '#d4ebe4',
          200: '#a8d5c8',
          300: '#7cbfb2',
          400: '#5ab09e',
          500: '#3d9b87',
          600: '#2d8670',
          700: '#1f6d58',
          800: '#155a48',
          900: '#0f483b',
        },
        green: {
          400: '#5ab09e',
          500: '#3d9b87',
          600: '#2d8670',
          700: '#1f6d58',
        },
      },
    },
  },
  plugins: [],
}