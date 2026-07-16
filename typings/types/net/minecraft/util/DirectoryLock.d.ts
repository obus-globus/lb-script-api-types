import type { AutoCloseable } from '../../../java/lang/AutoCloseable.d.ts'
import type { FileChannel } from '../../../java/nio/channels/FileChannel.d.ts'
import type { FileLock } from '../../../java/nio/channels/FileLock.d.ts'
import type { Path } from '../../../java/nio/file/Path.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class DirectoryLock extends Object implements AutoCloseable {
    static LOCK_FILE: string;
    static create(paramdir: Path): DirectoryLock;
    static isLocked(paramdir: Path): boolean;
    private constructor(lockFile: FileChannel, lock: FileLock)
    // private lock: FileLock;
    // private lockFile: FileChannel;
    close(): void;
    isValid(): boolean;
}