import type { AadInstanceDiscoveryResponse } from '../../../../com/microsoft/aad/msal4j/AadInstanceDiscoveryResponse.d.ts'
import type { AbstractApplicationBase$Builder } from '../../../../com/microsoft/aad/msal4j/AbstractApplicationBase$Builder.d.ts'
import type { AbstractClientApplicationBase } from '../../../../com/microsoft/aad/msal4j/AbstractClientApplicationBase.d.ts'
import type { Authority } from '../../../../com/microsoft/aad/msal4j/Authority.d.ts'
import type { IHttpClient } from '../../../../com/microsoft/aad/msal4j/IHttpClient.d.ts'
import type { ITokenCacheAccessAspect } from '../../../../com/microsoft/aad/msal4j/ITokenCacheAccessAspect.d.ts'
import type { Proxy } from '../../../../java/net/Proxy.d.ts'
import type { ExecutorService } from '../../../../java/util/concurrent/ExecutorService.d.ts'
import type { SSLSocketFactory } from '../../../../javax/net/ssl/SSLSocketFactory.d.ts'
export abstract class AbstractClientApplicationBase$Builder<T extends AbstractClientApplicationBase$Builder<T>> extends AbstractApplicationBase$Builder<T> {
    constructor(arg0: string)
    // private aadInstanceDiscoveryResponse: AadInstanceDiscoveryResponse;
    // private applicationName: string;
    // private applicationVersion: string;
    // private authenticationAuthority: Authority;
    // private authority: string;
    // private autoDetectRegion: boolean;
    // private azureRegion: string;
    // private clientCapabilities: string;
    // private clientId: string;
    // private isInstanceDiscoveryEnabled: boolean;
    // private tokenCacheAccessAspect: ITokenCacheAccessAspect;
    // private validateAuthority: boolean;
    aadInstanceDiscoveryResponse(arg0: string): T;
    applicationName(arg0: string): T;
    applicationVersion(arg0: string): T;
    authority(arg0: string): T;
    autoDetectRegion(arg0: boolean): T;
    azureRegion(arg0: string): T;
    b2cAuthority(arg0: string): T;
    build(): AbstractClientApplicationBase;
    clientCapabilities(arg0: string[]): T;
    connectTimeoutForDefaultHttpClient(arg0: number): T;
    correlationId(arg0: string): T;
    executorService(arg0: ExecutorService): T;
    httpClient(arg0: IHttpClient): T;
    instanceDiscovery(arg0: boolean): T;
    logPii(arg0: boolean): T;
    oidcAuthority(arg0: string): T;
    proxy(arg0: Proxy): T;
    readTimeoutForDefaultHttpClient(arg0: number): T;
    self(): T;
    setTokenCacheAccessAspect(arg0: ITokenCacheAccessAspect): T;
    sslSocketFactory(arg0: SSLSocketFactory): T;
    validateAuthority(arg0: boolean): T;
}