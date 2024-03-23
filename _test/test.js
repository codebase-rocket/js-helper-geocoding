// Info: Test Cases
'use strict';

// Global objects
var Lib = {}; // For dependencies


// Dependencies (Modules that are imported from outside this project)
Lib.Utils = require('js-helper-utils');
Lib.Debug = require('js-helper-debug')(Lib);
Lib.HttpHandler = require('js-helper-http-nodejs')(Lib);
[ Lib.Contact, Lib.ContactInput, Lib.ContactData ] = require('js-helper-contact')(Lib);
[ Lib.Geo, Lib.GeoInput, Lib.GeoData ] = require('js-helper-geo')(Lib);
Lib.Instance = require('js-helper-instance')(Lib, {});

// GeoCoding-Configurations
const CONFIG = {
  GOOGLE_API_KEY: 'todo',
  MAPBOX_API_KEY: 'todo',
  SERVICE: 'mapbox'
};

// Load Current library
const GeoCoding = require('js-helper-geocoding')(Lib, CONFIG);


////////////////////////////SIMILUTATIONS//////////////////////////////////////
// Nothing
///////////////////////////////////////////////////////////////////////////////


/////////////////////////////STAGE SETUP///////////////////////////////////////

function test_output3(address_data, success, failure_code, is_internal_failure){ // Result are from previous function

  Lib.Debug.log('output', address_data);
  Lib.Debug.log('success', success);
  Lib.Debug.log('failure_code', failure_code);
  Lib.Debug.log('is_internal_failure', is_internal_failure);

};

///////////////////////////////////////////////////////////////////////////////

// Test searchPlaces
// GeoCoding.searchPlaces(
//   Lib.Instance.initialize(),
//   test_output3,
//   // 'todo', //provider_key
//   // 'todo', // access token
//   'Hamden High School, 2040 Dixwell Ave, Hamden, Connecticut 06514, United States', // search string
//   // 'Hamden High School', // search string
//   // 'Red fORT, delhi', // search string
//   // 'hamden', // search string
//   {'country': 'us'}, //options
// );


// Test geoCoding
// GeoCoding.geoCoding(
//   Lib.Instance.initialize(),
//   test_output3,
//   {
//     address_id: null,
//     provider_data: {
//       // search_string: 'Hamden High School, 2040 Dixwell Ave, Hamden, Connecticut 06514, United States'
//       search_string: 'Hamden High School, 2040 Dixwell Ave, Hamden, Connecticut 06514, United States'
//     },
//     // line1: 'Hamden High School, 2040 Dixwell Ave, Hamden, Connecticut 06514, United States'
//     // line1: 'Independence High School, West 36th Street, Hampden, Baltimore, MD, USA'
//   }, // address_data
//   // 'Hamden High School, 2040 Dixwell Ave, Hamden, Connecticut 06514, United States',
//   null, // options
// );


// Test reverseGeoCoding
// GeoCoding.reverseGeoCoding(
//   Lib.Instance.initialize(),
//   test_output3,
//   '22', // lat
//   '-22', //lng
// );


// Sample output
// {
//   address_id: null,
//   address_title: null,
//   address_type: 0,
//   address_country: 'Delhi',
//   address_sub_division: 'Delhi',
//   address_locality: 'North West Delhi',
//   address_line2: 'Delhi',
//   address_line1: [ 'Sector 3', 'Rohini' ],
//   address_postal_code: '110085',
//   address_extra: null,
//   address_latitude: '28.7040592',
//   address_longitude: '77.10249019999999'
// }

/////////////////////////////////TESTS/////////////////////////////////////////
