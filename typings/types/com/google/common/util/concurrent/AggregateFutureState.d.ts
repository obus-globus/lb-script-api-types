import type { AbstractFuture$TrustedFuture } from '../../../../../com/google/common/util/concurrent/AbstractFuture$TrustedFuture.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../../../java/lang/Throwable.d.ts'
export abstract class AggregateFutureState<OutputT extends unknown> extends AbstractFuture$TrustedFuture<OutputT> {
    constructor(remainingFutures: number)
    // private remainingField: number;
    // private seenExceptionsField: Throwable[];
    addInitialException(seen: Throwable[]): void;
    clearSeenExceptions(): void;
    decrementRemainingAndGet(): number;
    getOrInitSeenExceptions(): Throwable[];
}