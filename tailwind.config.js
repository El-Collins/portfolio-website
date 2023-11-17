module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      primary: 'Poppins',
      secondary: 'Rajdhani',
      tertiary: 'Aldrich',
    },
    container: {
      padding: {
        DEFAULT: '15px',
      },
    },
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      colors: {
        primary: '#0a0a0a',
        accent: '#B809C3',
      },
      backgroundImage: {
        site: "url('./assets/site-bg.jpg')",
        // site: 'url(rgb(15 23 42/var(--tw-bg-opacity)))',
        about: "url('./assets/about.png')",
        services: "url('./assets/services.png')",
        
      },
    },
  },
  plugins: [],
};
