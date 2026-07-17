import type { JavaMap } from '../../../../JavaMap.d.ts'
import type { AbstractApplicationBase$Builder } from '../../../../com/microsoft/aad/msal4j/AbstractApplicationBase$Builder.d.ts'
import type { AuthenticationResult } from '../../../../com/microsoft/aad/msal4j/AuthenticationResult.d.ts'
import type { AuthenticationResultSupplier } from '../../../../com/microsoft/aad/msal4j/AuthenticationResultSupplier.d.ts'
import type { Authority } from '../../../../com/microsoft/aad/msal4j/Authority.d.ts'
import type { IApplicationBase } from '../../../../com/microsoft/aad/msal4j/IApplicationBase.d.ts'
import type { IAuthenticationResult } from '../../../../com/microsoft/aad/msal4j/IAuthenticationResult.d.ts'
import type { IHttpClient } from '../../../../com/microsoft/aad/msal4j/IHttpClient.d.ts'
import type { MsalRequest } from '../../../../com/microsoft/aad/msal4j/MsalRequest.d.ts'
import type { ServiceBundle } from '../../../../com/microsoft/aad/msal4j/ServiceBundle.d.ts'
import type { TokenCache } from '../../../../com/microsoft/aad/msal4j/TokenCache.d.ts'
import type { Proxy } from '../../../../java/net/Proxy.d.ts'
import type { CompletableFuture } from '../../../../java/util/concurrent/CompletableFuture.d.ts'
import type { Consumer } from '../../../../java/util/function/Consumer.d.ts'
import type { SSLSocketFactory } from '../../../../javax/net/ssl/SSLSocketFactory.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Logger } from '../../../../org/slf4j/Logger.d.ts'
export abstract class AbstractApplicationBase extends Object implements IApplicationBase {
    static DEFAULT_AUTHORITY: string;
    constructor(arg0: AbstractApplicationBase$Builder<any>)
    // private authenticationAuthority: Authority;
    // private authority: string;
    // private clientId: string;
    // private connectTimeoutForDefaultHttpClient: number;
    // private correlationId: string;
    // private httpClient: IHttpClient;
    // private log: Logger;
    // private logPii: boolean;
    // private proxy: Proxy;
    // private readTimeoutForDefaultHttpClient: number;
    // private retryDisabled: boolean;
    // private serviceBundle: ServiceBundle;
    // private sslSocketFactory: SSLSocketFactory;
    // private telemetryConsumer: (param0: JavaMap<string, string>[]) => void;
    // private tenant: string;
    // private tokenCache: TokenCache;
    // private validateAuthority: boolean;
    acquireTokenCommon(arg0: MsalRequest, arg1: Authority): AuthenticationResult;
    authority(): string;
    clientId(): string;
    connectTimeoutForDefaultHttpClient(): number;
    correlationId(): string;
    executeRequest(arg0: MsalRequest): CompletableFuture<IAuthenticationResult>;
    // private getAuthenticationResultSupplier(arg0: MsalRequest): AuthenticationResultSupplier;
    httpClient(): IHttpClient;
    isRetryDisabled(): boolean;
    logPii(): boolean;
    proxy(): Proxy;
    readTimeoutForDefaultHttpClient(): number;
    serviceBundle(): ServiceBundle;
    sslSocketFactory(): SSLSocketFactory;
    telemetryConsumer(): (param0: JavaMap<string, string>[]) => void;
    tenant(): string;
    tokenCache(): TokenCache;
    validateAuthority(): boolean;
}