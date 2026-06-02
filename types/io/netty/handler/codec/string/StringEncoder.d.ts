import type { ChannelHandlerContext } from '../../../../../io/netty/channel/ChannelHandlerContext.d.ts'
import type { MessageToMessageEncoder } from '../../../../../io/netty/handler/codec/MessageToMessageEncoder.d.ts'
import type { Charset } from '../../../../../java/nio/charset/Charset.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../../../java/lang/CharSequence.d.ts'
export class StringEncoder extends MessageToMessageEncoder<CharSequence> {
    constructor()
    constructor(arg0: Charset)
    // private charset: Charset;
    encode(arg0: ChannelHandlerContext, arg1: CharSequence, arg2: Object[]): void;
}