import type { UserConnection } from '../../../../com/viaversion/viaversion/api/connection/UserConnection.d.ts'
import type { ViaChannelHandler } from '../../../../com/viaversion/viaversion/api/platform/ViaChannelHandler.d.ts'
import type { ByteBuf } from '../../../../io/netty/buffer/ByteBuf.d.ts'
import type { ChannelHandlerContext } from '../../../../io/netty/channel/ChannelHandlerContext.d.ts'
import type { MessageToMessageEncoder } from '../../../../io/netty/handler/codec/MessageToMessageEncoder.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../../java/lang/Throwable.d.ts'
export class ViaEncodeHandler extends MessageToMessageEncoder<ByteBuf> implements ViaChannelHandler {
    static NAME: string;
    constructor(arg0: UserConnection)
    // private connection: UserConnection;
    connection(): UserConnection;
    encode(arg0: ChannelHandlerContext, arg1: ByteBuf, arg2: Object[]): void;
    exceptionCaught(arg0: ChannelHandlerContext, arg1: Throwable): void;
    isSharable(): boolean;
}