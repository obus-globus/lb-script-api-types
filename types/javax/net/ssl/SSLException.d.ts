import type { IOException } from '../../../java/io/IOException.d.ts'
import type { Throwable } from '../../../java/lang/Throwable.d.ts'
export class SSLException extends IOException {
    constructor(arg0: string)
    constructor(arg0: string, arg1: Throwable)
    constructor(arg0: Throwable)
}