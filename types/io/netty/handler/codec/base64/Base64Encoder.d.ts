import type { ByteBuf } from '../../../../../io/netty/buffer/ByteBuf.d.ts'
import type { ChannelHandlerContext } from '../../../../../io/netty/channel/ChannelHandlerContext.d.ts'
import type { MessageToMessageEncoder } from '../../../../../io/netty/handler/codec/MessageToMessageEncoder.d.ts'
import type { Base64Dialect } from '../../../../../io/netty/handler/codec/base64/Base64Dialect.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Base64Encoder extends MessageToMessageEncoder<ByteBuf> {
    constructor()
    constructor(arg0: boolean)
    constructor(arg0: boolean, arg1: Base64Dialect)
    // private breakLines: boolean;
    // private dialect: Base64Dialect;
    encode(arg0: ChannelHandlerContext, arg1: ByteBuf, arg2: Object[]): void;
}