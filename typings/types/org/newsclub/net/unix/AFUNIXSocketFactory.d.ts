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
}