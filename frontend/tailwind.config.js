/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: 'hsl(210, 40%, 50%)',
          foreground: 'hsl(0, 0%, 100%)'
        },
        background: 'hsl(0, 0%, 98%)',
        surface: 'hsl(0, 0%, 100%)',
        border: 'hsl(210, 20%, 90%)',
        muted: 'hsl(210, 20%, 95%)'
      },
      borderRadius: '0.5rem',
      boxShadow: {
        sm: '0 1px 2px rgba(0,0,0,0.05)',
        DEFAULT: '0 2px 4px rgba(0,0,0,0.1)',
        lg: '0 4px 8px rgba(0,0,0,0.15)'
      }
    }
  },
  plugins: []
};
