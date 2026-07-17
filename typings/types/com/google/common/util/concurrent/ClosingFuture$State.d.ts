import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { ClosingFuture$Status } from '../../../../../com/google/common/util/concurrent/ClosingFuture$Status.d.ts'
import type { ClosingFuture$ValueAndCloser } from '../../../../../com/google/common/util/concurrent/ClosingFuture$ValueAndCloser.d.ts'
import type { ClosingFuture$ValueAndCloserConsumer } from '../../../../../com/google/common/util/concurrent/ClosingFuture$ValueAndCloserConsumer.d.ts'
import type { FluentFuture } from '../../../../../com/google/common/util/concurrent/FluentFuture.d.ts'
import type { Executor } from '../../../../../java/util/concurrent/Executor.d.ts'
import type { AtomicReference } from '../../../../../java/util/concurrent/atomic/AtomicReference.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class ClosingFuture$State<V extends unknown> extends Object {
    constructor(future: FluentFuture<V>, closeables: JavaMap<any, any>)
    // private closeables: JavaMap<any, any>;
    // private future: FluentFuture<V>;
    // private status: AtomicReference<ClosingFuture$Status>;
    becomeSubsumedInto(otherCloseables: JavaMap<any, any>): void;
    cancel(mayInterruptIfRunning: boolean): boolean;
    checkAndUpdateStatus(oldStatus: ClosingFuture$Status, newStatus: ClosingFuture$Status): void;
    close(): void;
    closeIfLeaked(): void;
    closingFutureToString(): string;
    compareAndUpdateStatus(oldStatus: ClosingFuture$Status, newStatus: ClosingFuture$Status): boolean;
    finishToFuture(): FluentFuture<V>;
    finishToValueAndCloser(consumer: (param0: ClosingFuture$ValueAndCloser<V>) => void, executor: Executor): void;
}