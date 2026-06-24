import type { ExecutionException } from '../../../../../java/util/concurrent/ExecutionException.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../../../java/lang/Throwable.d.ts'
export class AbstractFuture$Failure extends Object {
    constructor(exception: Throwable)
    // private exception: Throwable;
    newExecutionException(): ExecutionException;
}