/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 * 
 * Code generated by Microsoft (R) AutoRest Code Generator 0.16.0.0
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

var models = require('./index');

var util = require('util');

/**
 * @class
 * Initializes a new instance of the PowerShellSessionResources class.
 * @constructor
 * a collaction of powershell session resources
 * @member {array} [value] Colleciton of powershell session resources
 * 
 * @member {string} [nextLink] the URL to the next set of resources
 * 
 */
function PowerShellSessionResources() {
}

/**
 * Defines the metadata of PowerShellSessionResources
 *
 * @returns {object} metadata of PowerShellSessionResources
 *
 */
PowerShellSessionResources.prototype.mapper = function () {
  return {
    required: false,
    serializedName: 'PowerShellSessionResources',
    type: {
      name: 'Composite',
      className: 'PowerShellSessionResources',
      modelProperties: {
        value: {
          required: false,
          serializedName: 'value',
          type: {
            name: 'Sequence',
            element: {
                required: false,
                serializedName: 'PowerShellSessionResourceElementType',
                type: {
                  name: 'Composite',
                  className: 'PowerShellSessionResource'
                }
            }
          }
        },
        nextLink: {
          required: false,
          serializedName: 'nextLink',
          type: {
            name: 'String'
          }
        }
      }
    }
  };
};

module.exports = PowerShellSessionResources;