import type { Authenticator } from '../../../java/net/Authenticator.d.ts'
import type { CookieHandler } from '../../../java/net/CookieHandler.d.ts'
import type { InetAddress } from '../../../java/net/InetAddress.d.ts'
import type { ProxySelector } from '../../../java/net/ProxySelector.d.ts'
import type { HttpClient } from '../../../java/net/http/HttpClient.d.ts'
import type { HttpClient$Redirect } from '../../../java/net/http/HttpClient$Redirect.d.ts'
import type { HttpClient$Version } from '../../../java/net/http/HttpClient$Version.d.ts'
import type { Duration } from '../../../java/time/Duration.d.ts'
import type { Executor } from '../../../java/util/concurrent/Executor.d.ts'
import type { SSLContext } from '../../../javax/net/ssl/SSLContext.d.ts'
import type { SSLParameters } from '../../../javax/net/ssl/SSLParameters.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export interface HttpClient$Builder extends Object{
    authenticator(arg0: Authenticator): HttpClient$Builder;
    build(): HttpClient;
    connectTimeout(arg0: Duration): HttpClient$Builder;
    cookieHandler(arg0: CookieHandler): HttpClient$Builder;
    executor(arg0: Executor): HttpClient$Builder;
    followRedirects(arg0: HttpClient$Redirect): HttpClient$Builder;
    localAddress(arg0: InetAddress): HttpClient$Builder;
    priority(arg0: number): HttpClient$Builder;
    proxy(arg0: ProxySelector): HttpClient$Builder;
    sslContext(arg0: SSLContext): HttpClient$Builder;
    sslParameters(arg0: SSLParameters): HttpClient$Builder;
    version(arg0: HttpClient$Version): HttpClient$Builder;
}