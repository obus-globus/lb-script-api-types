import type { InetAddress } from '../../../../java/net/InetAddress.d.ts'
import type { Socket } from '../../../../java/net/Socket.d.ts'
import type { SocketFactory } from '../../../../javax/net/SocketFactory.d.ts'
import type { AFSocketFactory } from '../../../../org/newsclub/net/unix/AFSocketFactory.d.ts'
import type { AFUNIXSocket } from '../../../../org/newsclub/net/unix/AFUNIXSocket.d.ts'
import type { AFUNIXSocketAddress } from '../../../../org/newsclub/net/unix/AFUNIXSocketAddress.d.ts'
export abstract class AFUNIXSocketFactory extends AFSocketFactory<AFUNIXSocketAddress> {
    static getDefault(): SocketFactory;
    constructor()
    connectTo(arg0: AFUNIXSocketAddress): AFUNIXSocket;
    createSocket(): Socket;
    createSocket(arg0: InetAddress, arg1: number): Socket;
    createSocket(arg0: InetAddress, arg1: number, arg2: InetAddress, arg3: number): Socket;
    createSocket(arg0: string, arg1: number): Socket;
    createSocket(arg0: string, arg1: number, arg2: InetAddress, arg3: number): Socket;
}