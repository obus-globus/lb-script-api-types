import type { FileRegion } from '../../../io/netty/channel/FileRegion.d.ts'
import type { AbstractReferenceCounted } from '../../../io/netty/util/AbstractReferenceCounted.d.ts'
import type { File } from '../../../java/io/File.d.ts'
import type { FileChannel } from '../../../java/nio/channels/FileChannel.d.ts'
import type { WritableByteChannel } from '../../../java/nio/channels/WritableByteChannel.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class DefaultFileRegion extends AbstractReferenceCounted implements FileRegion {
    constructor(arg0: File, arg1: number, arg2: number)
    constructor(arg0: FileChannel, arg1: number, arg2: number)
    // private count: number;
    // private f: File;
    // private file: FileChannel;
    // private position: number;
    // private transferred: number;
    count(): number;
    deallocate(): void;
    isOpen(): boolean;
    open(): void;
    position(): number;
    retain(): FileRegion;
    retain(arg0: number): FileRegion;
    touch(): FileRegion;
    touch(arg0: Object): FileRegion;
    transferTo(arg0: WritableByteChannel, arg1: number): number;
    transfered(): number;
    transferred(): number;
}