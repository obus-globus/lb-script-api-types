import type { InputStream } from '../../../../../../java/io/InputStream.d.ts'
import type { AbstractLZ77CompressorInputStream } from '../../../../../../org/apache/commons/compress/compressors/lz77support/AbstractLZ77CompressorInputStream.d.ts'
import type { SnappyCompressorInputStream$State } from '../../../../../../org/apache/commons/compress/compressors/snappy/SnappyCompressorInputStream$State.d.ts'
export class SnappyCompressorInputStream extends AbstractLZ77CompressorInputStream {
    static DEFAULT_BLOCK_SIZE: number;
    static nullInputStream(): InputStream;
    constructor(arg0: InputStream)
    constructor(arg0: InputStream, arg1: number)
    // private endReached: boolean;
    readonly size: number;
    // private state: SnappyCompressorInputStream$State;
    // private uncompressedBytesRemaining: number;
    // private fill(): void;
    getSize(): number;
    read(): number;
    read(arg0: number[]): number;
    read(arg0: number[], arg1: number, arg2: number): number;
    // private readLiteralLength(arg0: number): number;
    // private readSize(): number;
}