import type { AbstractApplicationBase } from '../../../../com/microsoft/aad/msal4j/AbstractApplicationBase.d.ts'
import type { Authority } from '../../../../com/microsoft/aad/msal4j/Authority.d.ts'
import type { IHttpClient } from '../../../../com/microsoft/aad/msal4j/IHttpClient.d.ts'
import type { Proxy } from '../../../../java/net/Proxy.d.ts'
import type { ExecutorService } from '../../../../java/util/concurrent/ExecutorService.d.ts'
import type { Consumer } from '../../../../java/util/function/Consumer.d.ts'
import type { SSLSocketFactory } from '../../../../javax/net/ssl/SSLSocketFactory.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export abstract class AbstractApplicationBase$Builder<T extends AbstractApplicationBase$Builder<T>> extends Object {
    constructor()
    constructor(arg0: string)
    // private authenticationAuthority: Authority;
    // private clientId: string;
    // private connectTimeoutForDefaultHttpClient: number;
    // private correlationId: string;
    // private disableInternalRetries: boolean;
    // private executorService: ExecutorService;
    // private httpClient: IHttpClient;
    // private logPii: boolean;
    // private onlySendFailureTelemetry: boolean;
    // private proxy: Proxy;
    // private readTimeoutForDefaultHttpClient: number;
    // private sslSocketFactory: SSLSocketFactory;
    // private telemetryConsumer: (param0: { [key: string]: string }[]) => void;
    build(): AbstractApplicationBase;
    connectTimeoutForDefaultHttpClient(arg0: number): T;
    correlationId(arg0: string): T;
    disableInternalRetries(): T;
    executorService(arg0: ExecutorService): T;
    httpClient(arg0: IHttpClient): T;
    logPii(arg0: boolean): T;
    onlySendFailureTelemetry(arg0: boolean): T;
    proxy(arg0: Proxy): T;
    readTimeoutForDefaultHttpClient(arg0: number): T;
    self(): T;
    sslSocketFactory(arg0: SSLSocketFactory): T;
    telemetryConsumer(arg0: (param0: { [key: string]: string }[]) => void): T;
}