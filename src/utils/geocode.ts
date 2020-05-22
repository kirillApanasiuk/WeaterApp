import request from 'request';

interface IGeocodeFn {
  (
    addres: string,
    callback: (
      e: Object | undefined,
      data: { latitude: number; longitude: number; location: string } | undefined,
    ) => void,
  ): void;
}

export const geocode: IGeocodeFn = (addres, callback) => {
  const url: string =
    'https://api.mapbox.com/geocoding/v5/mapbox.places/' +
    encodeURIComponent(addres) +
    '.json?access_token=pk.eyJ1Ijoia2lyaWxsYXBhbmFzaXVrIiwiYSI6ImNrYWgzMmY3cTA0M2IyeXFnN3dlZG91MjIifQ.dQR3LKJ0WNgJsnTSFRLnvA&limit=1';

  request({ url: url, json: true }, (error, responce) => {
    if (error) {
      callback('Unable to connect to location services!', undefined);
    } else if (responce.body.features.length === 0) {
      callback('Unable to find location.Try another search!', undefined);
    } else {
      callback(undefined, {
        latitude: responce.body.features[0].center[0],
        longitude: responce.body.features[0].center[1],
        location: responce.body.features[0].place_name,
      });
    }
  });
};
