import type { FileDescriptor } from '../../../../java/io/FileDescriptor.d.ts'
import type { SocketAddress } from '../../../../java/net/SocketAddress.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { AFSomeSocketThing } from '../../../../org/newsclub/net/unix/AFSomeSocketThing.d.ts'
export interface AFSomeSocket extends Object, AFSomeSocketThing{
    close(): void;
    getFileDescriptor(): FileDescriptor;
    getLocalSocketAddress(): SocketAddress;
    getRemoteSocketAddress(): SocketAddress;
    setShutdownOnClose(arg0: boolean): void;
}