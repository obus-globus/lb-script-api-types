import type { EncoderException } from '../../../io/netty/handler/codec/EncoderException.d.ts'
import type { Throwable } from '../../../java/lang/Throwable.d.ts'
import type { SkipPacketException } from '../../../net/minecraft/network/SkipPacketException.d.ts'
import type { IdDispatchCodec$DontDecorateException } from '../../../net/minecraft/network/codec/IdDispatchCodec$DontDecorateException.d.ts'
export class SkipPacketEncoderException extends EncoderException implements SkipPacketException, IdDispatchCodec$DontDecorateException {
    constructor(message: string)
    constructor(cause: Throwable)
}