import type { ChannelHandler } from '../../../../../io/netty/channel/ChannelHandler.d.ts'
import type { ChannelMetadata } from '../../../../../io/netty/channel/ChannelMetadata.d.ts'
import type { ChannelPromise } from '../../../../../io/netty/channel/ChannelPromise.d.ts'
import type { DatagramChannel } from '../../../../../io/netty/channel/socket/DatagramChannel.d.ts'
import type { Map$Entry } from '../../../../../java/util/Map$Entry.d.ts'
import type { ProxyChannel } from '../../../../../org/cloudburstmc/netty/channel/proxy/ProxyChannel.d.ts'
import type { RakChannel } from '../../../../../org/cloudburstmc/netty/channel/raknet/RakChannel.d.ts'
import type { RakChannelConfig } from '../../../../../org/cloudburstmc/netty/channel/raknet/config/RakChannelConfig.d.ts'
export class RakClientChannel extends ProxyChannel<DatagramChannel> implements RakChannel {
    constructor(arg0: DatagramChannel)
    // private config: RakChannelConfig;
    readonly connectPromise: ChannelPromise;
    config(): RakChannelConfig;
    getConnectPromise(): ChannelPromise;
    isActive(): boolean;
    metadata(): ChannelMetadata;
    // private onConnectionEstablished(): void;
    rakPipeline(): Map$Entry<string, ChannelHandler>[];
}