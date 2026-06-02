import type { Serializable } from '../../../../../../java/io/Serializable.d.ts'
import type { Layout } from '../../../../../../org/apache/logging/log4j/core/Layout.d.ts'
import type { SocketOptions } from '../../../../../../org/apache/logging/log4j/core/net/SocketOptions.d.ts'
import type { TcpSocketManager$FactoryData } from '../../../../../../org/apache/logging/log4j/core/net/TcpSocketManager$FactoryData.d.ts'
import type { SslConfiguration } from '../../../../../../org/apache/logging/log4j/core/net/ssl/SslConfiguration.d.ts'
export class SslSocketManager$SslFactoryData extends TcpSocketManager$FactoryData {
    constructor(sslConfiguration: SslConfiguration, host: string, port: number, connectTimeoutMillis: number, reconnectDelayMillis: number, immediateFail: boolean, layout: Layout<Serializable>, bufferSize: number, socketOptions: SocketOptions)
    // private sslConfiguration: SslConfiguration;
    toString(): string;
}