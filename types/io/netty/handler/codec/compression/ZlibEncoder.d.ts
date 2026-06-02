import type { ByteBuf } from '../../../../../io/netty/buffer/ByteBuf.d.ts'
import type { ChannelFuture } from '../../../../../io/netty/channel/ChannelFuture.d.ts'
import type { ChannelPromise } from '../../../../../io/netty/channel/ChannelPromise.d.ts'
import type { MessageToByteEncoder } from '../../../../../io/netty/handler/codec/MessageToByteEncoder.d.ts'
export abstract class ZlibEncoder extends MessageToByteEncoder<ByteBuf> {
    constructor()
    close(): ChannelFuture;
    close(arg0: ChannelPromise): ChannelFuture;
    isClosed(): boolean;
}