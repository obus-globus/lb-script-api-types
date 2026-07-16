import type { InetAddress } from '../../../../java/net/InetAddress.d.ts'
import type { InetSocketAddress } from '../../../../java/net/InetSocketAddress.d.ts'
import type { NetworkInterface } from '../../../../java/net/NetworkInterface.d.ts'
import type { ServerSocket } from '../../../../java/net/ServerSocket.d.ts'
import type { Socket } from '../../../../java/net/Socket.d.ts'
import type { SocketAddress } from '../../../../java/net/SocketAddress.d.ts'
import type { DatagramChannel } from '../../../../java/nio/channels/DatagramChannel.d.ts'
import type { ServerSocketChannel } from '../../../../java/nio/channels/ServerSocketChannel.d.ts'
import type { SocketChannel } from '../../../../java/nio/channels/SocketChannel.d.ts'
import type { Enumeration } from '../../../../java/util/Enumeration.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class SocketUtils extends Object {
    static accept(paramarg0: ServerSocketChannel): SocketChannel;
    static addressByName(paramarg0: string): InetAddress;
    static addressesFromNetworkInterface(paramarg0: NetworkInterface): Enumeration<InetAddress>;
    static allAddressesByName(paramarg0: string): InetAddress[];
    static bind(paramarg0: Socket, paramarg1: SocketAddress): void;
    static bind(paramarg0: DatagramChannel, paramarg1: SocketAddress): void;
    static bind(paramarg0: SocketChannel, paramarg1: SocketAddress): void;
    static connect(paramarg0: SocketChannel, paramarg1: SocketAddress): boolean;
    static connect(paramarg0: Socket, paramarg1: SocketAddress, paramarg2: number): void;
    static hardwareAddressFromNetworkInterface(paramarg0: NetworkInterface): number[];
    static localSocketAddress(paramarg0: ServerSocket): SocketAddress;
    static loopbackAddress(): InetAddress;
    static socketAddress(paramarg0: string, paramarg1: number): InetSocketAddress;
    private constructor()
}