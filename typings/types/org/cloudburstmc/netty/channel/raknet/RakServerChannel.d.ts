import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { ChannelFuture } from '../../../../../io/netty/channel/ChannelFuture.d.ts'
import type { ChannelPromise } from '../../../../../io/netty/channel/ChannelPromise.d.ts'
import type { ServerChannel } from '../../../../../io/netty/channel/ServerChannel.d.ts'
import type { DatagramChannel } from '../../../../../io/netty/channel/socket/DatagramChannel.d.ts'
import type { InetAddress } from '../../../../../java/net/InetAddress.d.ts'
import type { InetSocketAddress } from '../../../../../java/net/InetSocketAddress.d.ts'
import type { SocketAddress } from '../../../../../java/net/SocketAddress.d.ts'
import type { TimeUnit } from '../../../../../java/util/concurrent/TimeUnit.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { ProxyChannel } from '../../../../../org/cloudburstmc/netty/channel/proxy/ProxyChannel.d.ts'
import type { RakChannel } from '../../../../../org/cloudburstmc/netty/channel/raknet/RakChannel.d.ts'
import type { RakChildChannel } from '../../../../../org/cloudburstmc/netty/channel/raknet/RakChildChannel.d.ts'
import type { RakServerChannelConfig } from '../../../../../org/cloudburstmc/netty/channel/raknet/config/RakServerChannelConfig.d.ts'
export class RakServerChannel extends ProxyChannel<DatagramChannel> implements ServerChannel {
    constructor(arg0: DatagramChannel)
    constructor(arg0: DatagramChannel, arg1: (param0: RakChannel) => void)
    // private childChannelMap: JavaMap<SocketAddress, RakChildChannel>;
    // private childConsumer: (param0: RakChannel) => void;
    // private config: RakServerChannelConfig;
    config(): RakServerChannelConfig;
    createChildChannel(arg0: InetSocketAddress, arg1: InetSocketAddress, arg2: number, arg3: number, arg4: number): RakChildChannel;
    getChildChannel(arg0: SocketAddress): RakChildChannel;
    // private onChildClosed(arg0: ChannelFuture): void;
    onCloseTriggered(arg0: ChannelPromise): void;
    tryBlockAddress(arg0: InetAddress, arg1: number, arg2: TimeUnit): boolean;
}