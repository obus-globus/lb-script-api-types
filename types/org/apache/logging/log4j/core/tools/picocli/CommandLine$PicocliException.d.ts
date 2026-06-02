import type { Exception } from '../../../../../../../java/lang/Exception.d.ts'
import type { RuntimeException } from '../../../../../../../java/lang/RuntimeException.d.ts'
export class CommandLine$PicocliException extends RuntimeException {
    constructor(msg: string)
    constructor(msg: string, ex: Exception)
}