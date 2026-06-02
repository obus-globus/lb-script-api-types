import type { AutoCloseable } from '../../../java/lang/AutoCloseable.d.ts'
import type { AsynchronousFileChannel } from '../../../java/nio/channels/AsynchronousFileChannel.d.ts'
import type { Channel } from '../../../java/nio/channels/Channel.d.ts'
import type { FileChannel } from '../../../java/nio/channels/FileChannel.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export abstract class FileLock extends Object implements AutoCloseable {
    constructor(arg0: AsynchronousFileChannel, arg1: number, arg2: number, arg3: boolean)
    constructor(arg0: FileChannel, arg1: number, arg2: number, arg3: boolean)
    // private channel: Channel;
    // private position: number;
    readonly shared: boolean;
    // private size: number;
    acquiredBy(): Channel;
    channel(): FileChannel;
    close(): void;
    isShared(): boolean;
    isValid(): boolean;
    overlaps(arg0: number, arg1: number): boolean;
    position(): number;
    release(): void;
    size(): number;
    toString(): string;
}