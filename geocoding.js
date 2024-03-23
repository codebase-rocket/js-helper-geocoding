// Info: Boilerplate library. Contains Functions for Outgoing HTTP(s) requests (For NodeJS only and not browsers)
'use strict';

// Shared Dependencies (Managed by Loader)
var Lib = {};

// API Key for Google/Mapbox
var API_KEY; // Managed by Loader

// Exclusive Dependencies
var CONFIG = require('./config'); // Loader can override it with Custom-Config
var MapService; // Managed by Loader

/////////////////////////// Module-Loader START ////////////////////////////////

  /********************************************************************
  Load dependencies and configurations

  @param {Set} shared_libs - Reference to libraries already loaded in memory by other modules
  @param {Set} config - Custom configuration in key-value pairs

  @return nothing
  *********************************************************************/
  const loader = function(shared_libs, config){

    // Shared Dependencies (Must be loaded in memory already)
    Lib.Utils = shared_libs.Utils;
    Lib.Debug = shared_libs.Debug;
    Lib.HttpHandler = shared_libs.Http;
    [Lib.Geo, Lib.GeoInput, Lib.GeoData] =  [shared_libs.Geo, shared_libs.GeoInput, shared_libs.GeoData];
    [Lib.Contact, Lib.ContactInput, Lib.ContactData] =  [shared_libs.Contact, shared_libs.ContactInput, shared_libs.ContactData];
    Lib.GeoInput =  shared_libs.GeoInput;
    Lib.Instance = shared_libs.Instance;
    Lib.AddressDataCore =  shared_libs.AddressDataCore;


    // Override default configuration
    if( !Lib.Utils.isNullOrUndefined(config) ){
      Object.assign(CONFIG, config); // Merge custom configuration with defaults
    }


    // Check which Map-service to use
    if( CONFIG.SERVICE == 'google'){
      MapService = require('js-helper-geocoding-google')(Lib, CONFIG);
      API_KEY = CONFIG.GOOGLE_API_KEY;
    }
    else if( CONFIG.SERVICE == 'mapbox'){
      MapService = require('js-helper-geocoding-mapbox')(Lib, CONFIG);
      API_KEY = CONFIG.MAPBOX_API_KEY;
    }


  };

//////////////////////////// Module-Loader END /////////////////////////////////



///////////////////////////// Module Exports START /////////////////////////////
module.exports = function(shared_libs, config){

  // Run Loader
  loader(shared_libs, config);

  // Return Public Funtions of this module
  return GeoCoding;

};//////////////////////////// Module Exports END //////////////////////////////



///////////////////////////Public Functions START//////////////////////////////
const GeoCoding = { // Public functions accessible by other modules

  /********************************************************************
  Get Suggested Addresses-List from Search String

  @param {reference} instance - Request Instance object reference //TODO
  @param {Function} cb  - callback function

  @param {String} search_string - Search string
  @param {Set} options - Additional options for Search

  @callback - request Callback(addresses_list, success, failure_code, is_internal_failure)
    * @callback {Set[]} addresses_list - Addresses-List
    * @callback {Boolean} success - success
    * @callback {String} failure_code - Failure Code
    * @callback {Boolean} is_internal_failure - Is this failure internal or can it be shown to user
  *********************************************************************/
  searchPlaces: function(instance, cb, search_string, options){

    // Call Places API, based on service-provider
    MapService.searchPlaces(
      instance,
      cb,
      API_KEY,
      search_string,
      options
    );

  },


  /********************************************************************
  Extends an Address Received by Searchplaces-Api By adding latitude and longitude

  @param {reference} instance - Request Instance object reference //TODO
  @param {Function} cb  - callback function

  @param {String} address_data - Address-Data Object
  @param {Set} options - Additional options for Search

  @callback - Request Callback(address_data, success, failure_code, is_internal_failure)
    * @callback {Set} address_data - Address-Data
    * @callback {Boolean} success - success
    * @callback {String} failure_code - Failure Code
    * @callback {Boolean} is_internal_failure - Is this failure internal or can it be shown to user
  *********************************************************************/
  geoCoding: function(instance, cb, address_data, options){

    // Get Address-Data from latitude and longitude
    MapService.geoCoding(
      instance, cb,
      API_KEY,
      address_data,
      options
    );

  },


  /********************************************************************
  Get Address-Data from latitude and longitude

  @param {reference} instance - Request Instance object reference //TODO
  @param {Function} cb  - callback function

  @param {String} lat - Location latitude
  @param {String} lng - Location longitude

  @callback - Request Callback(address_data, success, failure_code, is_internal_failure)
    * @callback {Set} address_data - Address-Data
    * @callback {Boolean} success - success
    * @callback {String} failure_code - Failure Code
    * @callback {Boolean} is_internal_failure - Is this failure internal or can it be shown to user
  *********************************************************************/
  reverseGeoCoding: function(instance, cb, lat, lng){

    // Get Formatted Address
    MapService.reverseGeoCoding(
      instance, cb,
      API_KEY,
      lat, lng
    );

  },

};///////////////////////////Public Functions END//////////////////////////////



//////////////////////////Private Functions START//////////////////////////////
const _GeoCoding = { // Private functions accessible within this modules only
// None
};//////////////////////////Private Functions END//////////////////////////////
