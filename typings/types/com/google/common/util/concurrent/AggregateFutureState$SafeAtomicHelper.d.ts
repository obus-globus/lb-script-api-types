import type { AggregateFutureState$1 } from '../../../../../com/google/gson/LongSerializationPolicy$1.d.ts'
import type { AggregateFutureState } from '../../../../../com/google/common/util/concurrent/AggregateFutureState.d.ts'
import type { AggregateFutureState$AtomicHelper } from '../../../../../com/google/common/util/concurrent/AggregateFutureState$AtomicHelper.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../../../java/lang/Throwable.d.ts'
export class AggregateFutureState$SafeAtomicHelper extends AggregateFutureState$AtomicHelper {
    private constructor()
    constructor(arg0: AggregateFutureState$1)
    atomicHelperTypeForTest(): string;
    compareAndSetSeenExceptions(state: AggregateFutureState<Object>, expect: Throwable[], update: Throwable[]): void;
    decrementAndGetRemainingCount(state: AggregateFutureState<Object>): number;
}