import type { FileBackedOutputStream$MemoryOutput } from '../../../../com/google/common/io/FileBackedOutputStream$MemoryOutput.d.ts'
import type { File } from '../../../../java/io/File.d.ts'
import type { InputStream } from '../../../../java/io/InputStream.d.ts'
import type { OutputStream } from '../../../../java/io/OutputStream.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class FileBackedOutputStream$State extends Object {
    constructor(fileThreshold: number, resetWhenGarbageCollected: boolean)
    // private file: File;
    // private fileThreshold: number;
    // private memory: FileBackedOutputStream$MemoryOutput;
    // private out: OutputStream;
    // private resetWhenGarbageCollected: boolean;
    close(): void;
    flush(): void;
    getFile(): File;
    openInputStream(): InputStream;
    reset(): void;
    update(len: number): void;
    write(b: number[], off: number, len: number): void;
    write(b: number): void;
}