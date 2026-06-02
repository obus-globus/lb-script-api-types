import type { IllegalStateException } from '../../../../java/lang/IllegalStateException.d.ts'
import type { Throwable } from '../../../../java/lang/Throwable.d.ts'
export class MessageAggregationException extends IllegalStateException {
    constructor()
    constructor(arg0: string)
    constructor(arg0: string, arg1: Throwable)
    constructor(arg0: Throwable)
}