import type { UnsupportedOperationException } from '../../../../java/lang/UnsupportedOperationException.d.ts'
import type { Throwable } from '../../../../java/lang/Throwable.d.ts'
export class NotImplementedException extends UnsupportedOperationException {
    constructor()
    constructor(arg0: string)
    constructor(arg0: string, arg1: string)
    constructor(arg0: string, arg1: Throwable)
    constructor(arg0: string, arg1: Throwable, arg2: string)
    constructor(arg0: Throwable)
    constructor(arg0: Throwable, arg1: string)
    readonly code: string;
    getCode(): string;
}