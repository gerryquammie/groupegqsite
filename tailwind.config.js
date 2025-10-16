module.exports = {
  content: ['./app/**/*.{ts,tsx,js,jsx}', './components/**/*.{ts,tsx,js,jsx}', './src/**/*.{ts,tsx,js,jsx}'],
  theme: { extend: {} },
  plugins: [require('@tailwindcss/typography'), require('@tailwindcss/line-clamp')],
};
