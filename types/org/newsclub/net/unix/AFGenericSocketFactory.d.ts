import type { Socket } from '../../../../java/net/Socket.d.ts'
import type { SocketFactory } from '../../../../javax/net/SocketFactory.d.ts'
import type { AFGenericSocket } from '../../../../org/newsclub/net/unix/AFGenericSocket.d.ts'
import type { AFGenericSocketAddress } from '../../../../org/newsclub/net/unix/AFGenericSocketAddress.d.ts'
import type { AFSocketFactory } from '../../../../org/newsclub/net/unix/AFSocketFactory.d.ts'
export abstract class AFGenericSocketFactory extends AFSocketFactory<AFGenericSocketAddress> {
    static getDefault(): SocketFactory;
    constructor()
    configure(arg0: AFGenericSocket): AFGenericSocket;
    connectTo(arg0: AFGenericSocketAddress): AFGenericSocket;
    createSocket(): Socket;
}