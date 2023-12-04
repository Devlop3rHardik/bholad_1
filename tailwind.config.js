/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}", "./!(build|dist|.*)/**/*.{html,js}"],
  theme: {
    extend: {
      spacing: {},
    },
    fontSize: {
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
