import type { Closeable } from '../../../../java/io/Closeable.d.ts'
import type { FileDescriptor } from '../../../../java/io/FileDescriptor.d.ts'
import type { SocketAddress } from '../../../../java/net/SocketAddress.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { FileDescriptorAccess } from '../../../../org/newsclub/net/unix/FileDescriptorAccess.d.ts'
export interface AFSomeSocketThing extends Closeable, Object, FileDescriptorAccess{
    close(): void;
    getFileDescriptor(): FileDescriptor;
    getLocalSocketAddress(): SocketAddress;
    setShutdownOnClose(arg0: boolean): void;
}