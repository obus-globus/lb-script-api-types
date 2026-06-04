import type { Object } from '../../java/lang/Object.d.ts'
import type { Throwable } from '../../java/lang/Throwable.d.ts'
import type { AtomicRef } from '../../kotlinx/atomicfu/AtomicRef.d.ts'
import type { Incomplete } from '../../kotlinx/coroutines/Incomplete.d.ts'
import type { NodeList } from '../../kotlinx/coroutines/NodeList.d.ts'
export class JobSupport$Finishing extends Object implements Incomplete {
    constructor(list: NodeList, isCompleting: boolean, rootCause: Throwable | null)
    addExceptionLocked(exception: Throwable): void;
    // private allocateList(): Throwable[];
    sealLocked(proposedException: Throwable | null): Throwable[];
    toString(): string;
}