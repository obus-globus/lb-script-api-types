import type { UserConnection } from '../../../../com/viaversion/viaversion/api/connection/UserConnection.d.ts'
import type { ViaChannelHandler } from '../../../../com/viaversion/viaversion/api/platform/ViaChannelHandler.d.ts'
import type { ByteBuf } from '../../../../io/netty/buffer/ByteBuf.d.ts'
import type { ChannelHandlerContext } from '../../../../io/netty/channel/ChannelHandlerContext.d.ts'
import type { MessageToMessageDecoder } from '../../../../io/netty/handler/codec/MessageToMessageDecoder.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../../java/lang/Throwable.d.ts'
export class ViaDecodeHandler extends MessageToMessageDecoder<ByteBuf> implements ViaChannelHandler {
    static NAME: string;
    constructor(arg0: UserConnection)
    // private connection: UserConnection;
    connection(): UserConnection;
    decode(arg0: ChannelHandlerContext, arg1: ByteBuf, arg2: Object[]): void;
    exceptionCaught(arg0: ChannelHandlerContext, arg1: Throwable): void;
    isSharable(): boolean;
}