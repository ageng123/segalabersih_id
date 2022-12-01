/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./pages/**/*.{jx,jsx,ts,tsx}","./components/**/*.{jx,jsx,ts,tsx}", "./styles/**/*.{jx,jsx,ts,tsx}"],
  mode: 'jit',
  theme: {
    extend: {
     
      colors: {
        primary:  "#041328",
        secondary: "#00f6ff",
        dimWhite: "rgba(255,255,255,0.7)",
        dimBlue: "rgba(9,151,124,0.1)"
      },
      
    },
    fonrFamily: {
      poppins: ["Poppins", "sans-serif"]
    },
    screens: {
      xs: '480px',
      ss: '620px',
      sm: '768px',
      md: '1060px',
      lg: '1200px',
      xsl: '1700px'
    }
  },
  plugins: [],
}
