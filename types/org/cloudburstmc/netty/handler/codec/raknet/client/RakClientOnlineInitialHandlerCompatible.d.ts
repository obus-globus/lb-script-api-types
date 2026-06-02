import type { ByteBuf } from '../../../../../../../io/netty/buffer/ByteBuf.d.ts'
import type { ChannelHandlerContext } from '../../../../../../../io/netty/channel/ChannelHandlerContext.d.ts'
import type { ChannelPromise } from '../../../../../../../io/netty/channel/ChannelPromise.d.ts'
import type { Promise } from '../../../../../../../io/netty/util/concurrent/Promise.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { RakChannel } from '../../../../../../../org/cloudburstmc/netty/channel/raknet/RakChannel.d.ts'
import type { RakClientOnlineInitialHandler } from '../../../../../../../org/cloudburstmc/netty/handler/codec/raknet/client/RakClientOnlineInitialHandler.d.ts'
export class RakClientOnlineInitialHandlerCompatible extends RakClientOnlineInitialHandler {
    static NAME: string;
    static NAME: string;
    constructor(arg0: RakChannel, arg1: ChannelPromise, arg2: Promise<Object>)
    // private packetPromise: Promise<Object>;
    // private pingTime: number;
    onConnectionRequestAccepted(arg0: ChannelHandlerContext, arg1: ByteBuf): void;
    onSuccess(arg0: ChannelHandlerContext): void;
    writeIncomingConnection(arg0: ChannelHandlerContext, arg1: ByteBuf, arg2: number): void;
}