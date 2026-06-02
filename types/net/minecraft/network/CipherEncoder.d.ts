import type { ByteBuf } from '../../../io/netty/buffer/ByteBuf.d.ts'
import type { ChannelHandlerContext } from '../../../io/netty/channel/ChannelHandlerContext.d.ts'
import type { MessageToByteEncoder } from '../../../io/netty/handler/codec/MessageToByteEncoder.d.ts'
import type { Cipher } from '../../../javax/crypto/Cipher.d.ts'
import type { CipherBase } from '../../../net/minecraft/network/CipherBase.d.ts'
export class CipherEncoder extends MessageToByteEncoder<ByteBuf> {
    constructor(cipher: Cipher)
    // private cipher: CipherBase;
    encode(ctx: ChannelHandlerContext, msg: ByteBuf, out: ByteBuf): void;
}