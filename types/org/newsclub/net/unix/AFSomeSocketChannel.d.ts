import type { InterruptibleChannel } from '../../../../java/nio/channels/InterruptibleChannel.d.ts'
import type { SelectableChannel } from '../../../../java/nio/channels/SelectableChannel.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { AFSomeSocketThing } from '../../../../org/newsclub/net/unix/AFSomeSocketThing.d.ts'
import type { FileDescriptorAccess } from '../../../../org/newsclub/net/unix/FileDescriptorAccess.d.ts'
export interface AFSomeSocketChannel extends InterruptibleChannel, Object, AFSomeSocketThing, FileDescriptorAccess{
    configureBlocking(arg0: boolean): SelectableChannel;
    isBlocking(): boolean;
}