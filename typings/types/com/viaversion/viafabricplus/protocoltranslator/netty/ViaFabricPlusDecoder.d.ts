import type { UserConnection } from '../../../../../com/viaversion/viaversion/api/connection/UserConnection.d.ts'
import type { ViaDecodeHandler } from '../../../../../com/viaversion/viaversion/platform/ViaDecodeHandler.d.ts'
import type { ChannelHandlerContext } from '../../../../../io/netty/channel/ChannelHandlerContext.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class ViaFabricPlusDecoder extends ViaDecodeHandler {
    static NAME: string;
    constructor(arg0: UserConnection)
    channelRead(arg0: ChannelHandlerContext, arg1: Object): void;
}