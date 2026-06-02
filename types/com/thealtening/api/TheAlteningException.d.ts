import type { RuntimeException } from '../../../java/lang/RuntimeException.d.ts'
import type { Throwable } from '../../../java/lang/Throwable.d.ts'
export class TheAlteningException extends RuntimeException {
    constructor(arg0: string, arg1: string)
    constructor(arg0: string, arg1: Throwable)
}