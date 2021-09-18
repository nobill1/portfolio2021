module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {  
    container: {
      padding: {
        DEFAULT: '0',
        sm: '1rem',
        md: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
      center: true,
    },
    extend: {
      colors: {
        primary: "var(--color-primary)",
        secondary: "var(--color-secondary)",
        white: {
          150: "#F4F4F4",
        },
        black: {
          150: "141414",
        },
      },
      fontFamily: {        
        custom: ["Harbour Regular", "serif"],
        body: ['Mulish', "sans-serif"]      
      },
      spacing: {
        sm: "8px",
        md: "16px",
        lg: "24px",
        xl: "48px",
        1: "8px",
        2: "12px",
        3: "16px",
        4: "24px",
        5: "32px",
        6: "48px",
        7: "56px",
        8: "64px",
        9: "80px",
        10: "96px",
      },
      screens: {
        'msm': {'max': '425px'},
        'mmd': {'max': '768px'},
        'mlg': {'max': '1024px'},
        'mxl': {'max': '1280px'},
        'm2xl': {'max': '1536px'},
        'ssm': {'min': '426px'},
        'smd': {'min': '768px'},
        'slg': {'min': '1024px'},
        'sxl': {'min': '1280px'},
        's2xl': {'min': '1536px'},        
      },
      boxShadow: {
        small: '4px 4px 0px 0px rgba(113,196,189,1)',
        large: '8px 8px 0px 0px rgba(113,196,189,1)',   
        smallB: '4px 4px 0px 0px rgba(27,20,100,1);',
        largeB: '8px 8px 0px 0px rgba(27,20,100,1);'  
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
