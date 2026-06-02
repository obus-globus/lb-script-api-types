import type { UserConnection } from '../../../../com/viaversion/viaversion/api/connection/UserConnection.d.ts'
import type { ViaChannelHandler } from '../../../../com/viaversion/viaversion/api/platform/ViaChannelHandler.d.ts'
import type { ByteBuf } from '../../../../io/netty/buffer/ByteBuf.d.ts'
import type { ChannelHandlerContext } from '../../../../io/netty/channel/ChannelHandlerContext.d.ts'
import type { ChannelPromise } from '../../../../io/netty/channel/ChannelPromise.d.ts'
import type { ByteToMessageCodec } from '../../../../io/netty/handler/codec/ByteToMessageCodec.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class ViaCodecHandler extends ByteToMessageCodec<ByteBuf> implements ViaChannelHandler {
    static NAME: string;
    constructor(arg0: UserConnection)
    // private connection: UserConnection;
    channelRead(arg0: ChannelHandlerContext, arg1: Object): void;
    connection(): UserConnection;
    decode(arg0: ChannelHandlerContext, arg1: ByteBuf, arg2: Object[]): void;
    encode(arg0: ChannelHandlerContext, arg1: ByteBuf, arg2: ByteBuf): void;
    write(arg0: ChannelHandlerContext, arg1: Object, arg2: ChannelPromise): void;
}