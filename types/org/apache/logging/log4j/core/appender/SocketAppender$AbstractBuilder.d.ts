import type { AbstractOutputStreamAppender$Builder } from '../../../../../../org/apache/logging/log4j/core/appender/AbstractOutputStreamAppender$Builder.d.ts'
import type { Protocol } from '../../../../../../org/apache/logging/log4j/core/net/Protocol.d.ts'
import type { SocketOptions } from '../../../../../../org/apache/logging/log4j/core/net/SocketOptions.d.ts'
import type { SslConfiguration } from '../../../../../../org/apache/logging/log4j/core/net/ssl/SslConfiguration.d.ts'
export abstract class SocketAppender$AbstractBuilder<B extends SocketAppender$AbstractBuilder<B>> extends AbstractOutputStreamAppender$Builder<B> {
    constructor()
    readonly advertise: boolean;
    readonly connectTimeoutMillis: number;
    readonly host: string;
    readonly immediateFail: boolean;
    readonly port: number;
    readonly protocol: Protocol;
    readonly reconnectDelayMillis: number;
    readonly socketOptions: SocketOptions;
    readonly sslConfiguration: SslConfiguration;
    getAdvertise(): boolean;
    getConnectTimeoutMillis(): number;
    getHost(): string;
    getImmediateFail(): boolean;
    getPort(): number;
    getProtocol(): Protocol;
    getReconnectDelayMillis(): number;
    getSocketOptions(): SocketOptions;
    getSslConfiguration(): SslConfiguration;
    setAdvertise(advertise: boolean): B;
    setConnectTimeoutMillis(connectTimeoutMillis: number): B;
    setHost(host: string): B;
    setImmediateFail(immediateFail: boolean): B;
    setPort(port: number): B;
    setProtocol(protocol: Protocol): B;
    setReconnectDelayMillis(reconnectDelayMillis: number): B;
    setSocketOptions(socketOptions: SocketOptions): B;
    setSslConfiguration(sslConfiguration: SslConfiguration): B;
    withAdvertise(advertise: boolean): B;
    withConnectTimeoutMillis(connectTimeoutMillis: number): B;
    withHost(host: string): B;
    withImmediateFail(immediateFail: boolean): B;
    withPort(port: number): B;
    withProtocol(protocol: Protocol): B;
    withReconnectDelayMillis(reconnectDelayMillis: number): B;
    withSocketOptions(socketOptions: SocketOptions): B;
    withSslConfiguration(sslConfiguration: SslConfiguration): B;
}