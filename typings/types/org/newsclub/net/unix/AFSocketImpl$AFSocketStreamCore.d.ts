import type { FileDescriptor } from '../../../../java/io/FileDescriptor.d.ts'
import type { AFAddressFamily } from '../../../../org/newsclub/net/unix/AFAddressFamily.d.ts'
import type { AFSocketCore } from '../../../../org/newsclub/net/unix/AFSocketCore.d.ts'
import type { AFSocketImpl } from '../../../../org/newsclub/net/unix/AFSocketImpl.d.ts'
import type { AFSocketType } from '../../../../org/newsclub/net/unix/AFSocketType.d.ts'
import type { AncillaryDataSupport } from '../../../../org/newsclub/net/unix/AncillaryDataSupport.d.ts'
export class AFSocketImpl$AFSocketStreamCore extends AFSocketCore {
    constructor(arg0: AFSocketImpl<any>, arg1: FileDescriptor, arg2: AncillaryDataSupport, arg3: AFAddressFamily<any>)
    createSocket(arg0: FileDescriptor, arg1: AFSocketType): void;
    unblockAccepts(): void;
    // private unblockAccepts0(): void;
}