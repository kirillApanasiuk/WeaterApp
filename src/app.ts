import { geocode } from './utils/geocode';
import { forecast } from './utils/forecast';



geocode(process.argv[2], (error, data) => {
  if (!data) {
    console.log(error);
  } else {
    forecast({ lat: data.latitude, long: data.longitude }, (error, data) => {
      if (error) {
        console.log(error);
      } else {
        console.log(data);
      }
    });
  }
});
