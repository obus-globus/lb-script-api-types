import type { ChannelHandlerContext } from '../../../../io/netty/channel/ChannelHandlerContext.d.ts'
import type { AtomicIntegerFieldUpdater } from '../../../../java/util/concurrent/atomic/AtomicIntegerFieldUpdater.d.ts'
import type { AtomicLongFieldUpdater } from '../../../../java/util/concurrent/atomic/AtomicLongFieldUpdater.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class NettyHttpHandlerState extends Object {
    static activeRequests$FU$internal: AtomicLongFieldUpdater<Object>;
    static isChannelReadCompleted$FU$internal: AtomicIntegerFieldUpdater<Object>;
    static isCurrentRequestFullyRead$FU$internal: AtomicIntegerFieldUpdater<Object>;
    static skippedRead$FU$internal: AtomicIntegerFieldUpdater<Object>;
    static streamingResponses$FU$internal: AtomicLongFieldUpdater<Object>;
    constructor(runningLimit: number)
    // private runningLimit: number;
    onLastResponseMessage(context: ChannelHandlerContext): void;
}