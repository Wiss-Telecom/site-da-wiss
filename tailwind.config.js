module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        green: {
          50: '#b6d671',
          100: '#94c049'
        },
        olive: {
          50: '#708745',
          100: '#5a6c3f',
          200: '#485435',
          300: '#3c4439'
        }
      }
    }
  },
  plugins: []
}
