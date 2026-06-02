import type { Closeable } from '../java/io/Closeable.d.ts'
import type { ReentrantLock } from '../java/util/concurrent/locks/ReentrantLock.d.ts'
import type { Object } from '../java/lang/Object.d.ts'
import type { Buffer } from '../okio/Buffer.d.ts'
import type { Sink } from '../okio/Sink.d.ts'
import type { Source } from '../okio/Source.d.ts'
export abstract class FileHandle extends Object implements Closeable {
    constructor(readWrite: boolean)
    // private closed: boolean;
    readonly lock: ReentrantLock;
    // private openStreamCount: number;
    readonly readWrite: boolean;
    appendingSink(): Sink;
    close(): void;
    flush(): void;
    position(sink: Sink): number;
    position(source: Source): number;
    protected protectedClose(): void;
    protected protectedFlush(): void;
    protected protectedRead(fileOffset: number, array: number[], arrayOffset: number, byteCount: number): number;
    protected protectedResize(size: number): void;
    protected protectedSize(): number;
    protected protectedWrite(fileOffset: number, array: number[], arrayOffset: number, byteCount: number): void;
    read(fileOffset: number, array: number[], arrayOffset: number, byteCount: number): number;
    read(fileOffset: number, sink: Buffer, byteCount: number): number;
    // private readNoCloseCheck(fileOffset: number, sink: Buffer, byteCount: number): number;
    reposition(sink: Sink, position: number): void;
    reposition(source: Source, position: number): void;
    resize(size: number): void;
    sink(fileOffset: number): Sink;
    size(): number;
    source(fileOffset: number): Source;
    write(fileOffset: number, array: number[], arrayOffset: number, byteCount: number): void;
    write(fileOffset: number, source: Buffer, byteCount: number): void;
    // private writeNoCloseCheck(fileOffset: number, source: Buffer, byteCount: number): void;
}