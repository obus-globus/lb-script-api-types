import type { Channel } from '../../../io/netty/channel/Channel.d.ts'
import type { ServerChannel } from '../../../io/netty/channel/ServerChannel.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export abstract class ChannelInitializerExtension extends Object {
    static EXTENSIONS_SYSTEM_PROPERTY: string;
    constructor()
    postInitializeClientChannel(arg0: Channel): void;
    postInitializeServerChildChannel(arg0: Channel): void;
    postInitializeServerListenerChannel(arg0: ServerChannel): void;
    priority(): number;
}