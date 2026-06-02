import type { ChannelHandlerContext } from '../../../../../io/netty/channel/ChannelHandlerContext.d.ts'
import type { MessageToMessageEncoder } from '../../../../../io/netty/handler/codec/MessageToMessageEncoder.d.ts'
import type { LineSeparator } from '../../../../../io/netty/handler/codec/string/LineSeparator.d.ts'
import type { Charset } from '../../../../../java/nio/charset/Charset.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../../../java/lang/CharSequence.d.ts'
export class LineEncoder extends MessageToMessageEncoder<CharSequence> {
    constructor()
    constructor(arg0: LineSeparator)
    constructor(arg0: LineSeparator, arg1: Charset)
    constructor(arg0: Charset)
    // private charset: Charset;
    // private lineSeparator: number[];
    encode(arg0: ChannelHandlerContext, arg1: CharSequence, arg2: Object[]): void;
}