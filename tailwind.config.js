// const colors = require("tailwindcss/colors");
const plugin = require("tailwindcss/plugin");

module.exports = {
  mode: "jit",
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: "class",
  theme: {
    screens: {
      xsm: "320px",
      // => @media (min-width: 320px) { ... }

      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "800px",
      // => @media (min-width: 768px) { ... }

      mdPlus: "970px",
      // => @media (min-width: 1024px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      lgPlus: "1100px",
      // => @media (min-width: 1024px) { ... }

      xl: "1200px",
      // => @media (min-width: 1200px) { ... }

      xlPlus: "1400px",
      // => @media (min-width: 1200px) { ... }

      "2xl": "1600px",
      // => @media (min-width: 1536px) { ... }

      "2xlPlus": "1800px",
      // => @media (min-width: 1700px) { ... }

      "3xl": "2048px",
      // => @media (min-width: 2048px) { ... }

      "4xl": "2200px",
      // => @media (min-width: 2200px) { ... }

      "5xl": "2380px",
      // => @media (min-width: 2380px) { ... }
    },
    extend: {
      colors: {
        // primary: "hsl(211, 100%, 18%)", //#00346A
        secondary: "hsl(211, 100%, 62%)",//#64BCD6
        lightSecondary: "hsl(211, 100%, 76%)",
        whiteShiznait: "hsla(0, 100%, 100%, .2)",
        whiteShiznaitGone: "hsla(0, 100%, 100%, 0)",
        twBlizzo: "hsl(224, 64%, 33%)",
        twBlizzoDrk: "hsl(224, 64%, 20%)",
        twBlizzoDrkr: "hsl(224, 64%, 4%)",
        primary: "hsl(212, 100%, 10%)",
        lightPrimary: "hsl(212, 100%, 12%)",
        darkPrimary: "hsl(211, 100%, 7%)",
        darkerPrimary: "hsl(211, 100%, 5%)",
        darkestPrimary: "hsl(211, 100%, 4%)",
        darkSecondary: "hsl(210, 100%, 40%)",
        darkerSecondary: "hsl(210, 100%, 30%)",
        darkPurp: "hsl(242, 47%, 12%)",
        darkRed: "hsl(0,100%,12%)",
        darkOrange: 'hsl(20, 100%, 30%)'
      },
      gradientColorStops: (theme) => ({
        ...theme("colors"),
        white_egg: "hsl(216, 33%, 100%) 0%",
        "white_semi": "hsl(200, 20%, 82%) 90%",
      }),
      boxShadow: {
        sm: "0 4px 4px 0 rgba(0, 0, 0, 0.15)",
        // DEFAULT: "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
        md: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
        lg: "0 15px 25px -5px rgba(0, 0, 0, 0.15), 0 8px 12px -4px rgba(0, 0, 0, 0.05)",
        xl: "0 15px 25px -5px rgba(0, 0, 0, 0.15), 0 8px 12px -4px rgba(0, 0, 0, 0.05)",
        "2xl": "0 15px 60px -12px rgba(0, 0, 0, 0.25), 0 16px 32px -8px rgba(0, 0, 0, 0.25)",
        "3xl": "0 32px 60px 0px rgba(0, 0, 0, 0.15), 0 32px 60px 0px rgba(0, 0, 0, 0.15)",
        // inner: "inset 0 2px 4px 0 rgba(0, 0, 0, 0.1)",
      },
      letterSpacing: {
        tight: "-.025em",
        normal: "0",
        normalPlus: "0.03em",
        smidge: ".05em",
        smidgePlus: ".1em",
        wide: ".15em",
        wider: ".2em",
        widest: ".25em",
        hellawide: ".4em",
      },
      fontSize: {
        micro: ".35rem",
        "2micro": ".45rem",
        "3micro": ".5rem",
        "3micro": ".5rem",
        "4micro": ".55rem",
        xs: ".65rem",
        "2xs": ".7rem",
        "3xs": ".75rem",
        "4xs": ".775rem",
        sm: ".8rem",
        "2sm": ".815rem",
        "3sm": ".825rem",
        "4sm": ".85rem",
        "sm+": ".875rem",
        '2sm+': ".9rem",
        '3sm+': ".925rem",
        '4sm+': ".95rem",
        base: "1rem",
        md: "1.075rem",
        '2md': "1.1rem",
        lg: "1.125rem",
        '2lg': "1.15rem",
        "xl": "1.25rem",
        "2xl": "1.35rem",
        "3xl": "1.45rem",
        "4xl": "1.65rem",
        "5xl": "2.25rem",
        "6xl": "3rem",
        "7xl": "10rem",
      },
      height: {
        4.5: "1.15rem",
        13: "3.25rem",
        14: "3.5rem",
        15: "3.75rem",
        17: "4.25rem",
        18: "4.5rem",
        19: "4.75rem",
        88: "20rem",
        90: "21.5rem",
        105: "29rem",
        115: "35rem",
      },
      lineHeight: {
        4.5: "1.1rem",
      },
      width: {
        13: "3.25rem",
        15: "3.75rem",
        16: "4rem",
        17: "4.25rem",
        18: "4.5rem",
        19: "4.75rem",
        21: "5.5rem",
        22: "5.75rem",
      },
      padding: {
        '4.5': '0.75rem',
        '17': '4.25rem',
        '18': '4.5rem',
        '19': '4.75rem',
      },
      margin: {
        '13': '3.25rem',
      },
      borderWidth: {
        DEFAULT: "1px",
        0: "0",
        2: "2px",
        3: "3px",
        4: "4px",
        5: "5px",
        6: "6px",
        7: "7px",
      },
      borderOpacity: {
        15: "0.15",
      },
      opacity: {
        "02": "0.02",
        "03": "0.03",
        "04": "0.04",
        "05": "0.05",
        "10": ".1",
        "15": ".15",
        "20": ".2",
        "25": ".25",
        "30": ".3",
        "40": ".4",
        "50": ".5",
        "60": ".6",
        "70": ".7",
        "75": ".75",
        "80": ".8",
        "85": ".85",
        "90": ".9",
        "95": ".95",
        "100": "1"
      },
      outlineWidth: {
        12: '12px',
      },
      textUnderlineOffset: {
        10: '10px',
      },
      backgroundImage: {
        logo: "url('assets/img/logo.webp')",
        logoDrk: "url('assets/img/logo_drk.webp')",
        ptn: "url('assets/img/fartsmellptn.png')",
        'gradient-radial': 'radial-gradient(1280px 1280px at center 0%, var(--tw-gradient-stops))',
        // darkSky: "url('assets/img/dark_sky.webp')",
      },
      keyframes: {
        bounce: {
          '0%, 100%': { transform: 'translateY(-5%)' },
          '50%': { transform: 'translateY(0)' },
        }
      }
    },
  },

  plugins: [
    plugin(function ({ addVariant, e, postcss }) {
      addVariant("firefox", ({ container, separator }) => {
        const isFirefoxRule = postcss.atRule({
          name: "-moz-document",
          params: "url-prefix()",
        });
        isFirefoxRule.append(container.nodes);
        container.append(isFirefoxRule);
        isFirefoxRule.walkRules((rule) => {
          rule.selector = `.${e(
            `firefox${separator}${rule.selector.slice(1)}`
          )}`;
        });
      });
    }),
    // require('flowbite/plugin'),
    // require('tw-elements/dist/plugin')
  ]
}