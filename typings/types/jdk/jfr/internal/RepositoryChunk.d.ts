import type { RandomAccessFile } from '../../../java/io/RandomAccessFile.d.ts'
import type { ReadableByteChannel } from '../../../java/nio/channels/ReadableByteChannel.d.ts'
import type { Path } from '../../../java/nio/file/Path.d.ts'
import type { Instant } from '../../../java/time/Instant.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class RepositoryChunk extends Object {
    constructor(arg0: Path[])
    // private chunkFile: Path[];
    readonly endTime: Instant;
    // private refCount: number;
    readonly size: number;
    readonly startTime: Instant;
    // private unFinishedRAF: RandomAccessFile;
    // private delete(arg0: Path[]): void;
    // private destroy(): void;
    finish(arg0: Instant): boolean;
    getCurrentFileSize(): number;
    getEndTime(): Instant;
    getFile(): Path[];
    getSize(): number;
    getStartTime(): Instant;
    inInterval(arg0: Instant, arg1: Instant): boolean;
    isFinished(): boolean;
    isMissingFile(): boolean;
    newChannel(): ReadableByteChannel;
    release(): void;
    setStartTime(arg0: Instant): void;
    toString(): string;
    use(): void;
}