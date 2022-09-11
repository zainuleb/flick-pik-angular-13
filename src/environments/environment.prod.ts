export const keys = {
  FLICKER_GALLARY_KEY: '5e516ff3505160aba6322815a22156e4',
};

export const environment = {
  production: true,
  API_URL: `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${keys.FLICKER_GALLARY_KEY}`,
};
