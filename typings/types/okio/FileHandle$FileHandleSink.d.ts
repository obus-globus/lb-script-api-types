import type { Object } from '../java/lang/Object.d.ts'
import type { Buffer } from '../okio/Buffer.d.ts'
import type { FileHandle } from '../okio/FileHandle.d.ts'
import type { Sink } from '../okio/Sink.d.ts'
import type { Timeout } from '../okio/Timeout.d.ts'
export class FileHandle$FileHandleSink extends Object implements Sink {
    constructor(fileHandle: FileHandle, position: number)
    closed: boolean;
    readonly fileHandle: FileHandle;
    position: number;
    close(): void;
    flush(): void;
    timeout(): Timeout;
    write(source: Buffer, byteCount: number): void;
}