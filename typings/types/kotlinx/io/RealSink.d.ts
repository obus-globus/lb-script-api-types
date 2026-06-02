import type { Object } from '../../java/lang/Object.d.ts'
import type { Buffer } from '../../kotlinx/io/Buffer.d.ts'
import type { RawSink } from '../../kotlinx/io/RawSink.d.ts'
import type { RawSource } from '../../kotlinx/io/RawSource.d.ts'
import type { Sink } from '../../kotlinx/io/Sink.d.ts'
export class RealSink extends Object implements Sink {
    constructor(sink: RawSink)
    readonly buffer: Buffer;
    // private bufferField: Buffer;
    closed: boolean;
    readonly sink: RawSink;
    // private checkNotClosed(): void;
    close(): void;
    emit(): void;
    flush(): void;
    hintEmit(): void;
    toString(): string;
    transferFrom(source: RawSource): number;
    write(source: number[], startIndex: number, endIndex: number): void;
    write(source: Buffer, byteCount: number): void;
    write(source: RawSource, byteCount: number): void;
    writeByte(byte: number): void;
    writeInt(int: number): void;
    writeLong(long: number): void;
    writeShort(short: number): void;
}