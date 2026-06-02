import type { ByteBuf } from '../../../../../io/netty/buffer/ByteBuf.d.ts'
import type { ChannelHandlerContext } from '../../../../../io/netty/channel/ChannelHandlerContext.d.ts'
import type { ByteToMessageCodec } from '../../../../../io/netty/handler/codec/ByteToMessageCodec.d.ts'
import type { MessageDigest } from '../../../../../java/security/MessageDigest.d.ts'
import type { Cipher } from '../../../../../javax/crypto/Cipher.d.ts'
import type { SecretKey } from '../../../../../javax/crypto/SecretKey.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class AesEncryptionCodec extends ByteToMessageCodec<ByteBuf> {
    constructor(arg0: SecretKey)
    // private inCipher: Cipher;
    // private outCipher: Cipher;
    // private receivedPacketCounter: number;
    // private secretKey: SecretKey;
    // private sentPacketCounter: number;
    // private sha256: MessageDigest;
    decode(arg0: ChannelHandlerContext, arg1: ByteBuf, arg2: Object[]): void;
    encode(arg0: ChannelHandlerContext, arg1: ByteBuf, arg2: ByteBuf): void;
    // private generateHash(arg0: ByteBuf, arg1: number): number[];
}