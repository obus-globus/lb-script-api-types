import type { ModelException } from '../../ai/djl/ModelException.d.ts'
import type { Throwable } from '../../java/lang/Throwable.d.ts'
export class MalformedModelException extends ModelException {
    constructor(arg0: string)
    constructor(arg0: string, arg1: Throwable)
    constructor(arg0: Throwable)
}