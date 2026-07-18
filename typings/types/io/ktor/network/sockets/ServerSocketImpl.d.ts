import type { SelectableBase } from '../../../../io/ktor/network/selector/SelectableBase.d.ts'
import type { SelectorManager } from '../../../../io/ktor/network/selector/SelectorManager.d.ts'
import type { ServerSocket } from '../../../../io/ktor/network/sockets/ServerSocket.d.ts'
import type { Socket } from '../../../../io/ktor/network/sockets/Socket.d.ts'
import type { SocketAddress } from '../../../../io/ktor/network/sockets/SocketAddress.d.ts'
import type { ServerSocketChannel } from '../../../../java/nio/channels/ServerSocketChannel.d.ts'
import type { SocketChannel } from '../../../../java/nio/channels/SocketChannel.d.ts'
import type { Continuation } from '../../../../kotlin/coroutines/Continuation.d.ts'
import type { CompletableJob } from '../../../../kotlinx/coroutines/CompletableJob.d.ts'
export class ServerSocketImpl extends SelectableBase implements ServerSocket {
    constructor(channel: ServerSocketChannel, selector: SelectorManager)
    readonly channel: ServerSocketChannel;
    readonly localAddress: SocketAddress;
    readonly selector: SelectorManager;
    readonly socketContext: CompletableJob;
    /** Kotlin `suspend` function: pass a Continuation ({ context, resumeWith }) as the final argument; returns the result or COROUTINE_SUSPENDED. */
    accept($completion: Continuation<Socket>): any;
    /** Kotlin `suspend` function: pass a Continuation ({ context, resumeWith }) as the final argument; returns the result or COROUTINE_SUSPENDED. */
    // private acceptSuspend($completion: Continuation<Socket>): any;
    // private accepted(nioChannel: SocketChannel): Socket;
    close(): void;
}