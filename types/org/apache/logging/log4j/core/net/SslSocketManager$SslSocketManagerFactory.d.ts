import type { OutputStream } from '../../../../../../java/io/OutputStream.d.ts'
import type { InetAddress } from '../../../../../../java/net/InetAddress.d.ts'
import type { Socket } from '../../../../../../java/net/Socket.d.ts'
import type { SslSocketManager } from '../../../../../../org/apache/logging/log4j/core/net/SslSocketManager.d.ts'
import type { SslSocketManager$SslFactoryData } from '../../../../../../org/apache/logging/log4j/core/net/SslSocketManager$SslFactoryData.d.ts'
import type { TcpSocketManager$TcpSocketManagerFactory } from '../../../../../../org/apache/logging/log4j/core/net/TcpSocketManager$TcpSocketManagerFactory.d.ts'
export class SslSocketManager$SslSocketManagerFactory extends TcpSocketManager$TcpSocketManagerFactory<SslSocketManager, SslSocketManager$SslFactoryData> {
    private constructor()
    createManager(name: string, os: OutputStream, socket: Socket, inetAddress: InetAddress, data: SslSocketManager$SslFactoryData): SslSocketManager;
    createSocket(data: SslSocketManager$SslFactoryData): Socket;
}