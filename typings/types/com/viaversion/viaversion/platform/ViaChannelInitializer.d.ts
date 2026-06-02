import type { UserConnection } from '../../../../com/viaversion/viaversion/api/connection/UserConnection.d.ts'
import type { WrappedChannelInitializer } from '../../../../com/viaversion/viaversion/platform/WrappedChannelInitializer.d.ts'
import type { Channel } from '../../../../io/netty/channel/Channel.d.ts'
import type { ChannelHandler } from '../../../../io/netty/channel/ChannelHandler.d.ts'
import type { ChannelInitializer } from '../../../../io/netty/channel/ChannelInitializer.d.ts'
import type { Map$Entry } from '../../../../java/util/Map$Entry.d.ts'
export abstract class ViaChannelInitializer extends ChannelInitializer<Channel> implements WrappedChannelInitializer {
    static createUserConnection(paramarg0: Channel, paramarg1: boolean): UserConnection;
    static reorderPipeline(paramarg0: Map$Entry<string, ChannelHandler>[], paramarg1: string, paramarg2: string): void;
    constructor(arg0: ChannelInitializer<Channel>, arg1: boolean)
    // private clientSide: boolean;
    // private original: ChannelInitializer<Channel>;
    clientSide(): boolean;
    initChannel(arg0: Channel): void;
    injectPipeline(arg0: Map$Entry<string, ChannelHandler>[], arg1: UserConnection): void;
    original(): ChannelInitializer<Channel>;
}