import type { SelectorManager } from '../../../../io/ktor/network/selector/SelectorManager.d.ts'
import type { BoundDatagramSocket } from '../../../../io/ktor/network/sockets/BoundDatagramSocket.d.ts'
import type { Configurable } from '../../../../io/ktor/network/sockets/Configurable.d.ts'
import type { ConnectedDatagramSocket } from '../../../../io/ktor/network/sockets/ConnectedDatagramSocket.d.ts'
import type { SocketAddress } from '../../../../io/ktor/network/sockets/SocketAddress.d.ts'
import type { SocketOptions$UDPSocketOptions } from '../../../../io/ktor/network/sockets/SocketOptions$UDPSocketOptions.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Continuation } from '../../../../kotlin/coroutines/Continuation.d.ts'
export class UDPSocketBuilder extends Object implements Configurable<UDPSocketBuilder, SocketOptions$UDPSocketOptions> {
    constructor(selector: SelectorManager, options: SocketOptions$UDPSocketOptions)
    options: SocketOptions$UDPSocketOptions;
    // private selector: SelectorManager;
    /** Kotlin `suspend` function: pass a Continuation ({ context, resumeWith }) as the final argument; returns the result or COROUTINE_SUSPENDED. */
    bind(localAddress: SocketAddress | null, configure: (param0: SocketOptions$UDPSocketOptions) => void, $completion: Continuation<BoundDatagramSocket>): any;
    /** Kotlin `suspend` function: pass a Continuation ({ context, resumeWith }) as the final argument; returns the result or COROUTINE_SUSPENDED. */
    bind(hostname: string, port: number, configure: (param0: SocketOptions$UDPSocketOptions) => void, $completion: Continuation<BoundDatagramSocket>): any;
    configure(block: (param0: SocketOptions$UDPSocketOptions) => void): UDPSocketBuilder;
    /** Kotlin `suspend` function: pass a Continuation ({ context, resumeWith }) as the final argument; returns the result or COROUTINE_SUSPENDED. */
    connect(remoteAddress: SocketAddress, localAddress: SocketAddress | null, configure: (param0: SocketOptions$UDPSocketOptions) => void, $completion: Continuation<ConnectedDatagramSocket>): any;
}