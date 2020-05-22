"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const geocode_1 = require("./utils/geocode");
const forecast_1 = require("./utils/forecast");
geocode_1.geocode(process.argv[2], (error, data) => {
    if (!data) {
        console.log(error);
    }
    else {
        forecast_1.forecast({ lat: data.latitude, long: data.longitude }, (error, data) => {
            if (error) {
                console.log(error);
            }
            else {
                console.log(data);
            }
        });
    }
});
//# sourceMappingURL=app.js.map