import type { SelectableChannel } from '../../../../java/nio/channels/SelectableChannel.d.ts'
import type { SelectionKey } from '../../../../java/nio/channels/SelectionKey.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../../java/lang/Throwable.d.ts'
export interface NioTask<C extends SelectableChannel> extends Object{
    channelReady(arg0: C, arg1: SelectionKey): void;
    channelUnregistered(arg0: C, arg1: Throwable): void;
}