import type { IHttpClient } from '../../../../com/microsoft/aad/msal4j/IHttpClient.d.ts'
import type { Proxy } from '../../../../java/net/Proxy.d.ts'
import type { SSLSocketFactory } from '../../../../javax/net/ssl/SSLSocketFactory.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface IApplicationBase extends Object{
    correlationId(): string;
    httpClient(): IHttpClient;
    logPii(): boolean;
    proxy(): Proxy;
    sslSocketFactory(): SSLSocketFactory;
}