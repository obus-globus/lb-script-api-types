import type { ByteBuf } from '../../../io/netty/buffer/ByteBuf.d.ts'
import type { ChannelHandlerContext } from '../../../io/netty/channel/ChannelHandlerContext.d.ts'
import type { Cipher } from '../../../javax/crypto/Cipher.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class CipherBase extends Object {
    constructor(cipher: Cipher)
    // private cipher: Cipher;
    // private heapIn: number[];
    // private heapOut: number[];
    // private bufToByte(in_: ByteBuf): number[];
    decipher(ctx: ChannelHandlerContext, in_: ByteBuf): ByteBuf;
    encipher(in_: ByteBuf, out: ByteBuf): void;
}