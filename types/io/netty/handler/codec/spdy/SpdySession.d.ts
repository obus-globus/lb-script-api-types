import type { SpdySession$PendingWrite } from '../../../../../io/netty/handler/codec/spdy/SpdySession$PendingWrite.d.ts'
import type { SpdySession$StreamComparator } from '../../../../../io/netty/handler/codec/spdy/SpdySession$StreamComparator.d.ts'
import type { SpdySession$StreamState } from '../../../../../io/netty/handler/codec/spdy/SpdySession$StreamState.d.ts'
import type { AtomicInteger } from '../../../../../java/util/concurrent/atomic/AtomicInteger.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../../../java/lang/Throwable.d.ts'
export class SpdySession extends Object {
    constructor(arg0: number, arg1: number)
    // private activeLocalStreams: AtomicInteger;
    // private activeRemoteStreams: AtomicInteger;
    // private activeStreams: { [key: number]: SpdySession$StreamState };
    // private receiveWindowSize: AtomicInteger;
    // private sendWindowSize: AtomicInteger;
    // private streamComparator: SpdySession$StreamComparator;
    acceptStream(arg0: number, arg1: number, arg2: boolean, arg3: boolean, arg4: number, arg5: number, arg6: boolean): void;
    activeStreams(): { [key: number]: SpdySession$StreamState };
    closeLocalSide(arg0: number, arg1: boolean): void;
    closeRemoteSide(arg0: number, arg1: boolean): void;
    getPendingWrite(arg0: number): SpdySession$PendingWrite;
    getReceiveWindowSizeLowerBound(arg0: number): number;
    getSendWindowSize(arg0: number): number;
    hasReceivedReply(arg0: number): boolean;
    isActiveStream(arg0: number): boolean;
    isLocalSideClosed(arg0: number): boolean;
    isRemoteSideClosed(arg0: number): boolean;
    noActiveStreams(): boolean;
    numActiveStreams(arg0: boolean): number;
    putPendingWrite(arg0: number, arg1: SpdySession$PendingWrite): boolean;
    receivedReply(arg0: number): void;
    // private removeActiveStream(arg0: number, arg1: boolean): SpdySession$StreamState;
    removePendingWrite(arg0: number): SpdySession$PendingWrite;
    removeStream(arg0: number, arg1: Throwable, arg2: boolean): void;
    updateAllReceiveWindowSizes(arg0: number): void;
    updateAllSendWindowSizes(arg0: number): void;
    updateReceiveWindowSize(arg0: number, arg1: number): number;
    updateSendWindowSize(arg0: number, arg1: number): number;
}