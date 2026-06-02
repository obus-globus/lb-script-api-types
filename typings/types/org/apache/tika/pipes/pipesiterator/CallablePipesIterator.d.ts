import type { Callable } from '../../../../../java/util/concurrent/Callable.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { FetchEmitTuple } from '../../../../../org/apache/tika/pipes/FetchEmitTuple.d.ts'
export class CallablePipesIterator extends Object implements Callable<number> {
    constructor(arg0: FetchEmitTuple[], arg1: FetchEmitTuple[])
    constructor(arg0: FetchEmitTuple[], arg1: FetchEmitTuple[], arg2: number)
    constructor(arg0: FetchEmitTuple[], arg1: FetchEmitTuple[], arg2: number, arg3: number)
    // private numConsumers: number;
    // private pipesIterator: FetchEmitTuple[];
    // private queue: FetchEmitTuple[];
    // private timeoutMillis: number;
    call(): number;
}