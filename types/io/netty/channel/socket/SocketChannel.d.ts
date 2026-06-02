import type { DuplexChannel } from '../../../../io/netty/channel/socket/DuplexChannel.d.ts'
import type { ServerSocketChannel } from '../../../../io/netty/channel/socket/ServerSocketChannel.d.ts'
import type { SocketChannelConfig } from '../../../../io/netty/channel/socket/SocketChannelConfig.d.ts'
import type { InetSocketAddress } from '../../../../java/net/InetSocketAddress.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface SocketChannel extends DuplexChannel, Object{
    config(): SocketChannelConfig;
    localAddress(): InetSocketAddress;
    parent(): ServerSocketChannel;
    remoteAddress(): InetSocketAddress;
}