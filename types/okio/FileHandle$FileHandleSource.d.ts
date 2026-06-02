import type { Object } from '../java/lang/Object.d.ts'
import type { Buffer } from '../okio/Buffer.d.ts'
import type { FileHandle } from '../okio/FileHandle.d.ts'
import type { Source } from '../okio/Source.d.ts'
import type { Timeout } from '../okio/Timeout.d.ts'
export class FileHandle$FileHandleSource extends Object implements Source {
    constructor(fileHandle: FileHandle, position: number)
    closed: boolean;
    readonly fileHandle: FileHandle;
    position: number;
    close(): void;
    read(sink: Buffer, byteCount: number): number;
    timeout(): Timeout;
}