import type { AbstractChannel$AbstractUnsafe } from '../../../../io/netty/channel/AbstractChannel$AbstractUnsafe.d.ts'
import type { AbstractServerChannel } from '../../../../io/netty/channel/AbstractServerChannel.d.ts'
import type { ChannelConfig } from '../../../../io/netty/channel/ChannelConfig.d.ts'
import type { ChannelPromise } from '../../../../io/netty/channel/ChannelPromise.d.ts'
import type { IoRegistration } from '../../../../io/netty/channel/IoRegistration.d.ts'
import type { LocalAddress } from '../../../../io/netty/channel/local/LocalAddress.d.ts'
import type { LocalChannel } from '../../../../io/netty/channel/local/LocalChannel.d.ts'
import type { SocketAddress } from '../../../../java/net/SocketAddress.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class LocalServerChannel extends AbstractServerChannel {
    constructor()
    // private acceptInProgress: boolean;
    // private config: ChannelConfig;
    // private inboundBuffer: Object[];
    // private localAddress: LocalAddress;
    // private registration: IoRegistration;
    // private state: number;
    config(): ChannelConfig;
    doBeginRead(): void;
    doBind(arg0: SocketAddress): void;
    doClose(): void;
    doDeregister(): void;
    doRegister(): void;
    doRegister(arg0: ChannelPromise): void;
    isActive(): boolean;
    isCompatible(arg0: (Object | null)[]): boolean;
    isOpen(): boolean;
    localAddress(): LocalAddress;
    localAddress0(): SocketAddress;
    newLocalChannel(arg0: LocalChannel): LocalChannel;
    newUnsafe(): AbstractChannel$AbstractUnsafe;
    // private readInbound(): void;
    remoteAddress(): LocalAddress;
    serve(arg0: LocalChannel): LocalChannel;
    // private serve0(arg0: LocalChannel): void;
}