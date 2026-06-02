import type { Throwable } from '../../../../java/lang/Throwable.d.ts'
import type { TikaException } from '../../../../org/apache/tika/exception/TikaException.d.ts'
export class AccessPermissionException extends TikaException {
    constructor()
    constructor(arg0: string)
    constructor(arg0: string, arg1: Throwable)
    constructor(arg0: Throwable)
}