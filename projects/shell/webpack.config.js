const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({

  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
    // '@angular/core': { singleton: true, strictVersion: true },
    // '@azure/msal-angular': { singleton: true, strictVersion: true },
    // '@azure/msal-browser': { singleton: true, strictVersion: true },
    // '@libs/auth': { singleton: true, requiredVersion: 'auto' }
  },

});
