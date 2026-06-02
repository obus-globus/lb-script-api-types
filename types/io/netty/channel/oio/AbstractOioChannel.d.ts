import type { AbstractChannel } from '../../../../io/netty/channel/AbstractChannel.d.ts'
import type { AbstractChannel$AbstractUnsafe } from '../../../../io/netty/channel/AbstractChannel$AbstractUnsafe.d.ts'
import type { Channel } from '../../../../io/netty/channel/Channel.d.ts'
import type { Runnable } from '../../../../java/lang/Runnable.d.ts'
import type { SocketAddress } from '../../../../java/net/SocketAddress.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export abstract class AbstractOioChannel extends AbstractChannel {
    constructor(arg0: Channel)
    // private clearReadPendingRunnable: () => void;
    // private readPending: boolean;
    // private readTask: () => void;
    // private readWhenInactive: boolean;
    clearReadPending(): void;
    doBeginRead(): void;
    doConnect(arg0: SocketAddress, arg1: SocketAddress): void;
    doRead(): void;
    isCompatible(arg0: (Object | null)[]): boolean;
    isReadPending(): boolean;
    newUnsafe(): AbstractChannel$AbstractUnsafe;
    setReadPending(arg0: boolean): void;
}