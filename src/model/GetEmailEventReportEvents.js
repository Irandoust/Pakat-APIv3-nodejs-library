/**
 * SendinBlue API
 * SendinBlue provide a RESTFul API that can be used with any languages. With this API, you will be able to :   - Manage your campaigns and get the statistics   - Manage your contacts   - Send transactional Emails and SMS   - and much more...  You can download our wrappers at https://github.com/orgs/sendinblue  **Possible responses**   | Code | Message |   | :-------------: | ------------- |   | 200  | OK. Successful Request  |   | 201  | OK. Successful Creation |   | 202  | OK. Request accepted |   | 204  | OK. Successful Update/Deletion  |   | 400  | Error. Bad Request  |   | 401  | Error. Authentication Needed  |   | 402  | Error. Not enough credit, plan upgrade needed  |   | 403  | Error. Permission denied  |   | 404  | Error. Object does not exist |   | 405  | Error. Method not allowed  | 
 *
 * OpenAPI spec version: 3.0.0
 * Contact: contact@sendinblue.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.2.3
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
    if (!root.SibApiV3Sdk) {
      root.SibApiV3Sdk = {};
    }
    root.SibApiV3Sdk.GetEmailEventReportEvents = factory(root.SibApiV3Sdk.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The GetEmailEventReportEvents model module.
   * @module model/GetEmailEventReportEvents
   * @version 3.0.0
   */

  /**
   * Constructs a new <code>GetEmailEventReportEvents</code>.
   * @alias module:model/GetEmailEventReportEvents
   * @class
   * @param email {String} Email address which generates the event
   * @param _date {Date} Date on which the event has been generated
   * @param messageId {String} Message ID which generated the event
   * @param event {module:model/GetEmailEventReportEvents.EventEnum} Event which occured
   * @param reason {String} Reason of bounce (only availble if the event is hardbounce or softbounce)
   * @param tag {String} Tag of the email which generated the event
   */
  var exports = function(email, _date, messageId, event, reason, tag) {
    var _this = this;

    _this['email'] = email;
    _this['date'] = _date;

    _this['messageId'] = messageId;
    _this['event'] = event;
    _this['reason'] = reason;
    _this['tag'] = tag;


  };

  /**
   * Constructs a <code>GetEmailEventReportEvents</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetEmailEventReportEvents} obj Optional instance to populate.
   * @return {module:model/GetEmailEventReportEvents} The populated <code>GetEmailEventReportEvents</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('email')) {
        obj['email'] = ApiClient.convertToType(data['email'], 'String');
      }
      if (data.hasOwnProperty('date')) {
        obj['date'] = ApiClient.convertToType(data['date'], 'Date');
      }
      if (data.hasOwnProperty('subject')) {
        obj['subject'] = ApiClient.convertToType(data['subject'], 'String');
      }
      if (data.hasOwnProperty('messageId')) {
        obj['messageId'] = ApiClient.convertToType(data['messageId'], 'String');
      }
      if (data.hasOwnProperty('event')) {
        obj['event'] = ApiClient.convertToType(data['event'], 'String');
      }
      if (data.hasOwnProperty('reason')) {
        obj['reason'] = ApiClient.convertToType(data['reason'], 'String');
      }
      if (data.hasOwnProperty('tag')) {
        obj['tag'] = ApiClient.convertToType(data['tag'], 'String');
      }
      if (data.hasOwnProperty('ip')) {
        obj['ip'] = ApiClient.convertToType(data['ip'], 'String');
      }
      if (data.hasOwnProperty('link')) {
        obj['link'] = ApiClient.convertToType(data['link'], 'String');
      }
    }
    return obj;
  }

  /**
   * Email address which generates the event
   * @member {String} email
   */
  exports.prototype['email'] = undefined;
  /**
   * Date on which the event has been generated
   * @member {Date} date
   */
  exports.prototype['date'] = undefined;
  /**
   * Subject of the event
   * @member {String} subject
   */
  exports.prototype['subject'] = undefined;
  /**
   * Message ID which generated the event
   * @member {String} messageId
   */
  exports.prototype['messageId'] = undefined;
  /**
   * Event which occured
   * @member {module:model/GetEmailEventReportEvents.EventEnum} event
   */
  exports.prototype['event'] = undefined;
  /**
   * Reason of bounce (only availble if the event is hardbounce or softbounce)
   * @member {String} reason
   */
  exports.prototype['reason'] = undefined;
  /**
   * Tag of the email which generated the event
   * @member {String} tag
   */
  exports.prototype['tag'] = undefined;
  /**
   * IP from which the user has opened the email or clicked on the link (only availble if the event is opened or clicks)
   * @member {String} ip
   */
  exports.prototype['ip'] = undefined;
  /**
   * The link which is sent to the user (only availble if the event is requests or opened or clicks)
   * @member {String} link
   */
  exports.prototype['link'] = undefined;


  /**
   * Allowed values for the <code>event</code> property.
   * @enum {String}
   * @readonly
   */
  exports.EventEnum = {
    /**
     * value: "bounces"
     * @const
     */
    "bounces": "bounces",
    /**
     * value: "hardBounces"
     * @const
     */
    "hardBounces": "hardBounces",
    /**
     * value: "softBounces"
     * @const
     */
    "softBounces": "softBounces",
    /**
     * value: "delivered"
     * @const
     */
    "delivered": "delivered",
    /**
     * value: "spam"
     * @const
     */
    "spam": "spam",
    /**
     * value: "requests"
     * @const
     */
    "requests": "requests",
    /**
     * value: "opened"
     * @const
     */
    "opened": "opened",
    /**
     * value: "clicks"
     * @const
     */
    "clicks": "clicks",
    /**
     * value: "invalid"
     * @const
     */
    "invalid": "invalid",
    /**
     * value: "deferred"
     * @const
     */
    "deferred": "deferred",
    /**
     * value: "blocked"
     * @const
     */
    "blocked": "blocked"  };


  return exports;
}));


