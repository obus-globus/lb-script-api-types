import type { FileDescriptor } from '../../../../java/io/FileDescriptor.d.ts'
import type { SocketAddress } from '../../../../java/net/SocketAddress.d.ts'
import type { InterruptibleChannel } from '../../../../java/nio/channels/InterruptibleChannel.d.ts'
import type { SelectableChannel } from '../../../../java/nio/channels/SelectableChannel.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { AFSomeSocketThing } from '../../../../org/newsclub/net/unix/AFSomeSocketThing.d.ts'
import type { FileDescriptorAccess } from '../../../../org/newsclub/net/unix/FileDescriptorAccess.d.ts'
export interface AFSomeSocketChannel extends InterruptibleChannel, Object, AFSomeSocketThing, FileDescriptorAccess{
    close(): void;
    configureBlocking(arg0: boolean): SelectableChannel;
    getFileDescriptor(): FileDescriptor;
    getLocalSocketAddress(): SocketAddress;
    isBlocking(): boolean;
    isOpen(): boolean;
    setShutdownOnClose(arg0: boolean): void;
}