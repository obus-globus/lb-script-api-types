import type { Socket } from '../../../../java/net/Socket.d.ts'
import type { SocketAddress } from '../../../../java/net/SocketAddress.d.ts'
import type { SocketFactory } from '../../../../javax/net/SocketFactory.d.ts'
import type { AFSocketAddress } from '../../../../org/newsclub/net/unix/AFSocketAddress.d.ts'
import type { AFSocketFactory } from '../../../../org/newsclub/net/unix/AFSocketFactory.d.ts'
export class AFSocketFactory$FixedAddressSocketFactory extends AFSocketFactory<AFSocketAddress> {
    static getDefault(): SocketFactory;
    constructor(arg0: SocketAddress)
    // private forceAddr: SocketAddress;
    addressFromHost(arg0: string, arg1: number): SocketAddress;
    connectTo(arg0: AFSocketAddress): Socket;
    createSocket(): Socket;
    isHostnameSupported(arg0: string): boolean;
}