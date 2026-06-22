import type { Object } from '../../java/lang/Object.d.ts'
import type { Buffer } from '../../kotlinx/io/Buffer.d.ts'
import type { RawSink } from '../../kotlinx/io/RawSink.d.ts'
import type { RawSource } from '../../kotlinx/io/RawSource.d.ts'
export interface Source extends Object, RawSource{
    readonly buffer: Buffer;
    close(): void;
    exhausted(): boolean;
    peek(): Source;
    readAtMostTo(sink: Buffer, byteCount: number): number;
    readAtMostTo(sink: number[], startIndex: number, endIndex: number): number;
    readByte(): number;
    readInt(): number;
    readLong(): number;
    readShort(): number;
    readTo(sink: RawSink, byteCount: number): void;
    request(byteCount: number): boolean;
    require(byteCount: number): void;
    skip(byteCount: number): void;
    transferTo(sink: RawSink): number;
}