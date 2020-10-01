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
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.PakatApiV3Sdk);
  }
}(this, function(expect, PakatApiV3Sdk) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new PakatApiV3Sdk.TransactionalEmailsApi();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('TransactionalEmailsApi', function() {
    describe('createSmtpTemplate', function() {
      it('should call createSmtpTemplate successfully', function(done) {
        //uncomment below and update the code to test createSmtpTemplate
        //instance.createSmtpTemplate(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteHardbounces', function() {
      it('should call deleteHardbounces successfully', function(done) {
        //uncomment below and update the code to test deleteHardbounces
        //instance.deleteHardbounces(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteSmtpTemplate', function() {
      it('should call deleteSmtpTemplate successfully', function(done) {
        //uncomment below and update the code to test deleteSmtpTemplate
        //instance.deleteSmtpTemplate(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getAggregatedSmtpReport', function() {
      it('should call getAggregatedSmtpReport successfully', function(done) {
        //uncomment below and update the code to test getAggregatedSmtpReport
        //instance.getAggregatedSmtpReport(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getEmailEventReport', function() {
      it('should call getEmailEventReport successfully', function(done) {
        //uncomment below and update the code to test getEmailEventReport
        //instance.getEmailEventReport(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getSmtpReport', function() {
      it('should call getSmtpReport successfully', function(done) {
        //uncomment below and update the code to test getSmtpReport
        //instance.getSmtpReport(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getSmtpTemplate', function() {
      it('should call getSmtpTemplate successfully', function(done) {
        //uncomment below and update the code to test getSmtpTemplate
        //instance.getSmtpTemplate(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getSmtpTemplates', function() {
      it('should call getSmtpTemplates successfully', function(done) {
        //uncomment below and update the code to test getSmtpTemplates
        //instance.getSmtpTemplates(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getTransacBlockedContacts', function() {
      it('should call getTransacBlockedContacts successfully', function(done) {
        //uncomment below and update the code to test getTransacBlockedContacts
        //instance.getTransacBlockedContacts(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getTransacEmailContent', function() {
      it('should call getTransacEmailContent successfully', function(done) {
        //uncomment below and update the code to test getTransacEmailContent
        //instance.getTransacEmailContent(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getTransacEmailsList', function() {
      it('should call getTransacEmailsList successfully', function(done) {
        //uncomment below and update the code to test getTransacEmailsList
        //instance.getTransacEmailsList(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('sendTemplate', function() {
      it('should call sendTemplate successfully', function(done) {
        //uncomment below and update the code to test sendTemplate
        //instance.sendTemplate(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('sendTestTemplate', function() {
      it('should call sendTestTemplate successfully', function(done) {
        //uncomment below and update the code to test sendTestTemplate
        //instance.sendTestTemplate(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('sendTransacEmail', function() {
      it('should call sendTransacEmail successfully', function(done) {
        //uncomment below and update the code to test sendTransacEmail
        //instance.sendTransacEmail(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('smtpBlockedContactsEmailDelete', function() {
      it('should call smtpBlockedContactsEmailDelete successfully', function(done) {
        //uncomment below and update the code to test smtpBlockedContactsEmailDelete
        //instance.smtpBlockedContactsEmailDelete(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('smtpLogMessageIdDelete', function() {
      it('should call smtpLogMessageIdDelete successfully', function(done) {
        //uncomment below and update the code to test smtpLogMessageIdDelete
        //instance.smtpLogMessageIdDelete(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateSmtpTemplate', function() {
      it('should call updateSmtpTemplate successfully', function(done) {
        //uncomment below and update the code to test updateSmtpTemplate
        //instance.updateSmtpTemplate(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
