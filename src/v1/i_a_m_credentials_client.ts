// Copyright 2022 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
//
// ** This file is automatically generated by gapic-generator-typescript. **
// ** https://github.com/googleapis/gapic-generator-typescript **
// ** All changes to this file may be overwritten. **

/* global window */
import * as gax from 'google-gax';
import {Callback, CallOptions, Descriptors, ClientOptions} from 'google-gax';

import * as protos from '../../protos/protos';
import jsonProtos = require('../../protos/protos.json');
/**
 * Client JSON configuration object, loaded from
 * `src/v1/i_a_m_credentials_client_config.json`.
 * This file defines retry strategy and timeouts for all API methods in this library.
 */
import * as gapicConfig from './i_a_m_credentials_client_config.json';

const version = require('../../../package.json').version;

/**
 *  A service account is a special type of Google account that belongs to your
 *  application or a virtual machine (VM), instead of to an individual end user.
 *  Your application assumes the identity of the service account to call Google
 *  APIs, so that the users aren't directly involved.
 *
 *  Service account credentials are used to temporarily assume the identity
 *  of the service account. Supported credential types include OAuth 2.0 access
 *  tokens, OpenID Connect ID tokens, self-signed JSON Web Tokens (JWTs), and
 *  more.
 * @class
 * @memberof v1
 */
export class IAMCredentialsClient {
  private _terminated = false;
  private _opts: ClientOptions;
  private _providedCustomServicePath: boolean;
  private _gaxModule: typeof gax | typeof gax.fallback;
  private _gaxGrpc: gax.GrpcClient | gax.fallback.GrpcClient;
  private _protos: {};
  private _defaults: {[method: string]: gax.CallSettings};
  auth: gax.GoogleAuth;
  descriptors: Descriptors = {
    page: {},
    stream: {},
    longrunning: {},
    batching: {},
  };
  warn: (code: string, message: string, warnType?: string) => void;
  innerApiCalls: {[name: string]: Function};
  iAMCredentialsStub?: Promise<{[name: string]: Function}>;

  /**
   * Construct an instance of IAMCredentialsClient.
   *
   * @param {object} [options] - The configuration object.
   * The options accepted by the constructor are described in detail
   * in [this document](https://github.com/googleapis/gax-nodejs/blob/main/client-libraries.md#creating-the-client-instance).
   * The common options are:
   * @param {object} [options.credentials] - Credentials object.
   * @param {string} [options.credentials.client_email]
   * @param {string} [options.credentials.private_key]
   * @param {string} [options.email] - Account email address. Required when
   *     using a .pem or .p12 keyFilename.
   * @param {string} [options.keyFilename] - Full path to the a .json, .pem, or
   *     .p12 key downloaded from the Google Developers Console. If you provide
   *     a path to a JSON file, the projectId option below is not necessary.
   *     NOTE: .pem and .p12 require you to specify options.email as well.
   * @param {number} [options.port] - The port on which to connect to
   *     the remote host.
   * @param {string} [options.projectId] - The project ID from the Google
   *     Developer's Console, e.g. 'grape-spaceship-123'. We will also check
   *     the environment variable GCLOUD_PROJECT for your project ID. If your
   *     app is running in an environment which supports
   *     {@link https://developers.google.com/identity/protocols/application-default-credentials Application Default Credentials},
   *     your project ID will be detected automatically.
   * @param {string} [options.apiEndpoint] - The domain name of the
   *     API remote host.
   * @param {gax.ClientConfig} [options.clientConfig] - Client configuration override.
   *     Follows the structure of {@link gapicConfig}.
   * @param {boolean | "rest"} [options.fallback] - Use HTTP fallback mode.
   *     Pass "rest" to use HTTP/1.1 REST API instead of gRPC.
   *     For more information, please check the
   *     {@link https://github.com/googleapis/gax-nodejs/blob/main/client-libraries.md#http11-rest-api-mode documentation}.
   */
  constructor(opts?: ClientOptions) {
    // Ensure that options include all the required fields.
    const staticMembers = this.constructor as typeof IAMCredentialsClient;
    const servicePath =
      opts?.servicePath || opts?.apiEndpoint || staticMembers.servicePath;
    this._providedCustomServicePath = !!(
      opts?.servicePath || opts?.apiEndpoint
    );
    const port = opts?.port || staticMembers.port;
    const clientConfig = opts?.clientConfig ?? {};
    const fallback =
      opts?.fallback ??
      (typeof window !== 'undefined' && typeof window?.fetch === 'function');
    opts = Object.assign({servicePath, port, clientConfig, fallback}, opts);

    // If scopes are unset in options and we're connecting to a non-default endpoint, set scopes just in case.
    if (servicePath !== staticMembers.servicePath && !('scopes' in opts)) {
      opts['scopes'] = staticMembers.scopes;
    }

    // Choose either gRPC or proto-over-HTTP implementation of google-gax.
    this._gaxModule = opts.fallback ? gax.fallback : gax;

    // Create a `gaxGrpc` object, with any grpc-specific options sent to the client.
    this._gaxGrpc = new this._gaxModule.GrpcClient(opts);

    // Save options to use in initialize() method.
    this._opts = opts;

    // Save the auth object to the client, for use by other methods.
    this.auth = this._gaxGrpc.auth as gax.GoogleAuth;

    // Set useJWTAccessWithScope on the auth object.
    this.auth.useJWTAccessWithScope = true;

    // Set defaultServicePath on the auth object.
    this.auth.defaultServicePath = staticMembers.servicePath;

    // Set the default scopes in auth client if needed.
    if (servicePath === staticMembers.servicePath) {
      this.auth.defaultScopes = staticMembers.scopes;
    }

    // Determine the client header string.
    const clientHeader = [`gax/${this._gaxModule.version}`, `gapic/${version}`];
    if (typeof process !== 'undefined' && 'versions' in process) {
      clientHeader.push(`gl-node/${process.versions.node}`);
    } else {
      clientHeader.push(`gl-web/${this._gaxModule.version}`);
    }
    if (!opts.fallback) {
      clientHeader.push(`grpc/${this._gaxGrpc.grpcVersion}`);
    } else if (opts.fallback === 'rest') {
      clientHeader.push(`rest/${this._gaxGrpc.grpcVersion}`);
    }
    if (opts.libName && opts.libVersion) {
      clientHeader.push(`${opts.libName}/${opts.libVersion}`);
    }
    // Load the applicable protos.
    this._protos = this._gaxGrpc.loadProtoJSON(jsonProtos);

    // Put together the default options sent with requests.
    this._defaults = this._gaxGrpc.constructSettings(
      'google.iam.credentials.v1.IAMCredentials',
      gapicConfig as gax.ClientConfig,
      opts.clientConfig || {},
      {'x-goog-api-client': clientHeader.join(' ')}
    );

    // Set up a dictionary of "inner API calls"; the core implementation
    // of calling the API is handled in `google-gax`, with this code
    // merely providing the destination and request information.
    this.innerApiCalls = {};

    // Add a warn function to the client constructor so it can be easily tested.
    this.warn = gax.warn;
  }

  /**
   * Initialize the client.
   * Performs asynchronous operations (such as authentication) and prepares the client.
   * This function will be called automatically when any class method is called for the
   * first time, but if you need to initialize it before calling an actual method,
   * feel free to call initialize() directly.
   *
   * You can await on this method if you want to make sure the client is initialized.
   *
   * @returns {Promise} A promise that resolves to an authenticated service stub.
   */
  initialize() {
    // If the client stub promise is already initialized, return immediately.
    if (this.iAMCredentialsStub) {
      return this.iAMCredentialsStub;
    }

    // Put together the "service stub" for
    // google.iam.credentials.v1.IAMCredentials.
    this.iAMCredentialsStub = this._gaxGrpc.createStub(
      this._opts.fallback
        ? (this._protos as protobuf.Root).lookupService(
            'google.iam.credentials.v1.IAMCredentials'
          )
        : // eslint-disable-next-line @typescript-eslint/no-explicit-any
          (this._protos as any).google.iam.credentials.v1.IAMCredentials,
      this._opts,
      this._providedCustomServicePath
    ) as Promise<{[method: string]: Function}>;

    // Iterate over each of the methods that the service provides
    // and create an API call method for each.
    const iAMCredentialsStubMethods = [
      'generateAccessToken',
      'generateIdToken',
      'signBlob',
      'signJwt',
    ];
    for (const methodName of iAMCredentialsStubMethods) {
      const callPromise = this.iAMCredentialsStub.then(
        stub =>
          (...args: Array<{}>) => {
            if (this._terminated) {
              return Promise.reject('The client has already been closed.');
            }
            const func = stub[methodName];
            return func.apply(stub, args);
          },
        (err: Error | null | undefined) => () => {
          throw err;
        }
      );

      const descriptor = undefined;
      const apiCall = this._gaxModule.createApiCall(
        callPromise,
        this._defaults[methodName],
        descriptor
      );

      this.innerApiCalls[methodName] = apiCall;
    }

    return this.iAMCredentialsStub;
  }

  /**
   * The DNS address for this API service.
   * @returns {string} The DNS address for this service.
   */
  static get servicePath() {
    return 'iamcredentials.googleapis.com';
  }

  /**
   * The DNS address for this API service - same as servicePath(),
   * exists for compatibility reasons.
   * @returns {string} The DNS address for this service.
   */
  static get apiEndpoint() {
    return 'iamcredentials.googleapis.com';
  }

  /**
   * The port for this API service.
   * @returns {number} The default port for this service.
   */
  static get port() {
    return 443;
  }

  /**
   * The scopes needed to make gRPC calls for every method defined
   * in this service.
   * @returns {string[]} List of default scopes.
   */
  static get scopes() {
    return ['https://www.googleapis.com/auth/cloud-platform'];
  }

  getProjectId(): Promise<string>;
  getProjectId(callback: Callback<string, undefined, undefined>): void;
  /**
   * Return the project ID used by this class.
   * @returns {Promise} A promise that resolves to string containing the project ID.
   */
  getProjectId(
    callback?: Callback<string, undefined, undefined>
  ): Promise<string> | void {
    if (callback) {
      this.auth.getProjectId(callback);
      return;
    }
    return this.auth.getProjectId();
  }

  // -------------------
  // -- Service calls --
  // -------------------
  /**
   * Generates an OAuth 2.0 access token for a service account.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.name
   *   Required. The resource name of the service account for which the credentials
   *   are requested, in the following format:
   *   `projects/-/serviceAccounts/{ACCOUNT_EMAIL_OR_UNIQUEID}`. The `-` wildcard
   *   character is required; replacing it with a project ID is invalid.
   * @param {string[]} request.delegates
   *   The sequence of service accounts in a delegation chain. Each service
   *   account must be granted the `roles/iam.serviceAccountTokenCreator` role
   *   on its next service account in the chain. The last service account in the
   *   chain must be granted the `roles/iam.serviceAccountTokenCreator` role
   *   on the service account that is specified in the `name` field of the
   *   request.
   *
   *   The delegates must have the following format:
   *   `projects/-/serviceAccounts/{ACCOUNT_EMAIL_OR_UNIQUEID}`. The `-` wildcard
   *   character is required; replacing it with a project ID is invalid.
   * @param {string[]} request.scope
   *   Required. Code to identify the scopes to be included in the OAuth 2.0 access token.
   *   See https://developers.google.com/identity/protocols/googlescopes for more
   *   information.
   *   At least one value required.
   * @param {google.protobuf.Duration} request.lifetime
   *   The desired lifetime duration of the access token in seconds.
   *   Must be set to a value less than or equal to 3600 (1 hour). If a value is
   *   not specified, the token's lifetime will be set to a default value of one
   *   hour.
   * @param {object} [options]
   *   Call options. See {@link https://googleapis.dev/nodejs/google-gax/latest/interfaces/CallOptions.html|CallOptions} for more details.
   * @returns {Promise} - The promise which resolves to an array.
   *   The first element of the array is an object representing [GenerateAccessTokenResponse]{@link google.iam.credentials.v1.GenerateAccessTokenResponse}.
   *   Please see the
   *   [documentation](https://github.com/googleapis/gax-nodejs/blob/master/client-libraries.md#regular-methods)
   *   for more details and examples.
   * @example <caption>include:samples/generated/v1/i_a_m_credentials.generate_access_token.js</caption>
   * region_tag:iamcredentials_v1_generated_IAMCredentials_GenerateAccessToken_async
   */
  generateAccessToken(
    request?: protos.google.iam.credentials.v1.IGenerateAccessTokenRequest,
    options?: CallOptions
  ): Promise<
    [
      protos.google.iam.credentials.v1.IGenerateAccessTokenResponse,
      protos.google.iam.credentials.v1.IGenerateAccessTokenRequest | undefined,
      {} | undefined
    ]
  >;
  generateAccessToken(
    request: protos.google.iam.credentials.v1.IGenerateAccessTokenRequest,
    options: CallOptions,
    callback: Callback<
      protos.google.iam.credentials.v1.IGenerateAccessTokenResponse,
      | protos.google.iam.credentials.v1.IGenerateAccessTokenRequest
      | null
      | undefined,
      {} | null | undefined
    >
  ): void;
  generateAccessToken(
    request: protos.google.iam.credentials.v1.IGenerateAccessTokenRequest,
    callback: Callback<
      protos.google.iam.credentials.v1.IGenerateAccessTokenResponse,
      | protos.google.iam.credentials.v1.IGenerateAccessTokenRequest
      | null
      | undefined,
      {} | null | undefined
    >
  ): void;
  generateAccessToken(
    request?: protos.google.iam.credentials.v1.IGenerateAccessTokenRequest,
    optionsOrCallback?:
      | CallOptions
      | Callback<
          protos.google.iam.credentials.v1.IGenerateAccessTokenResponse,
          | protos.google.iam.credentials.v1.IGenerateAccessTokenRequest
          | null
          | undefined,
          {} | null | undefined
        >,
    callback?: Callback<
      protos.google.iam.credentials.v1.IGenerateAccessTokenResponse,
      | protos.google.iam.credentials.v1.IGenerateAccessTokenRequest
      | null
      | undefined,
      {} | null | undefined
    >
  ): Promise<
    [
      protos.google.iam.credentials.v1.IGenerateAccessTokenResponse,
      protos.google.iam.credentials.v1.IGenerateAccessTokenRequest | undefined,
      {} | undefined
    ]
  > | void {
    request = request || {};
    let options: CallOptions;
    if (typeof optionsOrCallback === 'function' && callback === undefined) {
      callback = optionsOrCallback;
      options = {};
    } else {
      options = optionsOrCallback as CallOptions;
    }
    options = options || {};
    options.otherArgs = options.otherArgs || {};
    options.otherArgs.headers = options.otherArgs.headers || {};
    options.otherArgs.headers['x-goog-request-params'] =
      gax.routingHeader.fromParams({
        name: request.name || '',
      });
    this.initialize();
    return this.innerApiCalls.generateAccessToken(request, options, callback);
  }
  /**
   * Generates an OpenID Connect ID token for a service account.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.name
   *   Required. The resource name of the service account for which the credentials
   *   are requested, in the following format:
   *   `projects/-/serviceAccounts/{ACCOUNT_EMAIL_OR_UNIQUEID}`. The `-` wildcard
   *   character is required; replacing it with a project ID is invalid.
   * @param {string[]} request.delegates
   *   The sequence of service accounts in a delegation chain. Each service
   *   account must be granted the `roles/iam.serviceAccountTokenCreator` role
   *   on its next service account in the chain. The last service account in the
   *   chain must be granted the `roles/iam.serviceAccountTokenCreator` role
   *   on the service account that is specified in the `name` field of the
   *   request.
   *
   *   The delegates must have the following format:
   *   `projects/-/serviceAccounts/{ACCOUNT_EMAIL_OR_UNIQUEID}`. The `-` wildcard
   *   character is required; replacing it with a project ID is invalid.
   * @param {string} request.audience
   *   Required. The audience for the token, such as the API or account that this token
   *   grants access to.
   * @param {boolean} request.includeEmail
   *   Include the service account email in the token. If set to `true`, the
   *   token will contain `email` and `email_verified` claims.
   * @param {object} [options]
   *   Call options. See {@link https://googleapis.dev/nodejs/google-gax/latest/interfaces/CallOptions.html|CallOptions} for more details.
   * @returns {Promise} - The promise which resolves to an array.
   *   The first element of the array is an object representing [GenerateIdTokenResponse]{@link google.iam.credentials.v1.GenerateIdTokenResponse}.
   *   Please see the
   *   [documentation](https://github.com/googleapis/gax-nodejs/blob/master/client-libraries.md#regular-methods)
   *   for more details and examples.
   * @example <caption>include:samples/generated/v1/i_a_m_credentials.generate_id_token.js</caption>
   * region_tag:iamcredentials_v1_generated_IAMCredentials_GenerateIdToken_async
   */
  generateIdToken(
    request?: protos.google.iam.credentials.v1.IGenerateIdTokenRequest,
    options?: CallOptions
  ): Promise<
    [
      protos.google.iam.credentials.v1.IGenerateIdTokenResponse,
      protos.google.iam.credentials.v1.IGenerateIdTokenRequest | undefined,
      {} | undefined
    ]
  >;
  generateIdToken(
    request: protos.google.iam.credentials.v1.IGenerateIdTokenRequest,
    options: CallOptions,
    callback: Callback<
      protos.google.iam.credentials.v1.IGenerateIdTokenResponse,
      | protos.google.iam.credentials.v1.IGenerateIdTokenRequest
      | null
      | undefined,
      {} | null | undefined
    >
  ): void;
  generateIdToken(
    request: protos.google.iam.credentials.v1.IGenerateIdTokenRequest,
    callback: Callback<
      protos.google.iam.credentials.v1.IGenerateIdTokenResponse,
      | protos.google.iam.credentials.v1.IGenerateIdTokenRequest
      | null
      | undefined,
      {} | null | undefined
    >
  ): void;
  generateIdToken(
    request?: protos.google.iam.credentials.v1.IGenerateIdTokenRequest,
    optionsOrCallback?:
      | CallOptions
      | Callback<
          protos.google.iam.credentials.v1.IGenerateIdTokenResponse,
          | protos.google.iam.credentials.v1.IGenerateIdTokenRequest
          | null
          | undefined,
          {} | null | undefined
        >,
    callback?: Callback<
      protos.google.iam.credentials.v1.IGenerateIdTokenResponse,
      | protos.google.iam.credentials.v1.IGenerateIdTokenRequest
      | null
      | undefined,
      {} | null | undefined
    >
  ): Promise<
    [
      protos.google.iam.credentials.v1.IGenerateIdTokenResponse,
      protos.google.iam.credentials.v1.IGenerateIdTokenRequest | undefined,
      {} | undefined
    ]
  > | void {
    request = request || {};
    let options: CallOptions;
    if (typeof optionsOrCallback === 'function' && callback === undefined) {
      callback = optionsOrCallback;
      options = {};
    } else {
      options = optionsOrCallback as CallOptions;
    }
    options = options || {};
    options.otherArgs = options.otherArgs || {};
    options.otherArgs.headers = options.otherArgs.headers || {};
    options.otherArgs.headers['x-goog-request-params'] =
      gax.routingHeader.fromParams({
        name: request.name || '',
      });
    this.initialize();
    return this.innerApiCalls.generateIdToken(request, options, callback);
  }
  /**
   * Signs a blob using a service account's system-managed private key.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.name
   *   Required. The resource name of the service account for which the credentials
   *   are requested, in the following format:
   *   `projects/-/serviceAccounts/{ACCOUNT_EMAIL_OR_UNIQUEID}`. The `-` wildcard
   *   character is required; replacing it with a project ID is invalid.
   * @param {string[]} request.delegates
   *   The sequence of service accounts in a delegation chain. Each service
   *   account must be granted the `roles/iam.serviceAccountTokenCreator` role
   *   on its next service account in the chain. The last service account in the
   *   chain must be granted the `roles/iam.serviceAccountTokenCreator` role
   *   on the service account that is specified in the `name` field of the
   *   request.
   *
   *   The delegates must have the following format:
   *   `projects/-/serviceAccounts/{ACCOUNT_EMAIL_OR_UNIQUEID}`. The `-` wildcard
   *   character is required; replacing it with a project ID is invalid.
   * @param {Buffer} request.payload
   *   Required. The bytes to sign.
   * @param {object} [options]
   *   Call options. See {@link https://googleapis.dev/nodejs/google-gax/latest/interfaces/CallOptions.html|CallOptions} for more details.
   * @returns {Promise} - The promise which resolves to an array.
   *   The first element of the array is an object representing [SignBlobResponse]{@link google.iam.credentials.v1.SignBlobResponse}.
   *   Please see the
   *   [documentation](https://github.com/googleapis/gax-nodejs/blob/master/client-libraries.md#regular-methods)
   *   for more details and examples.
   * @example <caption>include:samples/generated/v1/i_a_m_credentials.sign_blob.js</caption>
   * region_tag:iamcredentials_v1_generated_IAMCredentials_SignBlob_async
   */
  signBlob(
    request?: protos.google.iam.credentials.v1.ISignBlobRequest,
    options?: CallOptions
  ): Promise<
    [
      protos.google.iam.credentials.v1.ISignBlobResponse,
      protos.google.iam.credentials.v1.ISignBlobRequest | undefined,
      {} | undefined
    ]
  >;
  signBlob(
    request: protos.google.iam.credentials.v1.ISignBlobRequest,
    options: CallOptions,
    callback: Callback<
      protos.google.iam.credentials.v1.ISignBlobResponse,
      protos.google.iam.credentials.v1.ISignBlobRequest | null | undefined,
      {} | null | undefined
    >
  ): void;
  signBlob(
    request: protos.google.iam.credentials.v1.ISignBlobRequest,
    callback: Callback<
      protos.google.iam.credentials.v1.ISignBlobResponse,
      protos.google.iam.credentials.v1.ISignBlobRequest | null | undefined,
      {} | null | undefined
    >
  ): void;
  signBlob(
    request?: protos.google.iam.credentials.v1.ISignBlobRequest,
    optionsOrCallback?:
      | CallOptions
      | Callback<
          protos.google.iam.credentials.v1.ISignBlobResponse,
          protos.google.iam.credentials.v1.ISignBlobRequest | null | undefined,
          {} | null | undefined
        >,
    callback?: Callback<
      protos.google.iam.credentials.v1.ISignBlobResponse,
      protos.google.iam.credentials.v1.ISignBlobRequest | null | undefined,
      {} | null | undefined
    >
  ): Promise<
    [
      protos.google.iam.credentials.v1.ISignBlobResponse,
      protos.google.iam.credentials.v1.ISignBlobRequest | undefined,
      {} | undefined
    ]
  > | void {
    request = request || {};
    let options: CallOptions;
    if (typeof optionsOrCallback === 'function' && callback === undefined) {
      callback = optionsOrCallback;
      options = {};
    } else {
      options = optionsOrCallback as CallOptions;
    }
    options = options || {};
    options.otherArgs = options.otherArgs || {};
    options.otherArgs.headers = options.otherArgs.headers || {};
    options.otherArgs.headers['x-goog-request-params'] =
      gax.routingHeader.fromParams({
        name: request.name || '',
      });
    this.initialize();
    return this.innerApiCalls.signBlob(request, options, callback);
  }
  /**
   * Signs a JWT using a service account's system-managed private key.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.name
   *   Required. The resource name of the service account for which the credentials
   *   are requested, in the following format:
   *   `projects/-/serviceAccounts/{ACCOUNT_EMAIL_OR_UNIQUEID}`. The `-` wildcard
   *   character is required; replacing it with a project ID is invalid.
   * @param {string[]} request.delegates
   *   The sequence of service accounts in a delegation chain. Each service
   *   account must be granted the `roles/iam.serviceAccountTokenCreator` role
   *   on its next service account in the chain. The last service account in the
   *   chain must be granted the `roles/iam.serviceAccountTokenCreator` role
   *   on the service account that is specified in the `name` field of the
   *   request.
   *
   *   The delegates must have the following format:
   *   `projects/-/serviceAccounts/{ACCOUNT_EMAIL_OR_UNIQUEID}`. The `-` wildcard
   *   character is required; replacing it with a project ID is invalid.
   * @param {string} request.payload
   *   Required. The JWT payload to sign: a JSON object that contains a JWT Claims Set.
   * @param {object} [options]
   *   Call options. See {@link https://googleapis.dev/nodejs/google-gax/latest/interfaces/CallOptions.html|CallOptions} for more details.
   * @returns {Promise} - The promise which resolves to an array.
   *   The first element of the array is an object representing [SignJwtResponse]{@link google.iam.credentials.v1.SignJwtResponse}.
   *   Please see the
   *   [documentation](https://github.com/googleapis/gax-nodejs/blob/master/client-libraries.md#regular-methods)
   *   for more details and examples.
   * @example <caption>include:samples/generated/v1/i_a_m_credentials.sign_jwt.js</caption>
   * region_tag:iamcredentials_v1_generated_IAMCredentials_SignJwt_async
   */
  signJwt(
    request?: protos.google.iam.credentials.v1.ISignJwtRequest,
    options?: CallOptions
  ): Promise<
    [
      protos.google.iam.credentials.v1.ISignJwtResponse,
      protos.google.iam.credentials.v1.ISignJwtRequest | undefined,
      {} | undefined
    ]
  >;
  signJwt(
    request: protos.google.iam.credentials.v1.ISignJwtRequest,
    options: CallOptions,
    callback: Callback<
      protos.google.iam.credentials.v1.ISignJwtResponse,
      protos.google.iam.credentials.v1.ISignJwtRequest | null | undefined,
      {} | null | undefined
    >
  ): void;
  signJwt(
    request: protos.google.iam.credentials.v1.ISignJwtRequest,
    callback: Callback<
      protos.google.iam.credentials.v1.ISignJwtResponse,
      protos.google.iam.credentials.v1.ISignJwtRequest | null | undefined,
      {} | null | undefined
    >
  ): void;
  signJwt(
    request?: protos.google.iam.credentials.v1.ISignJwtRequest,
    optionsOrCallback?:
      | CallOptions
      | Callback<
          protos.google.iam.credentials.v1.ISignJwtResponse,
          protos.google.iam.credentials.v1.ISignJwtRequest | null | undefined,
          {} | null | undefined
        >,
    callback?: Callback<
      protos.google.iam.credentials.v1.ISignJwtResponse,
      protos.google.iam.credentials.v1.ISignJwtRequest | null | undefined,
      {} | null | undefined
    >
  ): Promise<
    [
      protos.google.iam.credentials.v1.ISignJwtResponse,
      protos.google.iam.credentials.v1.ISignJwtRequest | undefined,
      {} | undefined
    ]
  > | void {
    request = request || {};
    let options: CallOptions;
    if (typeof optionsOrCallback === 'function' && callback === undefined) {
      callback = optionsOrCallback;
      options = {};
    } else {
      options = optionsOrCallback as CallOptions;
    }
    options = options || {};
    options.otherArgs = options.otherArgs || {};
    options.otherArgs.headers = options.otherArgs.headers || {};
    options.otherArgs.headers['x-goog-request-params'] =
      gax.routingHeader.fromParams({
        name: request.name || '',
      });
    this.initialize();
    return this.innerApiCalls.signJwt(request, options, callback);
  }

  /**
   * Terminate the gRPC channel and close the client.
   *
   * The client will no longer be usable and all future behavior is undefined.
   * @returns {Promise} A promise that resolves when the client is closed.
   */
  close(): Promise<void> {
    if (this.iAMCredentialsStub && !this._terminated) {
      return this.iAMCredentialsStub.then(stub => {
        this._terminated = true;
        stub.close();
      });
    }
    return Promise.resolve();
  }
}
