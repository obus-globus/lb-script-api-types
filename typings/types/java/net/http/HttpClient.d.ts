import type { AutoCloseable } from '../../../java/lang/AutoCloseable.d.ts'
import type { Authenticator } from '../../../java/net/Authenticator.d.ts'
import type { CookieHandler } from '../../../java/net/CookieHandler.d.ts'
import type { ProxySelector } from '../../../java/net/ProxySelector.d.ts'
import type { HttpClient$Builder } from '../../../java/net/http/HttpClient$Builder.d.ts'
import type { HttpClient$Redirect } from '../../../java/net/http/HttpClient$Redirect.d.ts'
import type { HttpClient$Version } from '../../../java/net/http/HttpClient$Version.d.ts'
import type { HttpRequest } from '../../../java/net/http/HttpRequest.d.ts'
import type { HttpResponse } from '../../../java/net/http/HttpResponse.d.ts'
import type { HttpResponse$BodyHandler } from '../../../java/net/http/HttpResponse$BodyHandler.d.ts'
import type { HttpResponse$BodySubscriber } from '../../../java/net/http/HttpResponse$BodySubscriber.d.ts'
import type { HttpResponse$PushPromiseHandler } from '../../../java/net/http/HttpResponse$PushPromiseHandler.d.ts'
import type { HttpResponse$ResponseInfo } from '../../../java/net/http/HttpResponse$ResponseInfo.d.ts'
import type { WebSocket$Builder } from '../../../java/net/http/WebSocket$Builder.d.ts'
import type { Duration } from '../../../java/time/Duration.d.ts'
import type { Optional } from '../../../java/util/Optional.d.ts'
import type { CompletableFuture } from '../../../java/util/concurrent/CompletableFuture.d.ts'
import type { Executor } from '../../../java/util/concurrent/Executor.d.ts'
import type { SSLContext } from '../../../javax/net/ssl/SSLContext.d.ts'
import type { SSLParameters } from '../../../javax/net/ssl/SSLParameters.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export abstract class HttpClient extends Object implements AutoCloseable {
    static newBuilder(): HttpClient$Builder;
    static newHttpClient(): HttpClient;
    constructor()
    authenticator(): Optional<Authenticator>;
    awaitTermination(arg0: Duration): boolean;
    close(): void;
    connectTimeout(): Optional<Duration>;
    cookieHandler(): Optional<CookieHandler>;
    executor(): Optional<Executor>;
    followRedirects(): HttpClient$Redirect;
    isTerminated(): boolean;
    newWebSocketBuilder(): WebSocket$Builder;
    proxy(): Optional<ProxySelector>;
    send<T extends Object | number | string | boolean>(arg0: HttpRequest, arg1: (param0: HttpResponse$ResponseInfo) => HttpResponse$BodySubscriber<T>): HttpResponse<T>;
    sendAsync<T extends Object | number | string | boolean>(arg0: HttpRequest, arg1: (param0: HttpResponse$ResponseInfo) => HttpResponse$BodySubscriber<T>): CompletableFuture<HttpResponse<T>>;
    sendAsync<T extends Object | number | string | boolean>(arg0: HttpRequest, arg1: (param0: HttpResponse$ResponseInfo) => HttpResponse$BodySubscriber<T>, arg2: HttpResponse$PushPromiseHandler<T>): CompletableFuture<HttpResponse<T>>;
    shutdown(): void;
    shutdownNow(): void;
    sslContext(): SSLContext;
    sslParameters(): SSLParameters;
    version(): HttpClient$Version;
}