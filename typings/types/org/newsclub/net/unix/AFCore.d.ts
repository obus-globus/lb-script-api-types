import type { FileDescriptor } from '../../../../java/io/FileDescriptor.d.ts'
import type { SocketAddress } from '../../../../java/net/SocketAddress.d.ts'
import type { ByteBuffer } from '../../../../java/nio/ByteBuffer.d.ts'
import type { AtomicBoolean } from '../../../../java/util/concurrent/atomic/AtomicBoolean.d.ts'
import type { AtomicInteger } from '../../../../java/util/concurrent/atomic/AtomicInteger.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { AFSupplier } from '../../../../org/newsclub/net/unix/AFSupplier.d.ts'
import type { AncillaryDataSupport } from '../../../../org/newsclub/net/unix/AncillaryDataSupport.d.ts'
import type { CleanableState } from '../../../../org/newsclub/net/unix/CleanableState.d.ts'
import type { MutableHolder } from '../../../../org/newsclub/net/unix/pool/MutableHolder.d.ts'
import type { ObjectPool$Lease } from '../../../../org/newsclub/net/unix/pool/ObjectPool$Lease.d.ts'
export class AFCore extends CleanableState {
    constructor(arg0: Object, arg1: FileDescriptor)
    constructor(arg0: Object, arg1: FileDescriptor, arg2: AncillaryDataSupport, arg3: boolean)
    // private ancillaryDataSupport: AncillaryDataSupport;
    // private blocking: boolean;
    // private cleanFd: boolean;
    // private closed: AtomicBoolean;
    // private datagramMode: boolean;
    // private fd: FileDescriptor;
    // private virtualBlockingLeases: AtomicInteger;
    configureVirtualBlocking(arg0: boolean): void;
    disableCleanFd(): void;
    doClean(): void;
    doClose(): void;
    getPrivateDirectByteBuffer(arg0: number): ObjectPool$Lease<MutableHolder<ByteBuffer>>;
    implConfigureBlocking(arg0: boolean): void;
    isBlocking(): boolean;
    isClosed(): boolean;
    isVirtualBlocking(): boolean;
    read(arg0: ByteBuffer, arg1: () => number): number;
    read(arg0: ByteBuffer, arg1: () => number, arg2: ByteBuffer, arg3: number): number;
    validFd(): FileDescriptor;
    validFdOrException(): FileDescriptor;
    write(arg0: ByteBuffer, arg1: () => number): number;
    write(arg0: ByteBuffer, arg1: () => number, arg2: SocketAddress, arg3: number): number;
}