import type { SpdySession$PendingWrite } from '../../../../../io/netty/handler/codec/spdy/SpdySession$PendingWrite.d.ts'
import type { AtomicInteger } from '../../../../../java/util/concurrent/atomic/AtomicInteger.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../../../java/lang/Throwable.d.ts'
export class SpdySession$StreamState extends Object {
    constructor(arg0: number, arg1: boolean, arg2: boolean, arg3: number, arg4: number)
    // private localSideClosed: boolean;
    // private pendingWriteQueue: SpdySession$PendingWrite[];
    // private priority: number;
    // private receiveWindowSize: AtomicInteger;
    // private receiveWindowSizeLowerBound: number;
    // private receivedReply: boolean;
    // private remoteSideClosed: boolean;
    // private sendWindowSize: AtomicInteger;
    clearPendingWrites(arg0: Throwable): void;
    closeLocalSide(): void;
    closeRemoteSide(): void;
    getPendingWrite(): SpdySession$PendingWrite;
    getPriority(): number;
    getReceiveWindowSizeLowerBound(): number;
    getSendWindowSize(): number;
    hasReceivedReply(): boolean;
    isLocalSideClosed(): boolean;
    isRemoteSideClosed(): boolean;
    putPendingWrite(arg0: SpdySession$PendingWrite): boolean;
    receivedReply(): void;
    removePendingWrite(): SpdySession$PendingWrite;
    setReceiveWindowSizeLowerBound(arg0: number): void;
    updateReceiveWindowSize(arg0: number): number;
    updateSendWindowSize(arg0: number): number;
}