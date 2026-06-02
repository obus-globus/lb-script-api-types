import type { OutputStream } from '../../../../../../java/io/OutputStream.d.ts'
import type { Serializable } from '../../../../../../java/io/Serializable.d.ts'
import type { InetAddress } from '../../../../../../java/net/InetAddress.d.ts'
import type { InetSocketAddress } from '../../../../../../java/net/InetSocketAddress.d.ts'
import type { Socket } from '../../../../../../java/net/Socket.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Layout } from '../../../../../../org/apache/logging/log4j/core/Layout.d.ts'
import type { ManagerFactory } from '../../../../../../org/apache/logging/log4j/core/appender/ManagerFactory.d.ts'
import type { OutputStreamManager } from '../../../../../../org/apache/logging/log4j/core/appender/OutputStreamManager.d.ts'
import type { SocketOptions } from '../../../../../../org/apache/logging/log4j/core/net/SocketOptions.d.ts'
import type { TcpSocketManager } from '../../../../../../org/apache/logging/log4j/core/net/TcpSocketManager.d.ts'
import type { TcpSocketManager$HostResolver } from '../../../../../../org/apache/logging/log4j/core/net/TcpSocketManager$HostResolver.d.ts'
import type { SslConfiguration } from '../../../../../../org/apache/logging/log4j/core/net/ssl/SslConfiguration.d.ts'
export class SslSocketManager extends TcpSocketManager {
    static DEFAULT_PORT: number;
    static DEFAULT_RECONNECTION_DELAY_MILLIS: number;
    static getManager(paramname: string, paramfactory: ManagerFactory<Object, Object>, paramdata: Object | null): Object | null;
    static getManager(paramname: string, paramdata: Object | null, paramfactory: ManagerFactory<Object, Object>): OutputStreamManager;
    static getSocketManager(paramsslConfig: SslConfiguration, paramhost: string, paramport: number, paramconnectTimeoutMillis: number, paramreconnectDelayMillis: number, paramimmediateFail: boolean, paramlayout: Layout<Object>, parambufferSize: number): SslSocketManager;
    static getSocketManager(paramsslConfig: SslConfiguration, paramhost: string, paramport: number, paramconnectTimeoutMillis: number, paramreconnectDelayMillis: number, paramimmediateFail: boolean, paramlayout: Layout<Object>, parambufferSize: number, paramsocketOptions: SocketOptions): SslSocketManager;
    static getSocketManager(paramhost: string, paramport: number, paramconnectTimeoutMillis: number, paramreconnectDelayMillis: number, paramimmediateFail: boolean, paramlayout: Layout<Object>, parambufferSize: number): TcpSocketManager;
    static getSocketManager(paramhost: string, paramport: number, paramconnectTimeoutMillis: number, paramreconnectDelayMillis: number, paramimmediateFail: boolean, paramlayout: Layout<Object>, parambufferSize: number, paramsocketOptions: SocketOptions): TcpSocketManager;
    static hasManager(paramname: string): boolean;
    static setHostResolver(paramresolver: TcpSocketManager$HostResolver): void;
    constructor(name: string, os: OutputStream, sock: Socket, sslConfig: SslConfiguration, inetAddress: InetAddress, host: string, port: number, connectTimeoutMillis: number, reconnectionDelayMillis: number, immediateFail: boolean, layout: Layout<Serializable>, bufferSize: number)
    constructor(name: string, os: OutputStream, sock: Socket, sslConfig: SslConfiguration, inetAddress: InetAddress, host: string, port: number, connectTimeoutMillis: number, reconnectionDelayMillis: number, immediateFail: boolean, layout: Layout<Serializable>, bufferSize: number, socketOptions: SocketOptions)
    // private sslConfig: SslConfiguration;
    createSocket(socketAddress: InetSocketAddress): Socket;
}