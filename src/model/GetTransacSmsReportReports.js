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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.PakatApiV3Sdk) {
      root.PakatApiV3Sdk = {};
    }
    root.PakatApiV3Sdk.GetTransacSmsReportReports = factory(root.PakatApiV3Sdk.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The GetTransacSmsReportReports model module.
   * @module model/GetTransacSmsReportReports
   * @version 8.0.0
   */

  /**
   * Constructs a new <code>GetTransacSmsReportReports</code>.
   * @alias module:model/GetTransacSmsReportReports
   * @class
   * @param _date {Date} Date for which statistics are retrieved
   * @param requests {Number} Number of requests for the date
   * @param delivered {Number} Number of delivered SMS for the date
   * @param hardBounces {Number} Number of hardbounces for the date
   * @param softBounces {Number} Number of softbounces for the date
   * @param blocked {Number} Number of blocked contact for the date
   * @param unsubscribed {Number} Number of unsubscription for the date
   * @param replied {Number} Number of answered SMS for the date
   * @param accepted {Number} Number of accepted for the date
   * @param rejected {Number} Number of rejected for the date
   */
  var exports = function(_date, requests, delivered, hardBounces, softBounces, blocked, unsubscribed, replied, accepted, rejected) {
    var _this = this;

    _this['date'] = _date;
    _this['requests'] = requests;
    _this['delivered'] = delivered;
    _this['hardBounces'] = hardBounces;
    _this['softBounces'] = softBounces;
    _this['blocked'] = blocked;
    _this['unsubscribed'] = unsubscribed;
    _this['replied'] = replied;
    _this['accepted'] = accepted;
    _this['rejected'] = rejected;
  };

  /**
   * Constructs a <code>GetTransacSmsReportReports</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetTransacSmsReportReports} obj Optional instance to populate.
   * @return {module:model/GetTransacSmsReportReports} The populated <code>GetTransacSmsReportReports</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('date')) {
        obj['date'] = ApiClient.convertToType(data['date'], 'Date');
      }
      if (data.hasOwnProperty('requests')) {
        obj['requests'] = ApiClient.convertToType(data['requests'], 'Number');
      }
      if (data.hasOwnProperty('delivered')) {
        obj['delivered'] = ApiClient.convertToType(data['delivered'], 'Number');
      }
      if (data.hasOwnProperty('hardBounces')) {
        obj['hardBounces'] = ApiClient.convertToType(data['hardBounces'], 'Number');
      }
      if (data.hasOwnProperty('softBounces')) {
        obj['softBounces'] = ApiClient.convertToType(data['softBounces'], 'Number');
      }
      if (data.hasOwnProperty('blocked')) {
        obj['blocked'] = ApiClient.convertToType(data['blocked'], 'Number');
      }
      if (data.hasOwnProperty('unsubscribed')) {
        obj['unsubscribed'] = ApiClient.convertToType(data['unsubscribed'], 'Number');
      }
      if (data.hasOwnProperty('replied')) {
        obj['replied'] = ApiClient.convertToType(data['replied'], 'Number');
      }
      if (data.hasOwnProperty('accepted')) {
        obj['accepted'] = ApiClient.convertToType(data['accepted'], 'Number');
      }
      if (data.hasOwnProperty('rejected')) {
        obj['rejected'] = ApiClient.convertToType(data['rejected'], 'Number');
      }
    }
    return obj;
  }

  /**
   * Date for which statistics are retrieved
   * @member {Date} date
   */
  exports.prototype['date'] = undefined;
  /**
   * Number of requests for the date
   * @member {Number} requests
   */
  exports.prototype['requests'] = undefined;
  /**
   * Number of delivered SMS for the date
   * @member {Number} delivered
   */
  exports.prototype['delivered'] = undefined;
  /**
   * Number of hardbounces for the date
   * @member {Number} hardBounces
   */
  exports.prototype['hardBounces'] = undefined;
  /**
   * Number of softbounces for the date
   * @member {Number} softBounces
   */
  exports.prototype['softBounces'] = undefined;
  /**
   * Number of blocked contact for the date
   * @member {Number} blocked
   */
  exports.prototype['blocked'] = undefined;
  /**
   * Number of unsubscription for the date
   * @member {Number} unsubscribed
   */
  exports.prototype['unsubscribed'] = undefined;
  /**
   * Number of answered SMS for the date
   * @member {Number} replied
   */
  exports.prototype['replied'] = undefined;
  /**
   * Number of accepted for the date
   * @member {Number} accepted
   */
  exports.prototype['accepted'] = undefined;
  /**
   * Number of rejected for the date
   * @member {Number} rejected
   */
  exports.prototype['rejected'] = undefined;



  return exports;
}));


