import type { IEventLoopGroupHolder } from '../../../../com/viaversion/viafabricplus/injection/access/core/bedrock/IEventLoopGroupHolder.d.ts'
import type { Channel } from '../../../../io/netty/channel/Channel.d.ts'
import type { IoHandlerFactory } from '../../../../io/netty/channel/IoHandlerFactory.d.ts'
import type { ServerChannel } from '../../../../io/netty/channel/ServerChannel.d.ts'
import type { Class } from '../../../../java/lang/Class.d.ts'
import type { ThreadFactory } from '../../../../java/util/concurrent/ThreadFactory.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export abstract class EventLoopGroupHolder extends Object implements IEventLoopGroupHolder {
    static local(): EventLoopGroupHolder;
    static remote(paramallowNativeTransport: boolean): EventLoopGroupHolder;
    private constructor(type: string, channelCls: Class<Channel>, serverChannelCls: Class<ServerChannel>)
    // private channelCls: Class<Channel>;
    // private group: (Object | null)[];
    // private serverChannelCls: Class<ServerChannel>;
    // private type: string;
    // private viaFabricPlus$connecting: boolean;
    channelCls(): Class<Channel>;
    // private createEventLoopGroup(): (Object | null)[];
    // private createThreadFactory(): ThreadFactory;
    eventLoopGroup(): (Object | null)[];
    ioHandlerFactory(): IoHandlerFactory;
    serverChannelCls(): Class<ServerChannel>;
    viaFabricPlus$isConnecting(): boolean;
    viaFabricPlus$setConnecting(arg0: boolean): void;
}