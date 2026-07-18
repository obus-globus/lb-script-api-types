import type { Exception } from '../../../../java/lang/Exception.d.ts'
import type { Throwable } from '../../../../java/lang/Throwable.d.ts'
export class BadRequestException extends Exception {
    constructor(message: string, cause: Throwable | null)
}