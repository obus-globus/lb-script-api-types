import type { ByteBuf } from '../../../io/netty/buffer/ByteBuf.d.ts'
import type { ChannelHandlerContext } from '../../../io/netty/channel/ChannelHandlerContext.d.ts'
import type { MessageToMessageDecoder } from '../../../io/netty/handler/codec/MessageToMessageDecoder.d.ts'
import type { Cipher } from '../../../javax/crypto/Cipher.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { CipherBase } from '../../../net/minecraft/network/CipherBase.d.ts'
export class CipherDecoder extends MessageToMessageDecoder<ByteBuf> {
    constructor(cipher: Cipher)
    // private cipher: CipherBase;
    decode(ctx: ChannelHandlerContext, msg: ByteBuf, out: Object[]): void;
}