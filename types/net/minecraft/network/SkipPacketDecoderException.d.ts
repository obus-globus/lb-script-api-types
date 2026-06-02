import type { DecoderException } from '../../../io/netty/handler/codec/DecoderException.d.ts'
import type { Throwable } from '../../../java/lang/Throwable.d.ts'
import type { SkipPacketException } from '../../../net/minecraft/network/SkipPacketException.d.ts'
import type { IdDispatchCodec$DontDecorateException } from '../../../net/minecraft/network/codec/IdDispatchCodec$DontDecorateException.d.ts'
export class SkipPacketDecoderException extends DecoderException implements SkipPacketException, IdDispatchCodec$DontDecorateException {
    constructor(message: string)
    constructor(cause: Throwable)
}