// This file has been autogenerated.

exports.setEnvironment = function() {
  process.env['AZURE_BATCH_ACCOUNT'] = 'batchtestnodesdk';
  process.env['AZURE_BATCH_ENDPOINT'] = 'https://batchtestnodesdk.japaneast.batch.azure.com/';
  process.env['AZURE_SUBSCRIPTION_ID'] = '603663e9-700c-46de-9d41-e080ff1d461e';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://batchtestnodesdk.japaneast.batch.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/pools/nodesdktestpool1/removenodes?api-version=2015-12-01.2.2', '*')
  .reply(202, "", { 'transfer-encoding': 'chunked',
  'last-modified': 'Sun, 20 Mar 2016 22:05:34 GMT',
  etag: '0x8D3510BC2E24E15',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': '546eb739-a67e-489f-a637-94fa42ffeb2d',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  dataserviceversion: '3.0',
  dataserviceid: 'https://batchtestnodesdk.japaneast.batch.azure.com/pools/nodesdktestpool1/removenodes',
  date: 'Sun, 20 Mar 2016 22:05:34 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://batchtestnodesdk.japaneast.batch.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/pools/nodesdktestpool1/removenodes?api-version=2015-12-01.2.2', '*')
  .reply(202, "", { 'transfer-encoding': 'chunked',
  'last-modified': 'Sun, 20 Mar 2016 22:05:34 GMT',
  etag: '0x8D3510BC2E24E15',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': '546eb739-a67e-489f-a637-94fa42ffeb2d',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  dataserviceversion: '3.0',
  dataserviceid: 'https://batchtestnodesdk.japaneast.batch.azure.com/pools/nodesdktestpool1/removenodes',
  date: 'Sun, 20 Mar 2016 22:05:34 GMT',
  connection: 'close' });
 return result; }]];