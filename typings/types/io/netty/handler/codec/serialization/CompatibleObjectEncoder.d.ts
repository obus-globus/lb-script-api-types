import type { ByteBuf } from '../../../../../io/netty/buffer/ByteBuf.d.ts'
import type { ChannelHandlerContext } from '../../../../../io/netty/channel/ChannelHandlerContext.d.ts'
import type { MessageToByteEncoder } from '../../../../../io/netty/handler/codec/MessageToByteEncoder.d.ts'
import type { ObjectOutputStream } from '../../../../../java/io/ObjectOutputStream.d.ts'
import type { OutputStream } from '../../../../../java/io/OutputStream.d.ts'
import type { Serializable } from '../../../../../java/io/Serializable.d.ts'
export class CompatibleObjectEncoder extends MessageToByteEncoder<Serializable> {
    constructor()
    constructor(arg0: number)
    // private resetInterval: number;
    // private writtenObjects: number;
    encode(arg0: ChannelHandlerContext, arg1: Serializable, arg2: ByteBuf): void;
    newObjectOutputStream(arg0: OutputStream): ObjectOutputStream;
}