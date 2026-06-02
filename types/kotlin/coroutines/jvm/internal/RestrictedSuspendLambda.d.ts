import type { Serializable } from '../../../../java/io/Serializable.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Continuation } from '../../../../kotlin/coroutines/Continuation.d.ts'
import type { RestrictedContinuationImpl } from '../../../../kotlin/coroutines/jvm/internal/RestrictedContinuationImpl.d.ts'
import type { SuspendFunction } from '../../../../kotlin/coroutines/jvm/internal/SuspendFunction.d.ts'
import type { FunctionBase } from '../../../../kotlin/jvm/internal/FunctionBase.d.ts'
export abstract class RestrictedSuspendLambda extends RestrictedContinuationImpl implements Serializable, SuspendFunction, FunctionBase<Object> {
    constructor(arity: number)
    constructor(arity: number, completion: Continuation<Object> | null)
    readonly arity: number;
    toString(): string;
}