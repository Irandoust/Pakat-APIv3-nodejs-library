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
    define(['ApiClient', 'model/GetClient', 'model/GetExtendedClientAddress'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./GetClient'), require('./GetExtendedClientAddress'));
  } else {
    // Browser globals (root is window)
    if (!root.PakatApiV3Sdk) {
      root.PakatApiV3Sdk = {};
    }
    root.PakatApiV3Sdk.GetExtendedClient = factory(root.PakatApiV3Sdk.ApiClient, root.PakatApiV3Sdk.GetClient, root.PakatApiV3Sdk.GetExtendedClientAddress);
  }
}(this, function(ApiClient, GetClient, GetExtendedClientAddress) {
  'use strict';




  /**
   * The GetExtendedClient model module.
   * @module model/GetExtendedClient
   * @version 8.0.0
   */

  /**
   * Constructs a new <code>GetExtendedClient</code>.
   * @alias module:model/GetExtendedClient
   * @class
   * @implements module:model/GetClient
   * @param email {String} Login Email
   * @param firstName {String} First Name
   * @param lastName {String} Last Name
   * @param companyName {String} Name of the company
   * @param address {module:model/GetExtendedClientAddress} 
   */
  var exports = function(email, firstName, lastName, companyName, address) {
    var _this = this;

    GetClient.call(_this, email, firstName, lastName, companyName);
    _this['address'] = address;
  };

  /**
   * Constructs a <code>GetExtendedClient</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetExtendedClient} obj Optional instance to populate.
   * @return {module:model/GetExtendedClient} The populated <code>GetExtendedClient</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      GetClient.constructFromObject(data, obj);
      if (data.hasOwnProperty('address')) {
        obj['address'] = GetExtendedClientAddress.constructFromObject(data['address']);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/GetExtendedClientAddress} address
   */
  exports.prototype['address'] = undefined;

  // Implement GetClient interface:
  /**
   * Login Email
   * @member {String} email
   */
exports.prototype['email'] = undefined;

  /**
   * First Name
   * @member {String} firstName
   */
exports.prototype['firstName'] = undefined;

  /**
   * Last Name
   * @member {String} lastName
   */
exports.prototype['lastName'] = undefined;

  /**
   * Name of the company
   * @member {String} companyName
   */
exports.prototype['companyName'] = undefined;



  return exports;
}));


