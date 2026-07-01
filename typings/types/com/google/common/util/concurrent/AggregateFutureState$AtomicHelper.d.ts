import type { AggregateFutureState } from '../../../../../com/google/common/util/concurrent/AggregateFutureState.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../../../java/lang/Throwable.d.ts'
export abstract class AggregateFutureState$AtomicHelper extends Object {
    constructor(arg0: any)
    atomicHelperTypeForTest(): string;
    compareAndSetSeenExceptions(state: AggregateFutureState<Object>, expect: Throwable[], update: Throwable[]): void;
    decrementAndGetRemainingCount(state: AggregateFutureState<Object>): number;
}