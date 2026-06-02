import type { ServerChannel } from '../../../../io/netty/channel/ServerChannel.d.ts'
import type { ServerSocketChannelConfig } from '../../../../io/netty/channel/socket/ServerSocketChannelConfig.d.ts'
import type { InetSocketAddress } from '../../../../java/net/InetSocketAddress.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface ServerSocketChannel extends ServerChannel, Object{
    config(): ServerSocketChannelConfig;
    localAddress(): InetSocketAddress;
    remoteAddress(): InetSocketAddress;
}