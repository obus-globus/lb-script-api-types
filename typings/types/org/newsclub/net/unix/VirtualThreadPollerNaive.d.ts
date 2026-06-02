import type { Closeable } from '../../../../java/io/Closeable.d.ts'
import type { FileDescriptor } from '../../../../java/io/FileDescriptor.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { AFSupplier } from '../../../../org/newsclub/net/unix/AFSupplier.d.ts'
import type { VirtualThreadPoller } from '../../../../org/newsclub/net/unix/VirtualThreadPoller.d.ts'
export class VirtualThreadPollerNaive extends Object implements VirtualThreadPoller {
    static INSTANCE: VirtualThreadPoller;
    constructor()
    parkThreadUntilReady(arg0: FileDescriptor, arg1: number, arg2: number, arg3: () => number, arg4: Closeable): void;
}