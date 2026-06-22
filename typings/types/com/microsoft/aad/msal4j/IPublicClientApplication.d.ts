import type { AuthorizationRequestUrlParameters } from '../../../../com/microsoft/aad/msal4j/AuthorizationRequestUrlParameters.d.ts'
import type { DeviceCodeFlowParameters } from '../../../../com/microsoft/aad/msal4j/DeviceCodeFlowParameters.d.ts'
import type { IAuthenticationResult } from '../../../../com/microsoft/aad/msal4j/IAuthenticationResult.d.ts'
import type { IClientApplicationBase } from '../../../../com/microsoft/aad/msal4j/IClientApplicationBase.d.ts'
import type { IHttpClient } from '../../../../com/microsoft/aad/msal4j/IHttpClient.d.ts'
import type { IntegratedWindowsAuthenticationParameters } from '../../../../com/microsoft/aad/msal4j/IntegratedWindowsAuthenticationParameters.d.ts'
import type { InteractiveRequestParameters } from '../../../../com/microsoft/aad/msal4j/InteractiveRequestParameters.d.ts'
import type { UserNamePasswordParameters } from '../../../../com/microsoft/aad/msal4j/UserNamePasswordParameters.d.ts'
import type { Proxy } from '../../../../java/net/Proxy.d.ts'
import type { URL } from '../../../../java/net/URL.d.ts'
import type { CompletableFuture } from '../../../../java/util/concurrent/CompletableFuture.d.ts'
import type { SSLSocketFactory } from '../../../../javax/net/ssl/SSLSocketFactory.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface IPublicClientApplication extends IClientApplicationBase, Object{
    acquireToken(arg0: DeviceCodeFlowParameters): CompletableFuture<IAuthenticationResult>;
    acquireToken(arg0: IntegratedWindowsAuthenticationParameters): CompletableFuture<IAuthenticationResult>;
    acquireToken(arg0: InteractiveRequestParameters): CompletableFuture<IAuthenticationResult>;
    acquireToken(arg0: UserNamePasswordParameters): CompletableFuture<IAuthenticationResult>;
    authority(): string;
    clientId(): string;
    correlationId(): string;
    getAuthorizationRequestUrl(arg0: AuthorizationRequestUrlParameters): URL;
    httpClient(): IHttpClient;
    logPii(): boolean;
    proxy(): Proxy;
    sslSocketFactory(): SSLSocketFactory;
    validateAuthority(): boolean;
}