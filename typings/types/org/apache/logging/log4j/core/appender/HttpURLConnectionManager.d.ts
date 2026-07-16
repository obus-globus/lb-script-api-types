import type { URL } from '../../../../../../java/net/URL.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Layout } from '../../../../../../org/apache/logging/log4j/core/Layout.d.ts'
import type { LogEvent } from '../../../../../../org/apache/logging/log4j/core/LogEvent.d.ts'
import type { LoggerContext } from '../../../../../../org/apache/logging/log4j/core/LoggerContext.d.ts'
import type { AbstractManager } from '../../../../../../org/apache/logging/log4j/core/appender/AbstractManager.d.ts'
import type { HttpManager } from '../../../../../../org/apache/logging/log4j/core/appender/HttpManager.d.ts'
import type { ManagerFactory } from '../../../../../../org/apache/logging/log4j/core/appender/ManagerFactory.d.ts'
import type { Configuration } from '../../../../../../org/apache/logging/log4j/core/config/Configuration.d.ts'
import type { Property } from '../../../../../../org/apache/logging/log4j/core/config/Property.d.ts'
import type { SslConfiguration } from '../../../../../../org/apache/logging/log4j/core/net/ssl/SslConfiguration.d.ts'
export class HttpURLConnectionManager extends HttpManager {
    static getManager<M extends AbstractManager, T extends unknown>(paramname: string, paramfactory: ManagerFactory<M, T>, paramdata: T): M;
    static hasManager(paramname: string): boolean;
    constructor(configuration: Configuration, loggerContext: LoggerContext, name: string, url: URL, method: string, connectTimeoutMillis: number, readTimeoutMillis: number, headers: Property[], sslConfiguration: SslConfiguration, verifyHostname: boolean)
    // private connectTimeoutMillis: number;
    // private headers: Property[];
    // private isHttps: boolean;
    // private method: string;
    // private readTimeoutMillis: number;
    // private sslConfiguration: SslConfiguration;
    // private url: URL;
    // private verifyHostname: boolean;
    send(layout: Layout<any>, event: LogEvent): void;
}