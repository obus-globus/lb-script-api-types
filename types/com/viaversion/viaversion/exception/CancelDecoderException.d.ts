import type { CancelCodecException } from '../../../../com/viaversion/viaversion/exception/CancelCodecException.d.ts'
import type { DecoderException } from '../../../../io/netty/handler/codec/DecoderException.d.ts'
import type { Throwable } from '../../../../java/lang/Throwable.d.ts'
export class CancelDecoderException extends DecoderException implements CancelCodecException {
    static CACHED: CancelDecoderException;
    static generate(paramarg0: Throwable): CancelDecoderException;
    constructor()
    constructor(arg0: string)
    constructor(arg0: string, arg1: Throwable)
    constructor(arg0: Throwable)
}