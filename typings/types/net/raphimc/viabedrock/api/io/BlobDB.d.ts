import type { Closeable } from '../../../../../java/io/Closeable.d.ts'
import type { File } from '../../../../../java/io/File.d.ts'
import type { RandomAccessFile } from '../../../../../java/io/RandomAccessFile.d.ts'
import type { Thread } from '../../../../../java/lang/Thread.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { BlobDB$IndexEntry } from '../../../../../net/raphimc/viabedrock/api/io/BlobDB$IndexEntry.d.ts'
export class BlobDB extends Object implements Closeable {
    constructor(arg0: File)
    // private dataFile: RandomAccessFile;
    // private dataOffset: number;
    // private index: { [key: number]: BlobDB$IndexEntry };
    // private indexDirty: boolean;
    // private indexFile: File;
    // private pendingWrites: { [key: number]: number[] };
    // private writeThread: Thread;
    close(): void;
    contains(arg0: number): boolean;
    get(arg0: number): number[];
    // private load(): void;
    putNow(arg0: number, arg1: number[]): void;
    queuePut(arg0: number, arg1: number[]): void;
    save(): void;
    waitForWrites(): void;
}