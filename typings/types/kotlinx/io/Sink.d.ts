import type { Object } from '../../java/lang/Object.d.ts'
import type { Buffer } from '../../kotlinx/io/Buffer.d.ts'
import type { RawSink } from '../../kotlinx/io/RawSink.d.ts'
import type { RawSource } from '../../kotlinx/io/RawSource.d.ts'
export interface Sink extends Object, RawSink{
    readonly buffer: Buffer;
    emit(): void;
    flush(): void;
    hintEmit(): void;
    transferFrom(source: RawSource): number;
    write(source: number[], startIndex: number, endIndex: number): void;
    write(source: RawSource, byteCount: number): void;
    writeByte(byte: number): void;
    writeInt(int: number): void;
    writeLong(long: number): void;
    writeShort(short: number): void;
}