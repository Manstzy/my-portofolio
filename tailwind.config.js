/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'miniPhone' : '300px',
      'phone' : '410px' , 
      'medium' : '520px' , 
      'tablet': '640px',
      // => @media (min-width: 640px) { ... }
      'large' : '850px',

      'laptop': '1024px',
      // => @media (min-width: 1024px) { ... }

      'desktop': '1280px',
      // => @media (min-width: 1280px) { ... }
    },
    extend: {
      colors : {
        'primary' : "#FDF0D1",
        'secondary' : '#AC7D88',
        'elegant' : '#85586F',
        'beauty' : '#643843',
      },
      fontFamily : {
        'poppins' : ['Poppins', 'sans-serif'],
        'lobster' : ['Lobster', 'sans-serif'],
        'permanent' : ['Permanent Marker', 'cursive'],
      },
    },
  },
  plugins: [],
}

