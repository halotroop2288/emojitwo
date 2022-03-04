module.exports = {
  multipass: true,
  js2svg: {
    pretty: true,
  },
  plugins: [
    {
      name: 'preset-default'
      params: {
      	overrides: {
      	  removeTitle: false,
      	}
      }
    },
    convertStyleToAttrs
  ],
};
