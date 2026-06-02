import type { CancelCodecException } from '../../../../com/viaversion/viaversion/exception/CancelCodecException.d.ts'
import type { EncoderException } from '../../../../io/netty/handler/codec/EncoderException.d.ts'
import type { Throwable } from '../../../../java/lang/Throwable.d.ts'
export class CancelEncoderException extends EncoderException implements CancelCodecException {
    static CACHED: CancelEncoderException;
    static generate(paramarg0: Throwable): CancelEncoderException;
    constructor()
    constructor(arg0: string)
    constructor(arg0: string, arg1: Throwable)
    constructor(arg0: Throwable)
}