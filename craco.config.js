module.exports = {
  babel: {
    plugins: [
      [
        'babel-plugin-styled-components',

        {
          fileName: false,
        },
      ],
    ],
  },

  eslint: {
    enable: false, // Disable CRA ESLint for CRA v5 compatibility
  },
}
