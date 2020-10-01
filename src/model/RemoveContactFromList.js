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
    root.PakatApiV3Sdk.RemoveContactFromList = factory(root.PakatApiV3Sdk.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The RemoveContactFromList model module.
   * @module model/RemoveContactFromList
   * @version 8.0.0
   */

  /**
   * Constructs a new <code>RemoveContactFromList</code>.
   * @alias module:model/RemoveContactFromList
   * @class
   */
  var exports = function() {
    var _this = this;




  };

  /**
   * Constructs a <code>RemoveContactFromList</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/RemoveContactFromList} obj Optional instance to populate.
   * @return {module:model/RemoveContactFromList} The populated <code>RemoveContactFromList</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('emails')) {
        obj['emails'] = ApiClient.convertToType(data['emails'], ['String']);
      }
      if (data.hasOwnProperty('ids')) {
        obj['ids'] = ApiClient.convertToType(data['ids'], ['Number']);
      }
      if (data.hasOwnProperty('all')) {
        obj['all'] = ApiClient.convertToType(data['all'], 'Boolean');
      }
    }
    return obj;
  }

  /**
   * Required if 'all' is false. Emails to remove from a list. You can pass a maximum of 150 emails for removal in one request.
   * @member {Array.<String>} emails
   */
  exports.prototype['emails'] = undefined;
  /**
   * Mandatory if Emails are not passed, ignored otherwise. Emails to add to a list. You can pass a maximum of 150 emails for addition in one request. If you need to add the emails in bulk, please prefer /contacts/import api.
   * @member {Array.<Number>} ids
   */
  exports.prototype['ids'] = undefined;
  /**
   * Required if none of 'emails' or 'ids' are passed. Remove all existing contacts from a list.  A process will be created in this scenario. You can fetch the process details to know about the progress
   * @member {Boolean} all
   */
  exports.prototype['all'] = undefined;



  return exports;
}));


