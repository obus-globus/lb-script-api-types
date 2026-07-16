import type { Object } from '../../../java/lang/Object.d.ts'
import type { Iterator } from '../../../java/util/Iterator.d.ts'
import type { Sequence } from '../../../kotlin/sequences/Sequence.d.ts'
import type { Flow } from '../../../kotlinx/coroutines/flow/Flow.d.ts'
export class FlowKt__BuildersKt extends Object {
    static asFlow<T extends unknown>(paramarg0: T[]): Flow<T>;
    static asFlow<T extends unknown>(paramarg0: Iterator<T>): Flow<T>;
    static asFlow<T extends unknown>(paramarg0: () => T): Flow<T>;
    static asFlow<T extends unknown>(paramarg0: (param0: Object) => Object): Flow<T>;
    static asFlow<T extends unknown>(paramarg0: Sequence<T>): Flow<T>;
    static asFlow(paramarg0: number[]): Flow<number>;
    static asFlow(paramarg0: { start: number; endInclusive: number; step: number }): Flow<number>;
    static callbackFlow<T extends unknown>(paramarg0: (param0: Object, param1: Object) => Object): Flow<T>;
    static channelFlow<T extends unknown>(paramarg0: (param0: Object, param1: Object) => Object): Flow<T>;
    static emptyFlow<T extends unknown>(): Flow<T>;
    static flow<T extends unknown>(paramarg0: (param0: Object, param1: Object) => Object): Flow<T>;
    static flowOf<T extends unknown>(paramarg0: T): Flow<T>;
    static flowOf<T extends unknown>(...paramarg0: T[]): Flow<T>;
}