/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 * 
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

var models = require('./index');

/**
 * @class
 * Initializes a new instance of the EncryptionServices class.
 * @constructor
 * The encrypted services.
 * @member {object} [blob] The blob service.
 * 
 * @member {boolean} [blob.enabled] A boolean indicating whether or not the
 * service is encrypted.
 * 
 * @member {date} [blob.lastEnabledTime] Gets a time value indicating when was
 * the encryption enabled by the user last time. We return this value only
 * when encryption is enabled. There might be some unencrypted blobs which
 * were written after this time. This time is just to give a rough estimate
 * of when encryption was enabled.
 * 
 */
function EncryptionServices() {
}

/**
 * Defines the metadata of EncryptionServices
 *
 * @returns {object} metadata of EncryptionServices
 *
 */
EncryptionServices.prototype.mapper = function () {
  return {
    required: false,
    serializedName: 'EncryptionServices',
    type: {
      name: 'Composite',
      className: 'EncryptionServices',
      modelProperties: {
        blob: {
          required: false,
          serializedName: 'blob',
          type: {
            name: 'Composite',
            className: 'EncryptionService'
          }
        }
      }
    }
  };
};

module.exports = EncryptionServices;
