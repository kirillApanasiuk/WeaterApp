"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const request_1 = __importDefault(require("request"));
exports.geocode = (addres, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' +
        encodeURIComponent(addres) +
        '.json?access_token=pk.eyJ1Ijoia2lyaWxsYXBhbmFzaXVrIiwiYSI6ImNrYWgzMmY3cTA0M2IyeXFnN3dlZG91MjIifQ.dQR3LKJ0WNgJsnTSFRLnvA&limit=1';
    request_1.default({ url: url, json: true }, (error, responce) => {
        if (error) {
            callback('Unable to connect to location services!', undefined);
        }
        else if (responce.body.features.length === 0) {
            callback('Unable to find location.Try another search!', undefined);
        }
        else {
            callback(undefined, {
                latitude: responce.body.features[0].center[0],
                longitude: responce.body.features[0].center[1],
                location: responce.body.features[0].place_name,
            });
        }
    });
};
//# sourceMappingURL=geocode.js.map