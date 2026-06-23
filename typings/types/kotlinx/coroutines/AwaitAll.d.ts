import type { Object } from '../../java/lang/Object.d.ts'
import type { AtomicInt } from '../../kotlinx/atomicfu/AtomicInt.d.ts'
import type { Deferred } from '../../kotlinx/coroutines/Deferred.d.ts'
export class AwaitAll<T extends unknown> extends Object {
    constructor(deferreds: Deferred<T>[])
    await(): T[];
}