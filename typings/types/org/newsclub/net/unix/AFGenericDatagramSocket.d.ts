import type { FileDescriptor } from '../../../../java/io/FileDescriptor.d.ts'
import type { DatagramSocketImplFactory } from '../../../../java/net/DatagramSocketImplFactory.d.ts'
import type { AFDatagramSocket } from '../../../../org/newsclub/net/unix/AFDatagramSocket.d.ts'
import type { AFGenericDatagramChannel } from '../../../../org/newsclub/net/unix/AFGenericDatagramChannel.d.ts'
import type { AFGenericSocketAddress } from '../../../../org/newsclub/net/unix/AFGenericSocketAddress.d.ts'
import type { AFGenericSocketExtensions } from '../../../../org/newsclub/net/unix/AFGenericSocketExtensions.d.ts'
import type { AFGenericSocketImplExtensions } from '../../../../org/newsclub/net/unix/AFGenericSocketImplExtensions.d.ts'
import type { AFSocketType } from '../../../../org/newsclub/net/unix/AFSocketType.d.ts'
export class AFGenericDatagramSocket extends AFDatagramSocket<AFGenericSocketAddress> implements AFGenericSocketExtensions {
    static newInstance(): AFGenericDatagramSocket;
    static newInstance(paramarg0: AFSocketType): AFGenericDatagramSocket;
    static setDatagramSocketImplFactory(paramarg0: DatagramSocketImplFactory): void;
    constructor(arg0: FileDescriptor)
    constructor(arg0: FileDescriptor, arg1: AFSocketType)
    getChannel(): AFGenericDatagramChannel;
    getImplExtensions(): AFGenericSocketImplExtensions;
    newChannel(): AFGenericDatagramChannel;
    newDatagramSocketInstance(): AFDatagramSocket<AFGenericSocketAddress>;
}