import type { Object } from '../../java/lang/Object.d.ts'
import type { Buffer } from '../../kotlinx/io/Buffer.d.ts'
import type { RawSink } from '../../kotlinx/io/RawSink.d.ts'
import type { RawSource } from '../../kotlinx/io/RawSource.d.ts'
import type { Source } from '../../kotlinx/io/Source.d.ts'
export class RealSource extends Object implements Source {
    constructor(source: RawSource)
    readonly buffer: Buffer;
    // private bufferField: Buffer;
    closed: boolean;
    readonly source: RawSource;
    // private checkNotClosed(): void;
    close(): void;
    exhausted(): boolean;
    peek(): Source;
    readAtMostTo(sink: number[], startIndex: number, endIndex: number): number;
    readAtMostTo(sink: Buffer, byteCount: number): number;
    readByte(): number;
    readInt(): number;
    readLong(): number;
    readShort(): number;
    readTo(sink: RawSink, byteCount: number): void;
    request(byteCount: number): boolean;
    require(byteCount: number): void;
    skip(byteCount: number): void;
    toString(): string;
    transferTo(sink: RawSink): number;
}