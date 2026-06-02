import type { LZ77Compressor$Block } from '../../../../../../org/apache/commons/compress/compressors/lz77support/LZ77Compressor$Block.d.ts'
import type { LZ77Compressor$Block$BlockType } from '../../../../../../org/apache/commons/compress/compressors/lz77support/LZ77Compressor$Block$BlockType.d.ts'
export abstract class LZ77Compressor$AbstractReference extends LZ77Compressor$Block {
    constructor(arg0: LZ77Compressor$Block$BlockType, arg1: number, arg2: number)
    readonly length: number;
    readonly offset: number;
    getLength(): number;
    getOffset(): number;
    toString(): string;
}