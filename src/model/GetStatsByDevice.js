/**
 * SendinBlue API
 * SendinBlue provide a RESTFul API that can be used with any languages. With this API, you will be able to :   - Manage your campaigns and get the statistics   - Manage your contacts   - Send transactional Emails and SMS   - and much more...  You can download our wrappers at https://github.com/orgs/sendinblue  **Possible responses**   | Code | Message |   | :-------------: | ------------- |   | 200  | OK. Successful Request  |   | 201  | OK. Successful Creation |   | 202  | OK. Request accepted |   | 204  | OK. Successful Update/Deletion  |   | 400  | Error. Bad Request  |   | 401  | Error. Authentication Needed  |   | 402  | Error. Not enough credit, plan upgrade needed  |   | 403  | Error. Permission denied  |   | 404  | Error. Object does not exist |   | 405  | Error. Method not allowed  |   | 406  | Error. Not Acceptable  | 
 *
 * OpenAPI spec version: 3.0.0
 * Contact: contact@sendinblue.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.3.1
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/GetDeviceBrowserStats'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./GetDeviceBrowserStats'));
  } else {
    // Browser globals (root is window)
    if (!root.PakatApiV3Sdk) {
      root.PakatApiV3Sdk = {};
    }
    root.PakatApiV3Sdk.GetStatsByDevice = factory(root.PakatApiV3Sdk.ApiClient, root.PakatApiV3Sdk.GetDeviceBrowserStats);
  }
}(this, function(ApiClient, GetDeviceBrowserStats) {
  'use strict';




  /**
   * The GetStatsByDevice model module.
   * @module model/GetStatsByDevice
   * @version 8.0.0
   */

  /**
   * Constructs a new <code>GetStatsByDevice</code>.
   * @alias module:model/GetStatsByDevice
   * @class
   */
  var exports = function() {
    var _this = this;





  };

  /**
   * Constructs a <code>GetStatsByDevice</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetStatsByDevice} obj Optional instance to populate.
   * @return {module:model/GetStatsByDevice} The populated <code>GetStatsByDevice</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('desktop')) {
        obj['desktop'] = ApiClient.convertToType(data['desktop'], {'String': GetDeviceBrowserStats});
      }
      if (data.hasOwnProperty('mobile')) {
        obj['mobile'] = ApiClient.convertToType(data['mobile'], {'String': GetDeviceBrowserStats});
      }
      if (data.hasOwnProperty('tablet')) {
        obj['tablet'] = ApiClient.convertToType(data['tablet'], {'String': GetDeviceBrowserStats});
      }
      if (data.hasOwnProperty('unknown')) {
        obj['unknown'] = ApiClient.convertToType(data['unknown'], {'String': GetDeviceBrowserStats});
      }
    }
    return obj;
  }

  /**
   * Statistics of the campaign on the basis of desktop devices
   * @member {Object.<String, module:model/GetDeviceBrowserStats>} desktop
   */
  exports.prototype['desktop'] = undefined;
  /**
   * Statistics of the campaign on the basis of mobile devices
   * @member {Object.<String, module:model/GetDeviceBrowserStats>} mobile
   */
  exports.prototype['mobile'] = undefined;
  /**
   * Statistics of the campaign on the basis of tablet devices
   * @member {Object.<String, module:model/GetDeviceBrowserStats>} tablet
   */
  exports.prototype['tablet'] = undefined;
  /**
   * Statistics of the campaign on the basis of unknown devices
   * @member {Object.<String, module:model/GetDeviceBrowserStats>} unknown
   */
  exports.prototype['unknown'] = undefined;



  return exports;
}));


