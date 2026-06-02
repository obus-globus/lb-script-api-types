import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { LZ77Compressor$Block$BlockType } from '../../../../../../org/apache/commons/compress/compressors/lz77support/LZ77Compressor$Block$BlockType.d.ts'
export abstract class LZ77Compressor$Block extends Object {
    constructor()
    constructor(arg0: LZ77Compressor$Block$BlockType)
    readonly type: LZ77Compressor$Block$BlockType;
    getType(): LZ77Compressor$Block$BlockType;
    toString(): string;
}