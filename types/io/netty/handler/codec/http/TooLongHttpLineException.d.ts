import type { TooLongFrameException } from '../../../../../io/netty/handler/codec/TooLongFrameException.d.ts'
import type { Throwable } from '../../../../../java/lang/Throwable.d.ts'
export class TooLongHttpLineException extends TooLongFrameException {
    constructor()
    constructor(arg0: string)
    constructor(arg0: string, arg1: Throwable)
    constructor(arg0: Throwable)
}