import type { Serializable } from '../../../../java/io/Serializable.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Continuation } from '../../../../kotlin/coroutines/Continuation.d.ts'
import type { CoroutineContext } from '../../../../kotlin/coroutines/CoroutineContext.d.ts'
import type { BaseContinuationImpl } from '../../../../kotlin/coroutines/jvm/internal/BaseContinuationImpl.d.ts'
export abstract class ContinuationImpl extends BaseContinuationImpl implements Serializable {
    constructor(completion: Continuation<Object> | null)
    constructor(completion: Continuation<Object> | null, _context: CoroutineContext | null)
    // private _context: CoroutineContext | null;
    readonly context: CoroutineContext;
    // private intercepted: Continuation<Object> | null;
    intercepted(): Continuation<Object>;
    protected releaseIntercepted(): void;
}