import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { LZ77Compressor$Block } from '../../../../../../org/apache/commons/compress/compressors/lz77support/LZ77Compressor$Block.d.ts'
export interface LZ77Compressor$Callback extends Object{
    accept(arg0: LZ77Compressor$Block): void;
}