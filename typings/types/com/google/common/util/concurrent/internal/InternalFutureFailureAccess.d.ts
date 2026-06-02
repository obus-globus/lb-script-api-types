import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../../../../java/lang/Throwable.d.ts'
export abstract class InternalFutureFailureAccess extends Object {
    constructor()
    tryInternalFastPathGetFailure(): Throwable;
}