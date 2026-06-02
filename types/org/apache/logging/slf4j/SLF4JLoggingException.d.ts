import type { Exception } from '../../../../java/lang/Exception.d.ts'
import type { RuntimeException } from '../../../../java/lang/RuntimeException.d.ts'
export class SLF4JLoggingException extends RuntimeException {
    constructor(ex: Exception)
    constructor(msg: string)
    constructor(msg: string, ex: Exception)
}