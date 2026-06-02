import type { OutputStream } from '../../../../../../java/io/OutputStream.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { LZ77Compressor$BackReference } from '../../../../../../org/apache/commons/compress/compressors/lz77support/LZ77Compressor$BackReference.d.ts'
import type { LZ77Compressor$LiteralBlock } from '../../../../../../org/apache/commons/compress/compressors/lz77support/LZ77Compressor$LiteralBlock.d.ts'
export class BlockLZ4CompressorOutputStream$Pair extends Object {
    constructor()
    // private brLength: number;
    // private brOffset: number;
    // private literalLength: number;
    // private literals: number[][];
    // private written: boolean;
    addLiteral(arg0: LZ77Compressor$LiteralBlock): number[];
    // private backReferenceLength(): number;
    canBeWritten(arg0: number): boolean;
    hasBackReference(): boolean;
    // private hasBeenWritten(): boolean;
    length(): number;
    // private literalLength(): number;
    // private prependLiteral(arg0: number[]): void;
    // private prependTo(arg0: BlockLZ4CompressorOutputStream$Pair): void;
    setBackReference(arg0: LZ77Compressor$BackReference): void;
    // private splitWithNewBackReferenceLengthOf(arg0: number): BlockLZ4CompressorOutputStream$Pair;
    writeTo(arg0: OutputStream): void;
}