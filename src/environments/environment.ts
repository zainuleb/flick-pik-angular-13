// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const keys = {
  FLICKER_GALLARY_KEY: '5e516ff3505160aba6322815a22156e4', //Paste your flicker key here
};

export const environment = {
  production: false,
  API_URL: `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${keys.FLICKER_GALLARY_KEY}`,
};

/*


 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
