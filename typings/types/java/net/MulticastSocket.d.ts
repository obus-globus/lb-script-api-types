import type { DatagramPacket } from '../../java/net/DatagramPacket.d.ts'
import type { DatagramSocket } from '../../java/net/DatagramSocket.d.ts'
import type { DatagramSocketImplFactory } from '../../java/net/DatagramSocketImplFactory.d.ts'
import type { InetAddress } from '../../java/net/InetAddress.d.ts'
import type { NetworkInterface } from '../../java/net/NetworkInterface.d.ts'
import type { SocketAddress } from '../../java/net/SocketAddress.d.ts'
export class MulticastSocket extends DatagramSocket {
    static setDatagramSocketImplFactory(paramarg0: DatagramSocketImplFactory): void;
    constructor()
    constructor(arg0: MulticastSocket)
    constructor(arg0: SocketAddress)
    constructor(arg0: number)
    delegate(): MulticastSocket;
    getInterface(): InetAddress;
    getLoopbackMode(): boolean;
    getNetworkInterface(): NetworkInterface;
    getTTL(): number;
    getTimeToLive(): number;
    joinGroup(arg0: InetAddress): void;
    joinGroup(arg0: SocketAddress, arg1: NetworkInterface): void;
    leaveGroup(arg0: InetAddress): void;
    leaveGroup(arg0: SocketAddress, arg1: NetworkInterface): void;
    send(arg0: DatagramPacket): void;
    send(arg0: DatagramPacket, arg1: number): void;
    setInterface(arg0: InetAddress): void;
    setLoopbackMode(arg0: boolean): void;
    setNetworkInterface(arg0: NetworkInterface): void;
    setTTL(arg0: number): void;
    setTimeToLive(arg0: number): void;
}