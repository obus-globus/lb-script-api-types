import type { CorruptedFrameException } from '../../../../../io/netty/handler/codec/CorruptedFrameException.d.ts'
import type { Throwable } from '../../../../../java/lang/Throwable.d.ts'
export class InvalidChunkExtensionException extends CorruptedFrameException {
    constructor()
    constructor(arg0: string)
    constructor(arg0: string, arg1: Throwable)
    constructor(arg0: Throwable)
}