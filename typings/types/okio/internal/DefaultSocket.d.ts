import type { Socket } from '../../java/net/Socket.d.ts'
import type { AtomicInteger } from '../../java/util/concurrent/atomic/AtomicInteger.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
import type { Sink } from '../../okio/Sink.d.ts'
import type { Socket as Socket_2 } from '../../okio/Socket.d.ts'
import type { Source } from '../../okio/Source.d.ts'
export class DefaultSocket extends Object implements Socket_2 {
    constructor(socket: Socket)
    // private closeBits: AtomicInteger;
    readonly sink: Sink;
    readonly socket: Socket;
    readonly source: Source;
    cancel(): void;
    toString(): string;
}