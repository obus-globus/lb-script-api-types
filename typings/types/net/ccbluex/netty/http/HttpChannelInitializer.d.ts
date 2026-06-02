import type { ChannelInitializer } from '../../../../io/netty/channel/ChannelInitializer.d.ts'
import type { SocketChannel } from '../../../../io/netty/channel/socket/SocketChannel.d.ts'
import type { HttpServer } from '../../../../net/ccbluex/netty/http/HttpServer.d.ts'
export class HttpChannelInitializer extends ChannelInitializer<SocketChannel> {
    constructor(server: HttpServer)
    // private server: HttpServer;
    protected initChannel(socketChannel: SocketChannel): void;
}