module.exports = {
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Funchy Sage"', "sans-serif"],
        serif: ['"Funchy Sage"', "serif"],
        mono: ['"Funchy Sage"', "monospace"],
      },
	  fontSize: {
        sm: ['14px', { lineHeight: '16px' }],
        md: ['16px', { lineHeight: '20px' }],
        lg: ['18px', { lineHeight: '24px' }],
        xl: ['20px', { lineHeight: '28px' }],
        '2xl': ['22px', { lineHeight: '32px' }],
      },
    },
  },
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
};
