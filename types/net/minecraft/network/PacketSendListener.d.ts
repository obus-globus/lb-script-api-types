import type { ChannelFutureListener } from '../../../io/netty/channel/ChannelFutureListener.d.ts'
import type { Runnable } from '../../../java/lang/Runnable.d.ts'
import type { Supplier } from '../../../java/util/function/Supplier.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class PacketSendListener extends Object {
    static exceptionallySend(paramhandler: () => Object | null): ChannelFutureListener;
    static thenRun(paramrunnable: () => void): ChannelFutureListener;
    constructor()
}