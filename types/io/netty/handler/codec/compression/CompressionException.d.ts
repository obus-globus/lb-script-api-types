import type { EncoderException } from '../../../../../io/netty/handler/codec/EncoderException.d.ts'
import type { Throwable } from '../../../../../java/lang/Throwable.d.ts'
export class CompressionException extends EncoderException {
    constructor()
    constructor(arg0: string)
    constructor(arg0: string, arg1: Throwable)
    constructor(arg0: Throwable)
}