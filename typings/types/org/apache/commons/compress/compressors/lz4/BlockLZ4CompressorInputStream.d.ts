import type { InputStream } from '../../../../../../java/io/InputStream.d.ts'
import type { BlockLZ4CompressorInputStream$State } from '../../../../../../org/apache/commons/compress/compressors/lz4/BlockLZ4CompressorInputStream$State.d.ts'
import type { AbstractLZ77CompressorInputStream } from '../../../../../../org/apache/commons/compress/compressors/lz77support/AbstractLZ77CompressorInputStream.d.ts'
export class BlockLZ4CompressorInputStream extends AbstractLZ77CompressorInputStream {
    static nullInputStream(): InputStream;
    constructor(arg0: InputStream)
    // private nextBackReferenceSize: number;
    // private state: BlockLZ4CompressorInputStream$State;
    // private initializeBackReference(): boolean;
    read(): number;
    read(arg0: number[]): number;
    read(arg0: number[], arg1: number, arg2: number): number;
    // private readSizeBytes(): number;
    // private readSizes(): void;
}