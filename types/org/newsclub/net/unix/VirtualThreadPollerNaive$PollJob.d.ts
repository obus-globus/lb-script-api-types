import type { FileDescriptor } from '../../../../java/io/FileDescriptor.d.ts'
import type { IOException } from '../../../../java/io/IOException.d.ts'
import type { Thread } from '../../../../java/lang/Thread.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { AFFuture } from '../../../../org/newsclub/net/unix/AFFuture.d.ts'
import type { AFSupplier } from '../../../../org/newsclub/net/unix/AFSupplier.d.ts'
export class VirtualThreadPollerNaive$PollJob extends Object {
    constructor(arg0: FileDescriptor, arg1: number, arg2: number, arg3: () => number)
    // private fd: FileDescriptor;
    // private mode: number;
    // private now: number;
    // private timeout: () => number;
    // private waitingThreads: Thread[];
    trigger(arg0: Thread): () => IOException;
}