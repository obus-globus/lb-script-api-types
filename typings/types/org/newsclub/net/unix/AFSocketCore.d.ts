import type { FileDescriptor } from '../../../../java/io/FileDescriptor.d.ts'
import type { ByteBuffer } from '../../../../java/nio/ByteBuffer.d.ts'
import type { AtomicInteger } from '../../../../java/util/concurrent/atomic/AtomicInteger.d.ts'
import type { AtomicLong } from '../../../../java/util/concurrent/atomic/AtomicLong.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { AFAddressFamily } from '../../../../org/newsclub/net/unix/AFAddressFamily.d.ts'
import type { AFCore } from '../../../../org/newsclub/net/unix/AFCore.d.ts'
import type { AFSocketAddress } from '../../../../org/newsclub/net/unix/AFSocketAddress.d.ts'
import type { AFSocketOption } from '../../../../org/newsclub/net/unix/AFSocketOption.d.ts'
import type { AFSupplier } from '../../../../org/newsclub/net/unix/AFSupplier.d.ts'
import type { AncillaryDataSupport } from '../../../../org/newsclub/net/unix/AncillaryDataSupport.d.ts'
export class AFSocketCore extends AFCore {
    constructor(arg0: Object, arg1: FileDescriptor, arg2: AncillaryDataSupport, arg3: AFAddressFamily<any>, arg4: boolean)
    // private af: AFAddressFamily<any>;
    // private inode: AtomicLong;
    // private pendingAccepts: AtomicInteger;
    // private shutdownOnClose: boolean;
    // private socketAddress: AFSocketAddress;
    addressFamily(): AFAddressFamily<any>;
    decPendingAccepts(): void;
    doClose(): void;
    getOption<T extends Object | number | string | boolean>(arg0: AFSocketOption<T>): T;
    hasPendingAccepts(): boolean;
    incPendingAccepts(): void;
    isConnected(arg0: boolean): boolean;
    isShutdownOnClose(): boolean;
    receive(arg0: ByteBuffer, arg1: () => number): AFSocketAddress;
    setOption<T extends Object | number | string | boolean>(arg0: AFSocketOption<T>, arg1: T): void;
    setShutdownOnClose(arg0: boolean): void;
    unblockAccepts(): void;
}