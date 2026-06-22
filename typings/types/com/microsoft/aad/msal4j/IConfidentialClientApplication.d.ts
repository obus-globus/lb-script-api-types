import type { AuthorizationRequestUrlParameters } from '../../../../com/microsoft/aad/msal4j/AuthorizationRequestUrlParameters.d.ts'
import type { ClientCredentialParameters } from '../../../../com/microsoft/aad/msal4j/ClientCredentialParameters.d.ts'
import type { IAuthenticationResult } from '../../../../com/microsoft/aad/msal4j/IAuthenticationResult.d.ts'
import type { IClientApplicationBase } from '../../../../com/microsoft/aad/msal4j/IClientApplicationBase.d.ts'
import type { IHttpClient } from '../../../../com/microsoft/aad/msal4j/IHttpClient.d.ts'
import type { OnBehalfOfParameters } from '../../../../com/microsoft/aad/msal4j/OnBehalfOfParameters.d.ts'
import type { Proxy } from '../../../../java/net/Proxy.d.ts'
import type { URL } from '../../../../java/net/URL.d.ts'
import type { CompletableFuture } from '../../../../java/util/concurrent/CompletableFuture.d.ts'
import type { SSLSocketFactory } from '../../../../javax/net/ssl/SSLSocketFactory.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface IConfidentialClientApplication extends IClientApplicationBase, Object{
    acquireToken(arg0: ClientCredentialParameters): CompletableFuture<IAuthenticationResult>;
    acquireToken(arg0: OnBehalfOfParameters): CompletableFuture<IAuthenticationResult>;
    authority(): string;
    clientId(): string;
    correlationId(): string;
    getAuthorizationRequestUrl(arg0: AuthorizationRequestUrlParameters): URL;
    httpClient(): IHttpClient;
    logPii(): boolean;
    proxy(): Proxy;
    sendX5c(): boolean;
    sslSocketFactory(): SSLSocketFactory;
    validateAuthority(): boolean;
}