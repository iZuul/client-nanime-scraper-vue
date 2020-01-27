module.exports = {
  lintOnSave: false,
  pwa: {
    name: 'Nanime Scraper',
    short_name: 'Nanime',
    themeColor: '#4DBA87',
    display:'standalone',
    msTileColor: '#000000',
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: 'black',

    // configure the workbox plugin
    workboxPluginMode: 'InjectManifest',
    workboxOptions: {
      // swSrc is required in InjectManifest mode.
      swSrc: 'src/registerServiceWorker.js',
      // ...other Workbox options...
    }
  }
};
