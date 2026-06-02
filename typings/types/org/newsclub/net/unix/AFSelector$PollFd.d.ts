import type { FileDescriptor } from '../../../../java/io/FileDescriptor.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { AFSelectionKey } from '../../../../org/newsclub/net/unix/AFSelectionKey.d.ts'
export class AFSelector$PollFd extends Object {
    constructor(arg0: FileDescriptor)
    constructor(arg0: FileDescriptor, arg1: number)
    constructor(arg0: FileDescriptor[], arg1: number[])
    constructor(arg0: AFSelectionKey[], arg1: FileDescriptor[], arg2: number[])
    // private fds: FileDescriptor[];
    // private keys: AFSelectionKey[];
    // private ops: number[];
    // private rops: number[];
}