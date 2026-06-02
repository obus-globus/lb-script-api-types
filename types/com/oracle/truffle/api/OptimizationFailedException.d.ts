import type { RootCallTarget } from '../../../../com/oracle/truffle/api/RootCallTarget.d.ts'
import type { RuntimeException } from '../../../../java/lang/RuntimeException.d.ts'
import type { Throwable } from '../../../../java/lang/Throwable.d.ts'
export class OptimizationFailedException extends RuntimeException {
    constructor(cause: Throwable, callTarget: RootCallTarget)
    readonly callTarget: RootCallTarget;
    getCallTarget(): RootCallTarget;
}