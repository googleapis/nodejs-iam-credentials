// Copyright 2021 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.


'use strict';

function main(name, scope) {
  // [START iamcredentials_v1_generated_IAMCredentials_GenerateAccessToken_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The resource name of the service account for which the credentials
   *  are requested, in the following format:
   *  `projects/-/serviceAccounts/{ACCOUNT_EMAIL_OR_UNIQUEID}`. The `-` wildcard
   *  character is required; replacing it with a project ID is invalid.
   */
  // const name = 'abc123'
  /**
   *  The sequence of service accounts in a delegation chain. Each service
   *  account must be granted the `roles/iam.serviceAccountTokenCreator` role
   *  on its next service account in the chain. The last service account in the
   *  chain must be granted the `roles/iam.serviceAccountTokenCreator` role
   *  on the service account that is specified in the `name` field of the
   *  request.
   *  The delegates must have the following format:
   *  `projects/-/serviceAccounts/{ACCOUNT_EMAIL_OR_UNIQUEID}`. The `-` wildcard
   *  character is required; replacing it with a project ID is invalid.
   */
  // const delegates = 'abc123'
  /**
   *  Required. Code to identify the scopes to be included in the OAuth 2.0 access token.
   *  See https://developers.google.com/identity/protocols/googlescopes for more
   *  information.
   *  At least one value required.
   */
  // const scope = 'abc123'
  /**
   *  The desired lifetime duration of the access token in seconds.
   *  Must be set to a value less than or equal to 3600 (1 hour). If a value is
   *  not specified, the token's lifetime will be set to a default value of one
   *  hour.
   */
  // const lifetime = {}

  // Imports the Credentials library
  const {IAMCredentialsClient} = require('@google-cloud/iam-credentials').v1;

  // Instantiates a client
  const credentialsClient = new IAMCredentialsClient();

  async function callGenerateAccessToken() {
    // Construct request
    const request = {
      name,
      scope,
    };

    // Run request
    const response = await credentialsClient.generateAccessToken(request);
    console.log(response);
  }

  callGenerateAccessToken();
  // [END iamcredentials_v1_generated_IAMCredentials_GenerateAccessToken_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
