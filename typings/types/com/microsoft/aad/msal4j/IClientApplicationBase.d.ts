import type { AuthorizationCodeParameters } from '../../../../com/microsoft/aad/msal4j/AuthorizationCodeParameters.d.ts'
import type { AuthorizationRequestUrlParameters } from '../../../../com/microsoft/aad/msal4j/AuthorizationRequestUrlParameters.d.ts'
import type { IAccount } from '../../../../com/microsoft/aad/msal4j/IAccount.d.ts'
import type { IApplicationBase } from '../../../../com/microsoft/aad/msal4j/IApplicationBase.d.ts'
import type { IAuthenticationResult } from '../../../../com/microsoft/aad/msal4j/IAuthenticationResult.d.ts'
import type { IHttpClient } from '../../../../com/microsoft/aad/msal4j/IHttpClient.d.ts'
import type { RefreshTokenParameters } from '../../../../com/microsoft/aad/msal4j/RefreshTokenParameters.d.ts'
import type { SilentParameters } from '../../../../com/microsoft/aad/msal4j/SilentParameters.d.ts'
import type { Proxy } from '../../../../java/net/Proxy.d.ts'
import type { URL } from '../../../../java/net/URL.d.ts'
import type { CompletableFuture } from '../../../../java/util/concurrent/CompletableFuture.d.ts'
import type { SSLSocketFactory } from '../../../../javax/net/ssl/SSLSocketFactory.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface IClientApplicationBase extends IApplicationBase, Object{
    acquireToken(arg0: AuthorizationCodeParameters): CompletableFuture<IAuthenticationResult>;
    acquireToken(arg0: RefreshTokenParameters): CompletableFuture<IAuthenticationResult>;
    acquireTokenSilently(arg0: SilentParameters): CompletableFuture<IAuthenticationResult>;
    authority(): string;
    clientId(): string;
    correlationId(): string;
    getAccounts(): CompletableFuture<IAccount[]>;
    getAuthorizationRequestUrl(arg0: AuthorizationRequestUrlParameters): URL;
    httpClient(): IHttpClient;
    logPii(): boolean;
    proxy(): Proxy;
    removeAccount(arg0: IAccount): CompletableFuture<Object>;
    sslSocketFactory(): SSLSocketFactory;
    validateAuthority(): boolean;
}