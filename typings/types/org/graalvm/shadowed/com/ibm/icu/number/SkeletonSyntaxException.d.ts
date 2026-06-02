import type { IllegalArgumentException } from '../../../../../../../java/lang/IllegalArgumentException.d.ts'
import type { CharSequence } from '../../../../../../../java/lang/CharSequence.d.ts'
import type { Throwable } from '../../../../../../../java/lang/Throwable.d.ts'
export class SkeletonSyntaxException extends IllegalArgumentException {
    constructor(message: string, token: CharSequence)
    constructor(message: string, token: CharSequence, cause: Throwable)
}