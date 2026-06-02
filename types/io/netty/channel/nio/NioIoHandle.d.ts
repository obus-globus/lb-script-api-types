import type { IoHandle } from '../../../../io/netty/channel/IoHandle.d.ts'
import type { SelectableChannel } from '../../../../java/nio/channels/SelectableChannel.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface NioIoHandle extends IoHandle, Object{
    registered(): void;
    selectableChannel(): SelectableChannel;
    unregistered(): void;
}