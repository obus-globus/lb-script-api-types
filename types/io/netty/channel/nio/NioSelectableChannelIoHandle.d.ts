import type { IoEvent } from '../../../../io/netty/channel/IoEvent.d.ts'
import type { IoHandle } from '../../../../io/netty/channel/IoHandle.d.ts'
import type { IoRegistration } from '../../../../io/netty/channel/IoRegistration.d.ts'
import type { NioIoHandle } from '../../../../io/netty/channel/nio/NioIoHandle.d.ts'
import type { SelectableChannel } from '../../../../java/nio/channels/SelectableChannel.d.ts'
import type { SelectionKey } from '../../../../java/nio/channels/SelectionKey.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export abstract class NioSelectableChannelIoHandle<S extends SelectableChannel> extends Object implements IoHandle, NioIoHandle {
    constructor(arg0: S)
    // private channel: S;
    close(): void;
    deregister(arg0: S): void;
    handle(arg0: S, arg1: SelectionKey): void;
    handle(arg0: IoRegistration, arg1: IoEvent): void;
    registered(): void;
    selectableChannel(): SelectableChannel;
    unregistered(): void;
}