import type { OutputStream } from '../../../../../../java/io/OutputStream.d.ts'
import type { Serializable } from '../../../../../../java/io/Serializable.d.ts'
import type { InetAddress } from '../../../../../../java/net/InetAddress.d.ts'
import type { InetSocketAddress } from '../../../../../../java/net/InetSocketAddress.d.ts'
import type { Socket } from '../../../../../../java/net/Socket.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Layout } from '../../../../../../org/apache/logging/log4j/core/Layout.d.ts'
import type { ManagerFactory } from '../../../../../../org/apache/logging/log4j/core/appender/ManagerFactory.d.ts'
import type { OutputStreamManager } from '../../../../../../org/apache/logging/log4j/core/appender/OutputStreamManager.d.ts'
import type { AbstractSocketManager } from '../../../../../../org/apache/logging/log4j/core/net/AbstractSocketManager.d.ts'
import type { SocketOptions } from '../../../../../../org/apache/logging/log4j/core/net/SocketOptions.d.ts'
import type { TcpSocketManager$HostResolver } from '../../../../../../org/apache/logging/log4j/core/net/TcpSocketManager$HostResolver.d.ts'
import type { TcpSocketManager$Reconnector } from '../../../../../../org/apache/logging/log4j/core/net/TcpSocketManager$Reconnector.d.ts'
export class TcpSocketManager extends AbstractSocketManager {
    static DEFAULT_RECONNECTION_DELAY_MILLIS: number;
    static getManager(paramname: string, paramfactory: ManagerFactory<Object, Object>, paramdata: Object | null): Object | null;
    static getManager(paramname: string, paramdata: Object | null, paramfactory: ManagerFactory<Object, Object>): OutputStreamManager;
    static getSocketManager(paramhost: string, paramport: number, paramconnectTimeoutMillis: number, paramreconnectDelayMillis: number, paramimmediateFail: boolean, paramlayout: Layout<Object>, parambufferSize: number): TcpSocketManager;
    static getSocketManager(paramhost: string, paramport: number, paramconnectTimeoutMillis: number, paramreconnectDelayMillis: number, paramimmediateFail: boolean, paramlayout: Layout<Object>, parambufferSize: number, paramsocketOptions: SocketOptions): TcpSocketManager;
    static hasManager(paramname: string): boolean;
    static setHostResolver(paramresolver: TcpSocketManager$HostResolver): void;
    constructor(name: string, os: OutputStream, socket: Socket, inetAddress: InetAddress, host: string, port: number, connectTimeoutMillis: number, reconnectionDelayMillis: number, immediateFail: boolean, layout: Layout<Serializable>, bufferSize: number)
    constructor(name: string, os: OutputStream, socket: Socket, inetAddress: InetAddress, host: string, port: number, connectTimeoutMillis: number, reconnectionDelayMillis: number, immediateFail: boolean, layout: Layout<Serializable>, bufferSize: number, socketOptions: SocketOptions)
    readonly connectTimeoutMillis: number;
    // private immediateFail: boolean;
    readonly reconnectionDelayMillis: number;
    // private reconnector: TcpSocketManager$Reconnector;
    // private retry: boolean;
    readonly socket: Socket;
    readonly socketOptions: SocketOptions;
    closeOutputStream(): boolean;
    // private createReconnector(): TcpSocketManager$Reconnector;
    createSocket(socketAddress: InetSocketAddress): Socket;
    getConnectTimeoutMillis(): number;
    getContentFormat(): { [key: string]: string };
    getReconnectionDelayMillis(): number;
    getSocket(): Socket;
    getSocketOptions(): SocketOptions;
    toString(): string;
    write(bytes: number[], offset: number, length: number, immediateFlush: boolean): void;
    // private writeAndFlush(bytes: number[], offset: number, length: number, immediateFlush: boolean): void;
}