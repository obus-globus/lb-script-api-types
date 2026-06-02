import type { OutputStream } from '../../../../../../java/io/OutputStream.d.ts'
import type { InetAddress } from '../../../../../../java/net/InetAddress.d.ts'
import type { InetSocketAddress } from '../../../../../../java/net/InetSocketAddress.d.ts'
import type { Socket } from '../../../../../../java/net/Socket.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { ManagerFactory } from '../../../../../../org/apache/logging/log4j/core/appender/ManagerFactory.d.ts'
import type { TcpSocketManager } from '../../../../../../org/apache/logging/log4j/core/net/TcpSocketManager.d.ts'
import type { TcpSocketManager$FactoryData } from '../../../../../../org/apache/logging/log4j/core/net/TcpSocketManager$FactoryData.d.ts'
export class TcpSocketManager$TcpSocketManagerFactory<M extends TcpSocketManager, T extends TcpSocketManager$FactoryData> extends Object implements ManagerFactory<M, T> {
    constructor()
    createManager(name: string, data: T): M;
    createManager(name: string, os: OutputStream, socket: Socket, inetAddress: InetAddress, data: T): M;
    createSocket(data: T): Socket;
    errorMessage(data: T, socketAddresses: InetSocketAddress[]): string;
}