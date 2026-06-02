import type { ChannelInitializer } from '../../../../../../io/netty/channel/ChannelInitializer.d.ts'
import type { SocketChannel } from '../../../../../../io/netty/channel/socket/SocketChannel.d.ts'
export class OAuthClient$NettyChannelInitializer extends ChannelInitializer<SocketChannel> {
    constructor()
    protected initChannel(ch: SocketChannel): void;
}