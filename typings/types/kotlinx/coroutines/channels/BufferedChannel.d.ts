import type { CancellationException } from '../../../java/util/concurrent/CancellationException.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../java/lang/Throwable.d.ts'
import type { CoroutineContext } from '../../../kotlin/coroutines/CoroutineContext.d.ts'
import type { AtomicRef } from '../../../kotlinx/atomicfu/AtomicRef.d.ts'
import type { CancellableContinuation } from '../../../kotlinx/coroutines/CancellableContinuation.d.ts'
import type { Waiter } from '../../../kotlinx/coroutines/Waiter.d.ts'
import type { Channel } from '../../../kotlinx/coroutines/channels/Channel.d.ts'
import type { Channel$Factory } from '../../../kotlinx/coroutines/channels/Channel$Factory.d.ts'
import type { ChannelIterator } from '../../../kotlinx/coroutines/channels/ChannelIterator.d.ts'
import type { ChannelResult } from '../../../kotlinx/coroutines/channels/ChannelResult.d.ts'
import type { ChannelSegment } from '../../../kotlinx/coroutines/channels/ChannelSegment.d.ts'
import type { SelectInstance } from '../../../kotlinx/coroutines/selects/SelectInstance.d.ts'
export class BufferedChannel<E extends unknown> extends Object implements Channel<E> {
    static BUFFERED: number;
    static CONFLATED: number;
    static DEFAULT_BUFFER_PROPERTY_NAME: string;
    static Factory: Channel$Factory;
    static OPTIONAL_CHANNEL: number;
    static RENDEZVOUS: number;
    static UNLIMITED: number;
    constructor(capacity: number, onUndeliveredElement: ((param0: E) => void) | null)
    // private bufferOrRendezvousSend(curSenders: number): boolean;
    cancel(): void;
    cancel(cause: Throwable | null): boolean;
    cancel(cause: CancellationException | null): void;
    cancelImpl(cause: Throwable | null): boolean;
    // private cancelSuspendedReceiveRequests(lastSegment: ChannelSegment<E>, sendersCounter: number): void;
    checkSegmentStructureInvariants(): void;
    close(cause: Throwable | null): boolean;
    // private closeLinkedList(): ChannelSegment<E>;
    protected closeOrCancelImpl(cause: Throwable | null, cancel: boolean): boolean;
    // private completeCancel(sendersCur: number): void;
    // private completeClose(sendersCur: number): ChannelSegment<E>;
    // private completeCloseOrCancel(): void;
    protected dropFirstElementUntilTheSpecifiedCellIsInTheBuffer(globalCellIndex: number): void;
    // private expandBuffer(): void;
    // private findSegmentBufferEnd(id: number, startFrom: ChannelSegment<E>, currentBufferEndCounter: number): ChannelSegment<E> | null;
    // private findSegmentReceive(id: number, startFrom: ChannelSegment<E>): ChannelSegment<E> | null;
    // private findSegmentSend(id: number, startFrom: ChannelSegment<E>): ChannelSegment<E> | null;
    hasElements(): boolean;
    // private incCompletedExpandBufferAttempts(nAttempts: number): void;
    // private invokeCloseHandler(): void;
    invokeOnClose(handler: (param0: Throwable | null) => void): void;
    // private isCellNonEmpty(segment: ChannelSegment<E>, index: number, globalIndex: number): boolean;
    // private isClosed(sendersAndCloseStatusCur: number, isClosedForReceive: boolean): boolean;
    iterator(): ChannelIterator<E>;
    // private markAllEmptyCellsAsClosed(lastSegment: ChannelSegment<E>): number;
    // private markCancellationStarted(): void;
    // private markCancelled(): void;
    // private markClosed(): void;
    // private moveSegmentBufferEndToSpecifiedOrLast(id: number, startFrom: ChannelSegment<E>): void;
    // private onCancellationChannelResultImplDoNotCall(cause: Throwable, element: ChannelResult<E>, context: CoroutineContext): void;
    // private onCancellationImplDoNotCall(cause: Throwable, element: E, context: CoroutineContext): void;
    protected onClosedIdempotent(): void;
    // private onClosedReceiveCatchingOnNoWaiterSuspend(cont: CancellableContinuation<ChannelResult<E>>): void;
    // private onClosedReceiveOnNoWaiterSuspend(cont: CancellableContinuation<E>): void;
    // private onClosedSelectOnReceive(select: SelectInstance<Object>): void;
    // private onClosedSelectOnSend(element: E, select: SelectInstance<Object>): void;
    // private onClosedSend(element: E): void;
    // private onClosedSendOnNoWaiterSuspend(element: E, cont: CancellableContinuation<void>): void;
    protected onReceiveDequeued(): void;
    protected onReceiveEnqueued(): void;
    // private processResultSelectReceive(ignoredParam: Object | null, selectResult: Object | null): Object | null;
    // private processResultSelectReceiveCatching(ignoredParam: Object | null, selectResult: Object | null): Object | null;
    // private processResultSelectReceiveOrNull(ignoredParam: Object | null, selectResult: Object | null): Object | null;
    // private processResultSelectSend(ignoredParam: Object | null, selectResult: Object | null): Object | null;
    receive(): E;
    receiveCatching(): ChannelResult<E>;
    // private receiveCatchingOnNoWaiterSuspend(segment: ChannelSegment<E>, index: number, r: number): ChannelResult<E>;
    // private receiveImpl<R extends unknown>(waiter: Object | null, onElementRetrieved: (param0: E) => R, onSuspend: (param0: ChannelSegment<E>, param1: number, param2: number) => R, onClosed: () => R, onNoWaiterSuspend: (param0: ChannelSegment<E>, param1: number, param2: number) => R): R;
    // private receiveImplOnNoWaiter(segment: ChannelSegment<E>, index: number, r: number, waiter: Waiter, onElementRetrieved: (param0: E) => void, onClosed: () => void): void;
    // private receiveOnNoWaiterSuspend(segment: ChannelSegment<E>, index: number, r: number): E;
    // private registerSelectForReceive(select: SelectInstance<Object>, ignoredParam: Object | null): void;
    protected registerSelectForSend(select: SelectInstance<Object>, element: Object | null): void;
    // private removeUnprocessedElements(lastSegment: ChannelSegment<E>): void;
    send(element: E): void;
    sendBroadcast(element: E): boolean;
    protected sendImpl<R extends unknown>(element: E, waiter: Object | null, onRendezvousOrBuffered: () => R, onSuspend: (param0: ChannelSegment<E>, param1: number) => R, onClosed: () => R, onNoWaiterSuspend: (param0: ChannelSegment<E>, param1: number, param2: E, param3: number) => R): R;
    // private sendImplOnNoWaiter(segment: ChannelSegment<E>, index: number, element: E, s: number, waiter: Waiter, onRendezvousOrBuffered: () => void, onClosed: () => void): void;
    // private sendOnNoWaiterSuspend(segment: ChannelSegment<E>, index: number, element: E, s: number): void;
    shouldSendSuspend(): boolean;
    // private shouldSendSuspend(curSendersAndCloseStatus: number): boolean;
    toString(): string;
    toStringDebug(): string;
    tryReceive(): ChannelResult<E>;
    trySend(element: E): ChannelResult<void>;
    // private updateCellExpandBuffer(segment: ChannelSegment<E>, index: number, b: number): boolean;
    // private updateCellExpandBufferSlow(segment: ChannelSegment<E>, index: number, b: number): boolean;
    // private updateCellReceive(segment: ChannelSegment<E>, index: number, r: number, waiter: Object | null): Object | null;
    // private updateCellReceiveSlow(segment: ChannelSegment<E>, index: number, r: number, waiter: Object | null): Object | null;
    // private updateCellSend(segment: ChannelSegment<E>, index: number, element: E, s: number, waiter: Object | null, closed: boolean): number;
    // private updateCellSendSlow(segment: ChannelSegment<E>, index: number, element: E, s: number, waiter: Object | null, closed: boolean): number;
    // private updateReceiversCounterIfLower(value: number): void;
    // private updateSendersCounterIfLower(value: number): void;
    waitExpandBufferCompletion(globalIndex: number): void;
}