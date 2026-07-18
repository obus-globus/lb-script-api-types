import type { SelectorManager } from '../../../../io/ktor/network/selector/SelectorManager.d.ts'
import type { Configurable } from '../../../../io/ktor/network/sockets/Configurable.d.ts'
import type { ServerSocket } from '../../../../io/ktor/network/sockets/ServerSocket.d.ts'
import type { Socket } from '../../../../io/ktor/network/sockets/Socket.d.ts'
import type { SocketAddress } from '../../../../io/ktor/network/sockets/SocketAddress.d.ts'
import type { SocketOptions$AcceptorOptions } from '../../../../io/ktor/network/sockets/SocketOptions$AcceptorOptions.d.ts'
import type { SocketOptions$PeerSocketOptions } from '../../../../io/ktor/network/sockets/SocketOptions$PeerSocketOptions.d.ts'
import type { SocketOptions$TCPClientSocketOptions } from '../../../../io/ktor/network/sockets/SocketOptions$TCPClientSocketOptions.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Continuation } from '../../../../kotlin/coroutines/Continuation.d.ts'
export class TcpSocketBuilder extends Object implements Configurable<TcpSocketBuilder, SocketOptions$PeerSocketOptions> {
    constructor(selector: SelectorManager, options: SocketOptions$PeerSocketOptions)
    options: SocketOptions$PeerSocketOptions;
    // private selector: SelectorManager;
    /** Kotlin `suspend` function: pass a Continuation ({ context, resumeWith }) as the final argument; returns the result or COROUTINE_SUSPENDED. */
    bind(localAddress: SocketAddress | null, configure: (param0: SocketOptions$AcceptorOptions) => void, $completion: Continuation<ServerSocket>): any;
    /** Kotlin `suspend` function: pass a Continuation ({ context, resumeWith }) as the final argument; returns the result or COROUTINE_SUSPENDED. */
    bind(hostname: string, port: number, configure: (param0: SocketOptions$AcceptorOptions) => void, $completion: Continuation<ServerSocket>): any;
    configure(block: (param0: SocketOptions$PeerSocketOptions) => void): TcpSocketBuilder;
    /** Kotlin `suspend` function: pass a Continuation ({ context, resumeWith }) as the final argument; returns the result or COROUTINE_SUSPENDED. */
    connect(remoteAddress: SocketAddress, configure: (param0: SocketOptions$TCPClientSocketOptions) => void, $completion: Continuation<Socket>): any;
    /** Kotlin `suspend` function: pass a Continuation ({ context, resumeWith }) as the final argument; returns the result or COROUTINE_SUSPENDED. */
    connect(hostname: string, port: number, configure: (param0: SocketOptions$TCPClientSocketOptions) => void, $completion: Continuation<Socket>): any;
}