import type { IoEvent } from '../../../../io/netty/channel/IoEvent.d.ts'
import type { IoHandle } from '../../../../io/netty/channel/IoHandle.d.ts'
import type { IoRegistration } from '../../../../io/netty/channel/IoRegistration.d.ts'
import type { SelectableChannel } from '../../../../java/nio/channels/SelectableChannel.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface NioIoHandle extends IoHandle, Object{
    close(): void;
    handle(arg0: IoRegistration, arg1: IoEvent): void;
    registered(): void;
    selectableChannel(): SelectableChannel;
    unregistered(): void;
}