import type { Serializable } from '../../../../java/io/Serializable.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Continuation } from '../../../../kotlin/coroutines/Continuation.d.ts'
import type { CoroutineContext } from '../../../../kotlin/coroutines/CoroutineContext.d.ts'
import type { BaseContinuationImpl } from '../../../../kotlin/coroutines/jvm/internal/BaseContinuationImpl.d.ts'
export abstract class RestrictedContinuationImpl extends BaseContinuationImpl implements Serializable {
    constructor(completion: Continuation<Object> | null)
    readonly context: CoroutineContext;
}