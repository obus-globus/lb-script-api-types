import type { URL } from '../../../../../../java/net/URL.d.ts'
import type { AbstractAppender$Builder } from '../../../../../../org/apache/logging/log4j/core/appender/AbstractAppender$Builder.d.ts'
import type { HttpAppender } from '../../../../../../org/apache/logging/log4j/core/appender/HttpAppender.d.ts'
import type { Property } from '../../../../../../org/apache/logging/log4j/core/config/Property.d.ts'
import type { SslConfiguration } from '../../../../../../org/apache/logging/log4j/core/net/ssl/SslConfiguration.d.ts'
import type { Builder } from '../../../../../../org/apache/logging/log4j/core/util/Builder.d.ts'
export class HttpAppender$Builder<B extends HttpAppender$Builder<B>> extends AbstractAppender$Builder<B> implements Builder<HttpAppender> {
    constructor()
    readonly connectTimeoutMillis: number;
    readonly headers: Property[];
    readonly method: string;
    readonly readTimeoutMillis: number;
    readonly sslConfiguration: SslConfiguration;
    readonly url: URL;
    readonly verifyHostname: boolean;
    build(): HttpAppender;
    getConnectTimeoutMillis(): number;
    getErrorPrefix(): string;
    getHeaders(): Property[];
    getMethod(): string;
    getReadTimeoutMillis(): number;
    getSslConfiguration(): SslConfiguration;
    getUrl(): URL;
    isValid(): boolean;
    isVerifyHostname(): boolean;
    setConnectTimeoutMillis(connectTimeoutMillis: number): B;
    setHeaders(headers: Property[]): B;
    setMethod(method: string): B;
    setReadTimeoutMillis(readTimeoutMillis: number): B;
    setSslConfiguration(sslConfiguration: SslConfiguration): B;
    setUrl(url: URL): B;
    setVerifyHostname(verifyHostname: boolean): B;
}