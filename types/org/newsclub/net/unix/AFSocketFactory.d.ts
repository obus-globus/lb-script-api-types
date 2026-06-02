import type { Class } from '../../../../java/lang/Class.d.ts'
import type { InetAddress } from '../../../../java/net/InetAddress.d.ts'
import type { Socket } from '../../../../java/net/Socket.d.ts'
import type { SocketAddress } from '../../../../java/net/SocketAddress.d.ts'
import type { SocketFactory } from '../../../../javax/net/SocketFactory.d.ts'
import type { AFSocketAddress } from '../../../../org/newsclub/net/unix/AFSocketAddress.d.ts'
import type { AFSocketAddressFromHostname } from '../../../../org/newsclub/net/unix/AFSocketAddressFromHostname.d.ts'
export abstract class AFSocketFactory<A extends AFSocketAddress> extends SocketFactory implements AFSocketAddressFromHostname<A> {
    static getDefault(): SocketFactory;
    constructor(arg0: Class<AFSocketAddress>)
    // private socketAddressClass: Class<AFSocketAddress>;
    connectTo(arg0: A): Socket;
    // private connectTo(arg0: SocketAddress): Socket;
    createSocket(): Socket;
    createSocket(arg0: InetAddress, arg1: number): Socket;
    createSocket(arg0: InetAddress, arg1: number, arg2: InetAddress, arg3: number): Socket;
    createSocket(arg0: string, arg1: number): Socket;
    createSocket(arg0: string, arg1: number, arg2: InetAddress, arg3: number): Socket;
    isHostnameSupported(arg0: string): boolean;
    isInetAddressSupported(arg0: InetAddress): boolean;
}