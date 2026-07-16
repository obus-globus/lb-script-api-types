import type { FluentFuture } from '../../../../../com/google/common/util/concurrent/FluentFuture.d.ts'
import type { FluentFuture$TrustedFuture } from '../../../../../com/google/common/util/concurrent/FluentFuture$TrustedFuture.d.ts'
import type { ListenableFuture } from '../../../../../com/google/common/util/concurrent/ListenableFuture.d.ts'
import type { ScheduledFuture } from '../../../../../java/util/concurrent/ScheduledFuture.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class TimeoutFuture<V extends unknown> extends FluentFuture$TrustedFuture<V> {
    static from<V extends unknown>(paramfuture: FluentFuture<V>): FluentFuture<V>;
    static from<V extends unknown>(paramfuture: ListenableFuture<V>): FluentFuture<V>;
    private constructor(delegate: ListenableFuture<V>)
    // private delegateRef: ListenableFuture<V>;
    // private timer: ScheduledFuture<Object>;
    afterDone(): void;
    pendingToString(): string;
}