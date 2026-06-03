import type { File } from '../../../../../../java/io/File.d.ts'
import type { OutputStream } from '../../../../../../java/io/OutputStream.d.ts'
import type { CompressorOutputStream } from '../../../../../../org/apache/commons/compress/compressors/CompressorOutputStream.d.ts'
import type { BlockLZ4CompressorOutputStream$Pair } from '../../../../../../org/apache/commons/compress/compressors/lz4/BlockLZ4CompressorOutputStream$Pair.d.ts'
import type { LZ77Compressor } from '../../../../../../org/apache/commons/compress/compressors/lz77support/LZ77Compressor.d.ts'
import type { LZ77Compressor$BackReference } from '../../../../../../org/apache/commons/compress/compressors/lz77support/LZ77Compressor$BackReference.d.ts'
import type { LZ77Compressor$LiteralBlock } from '../../../../../../org/apache/commons/compress/compressors/lz77support/LZ77Compressor$LiteralBlock.d.ts'
import type { Parameters } from '../../../../../../org/apache/commons/compress/compressors/lz77support/Parameters.d.ts'
import type { Parameters$Builder } from '../../../../../../org/apache/commons/compress/compressors/lz77support/Parameters$Builder.d.ts'
export class BlockLZ4CompressorOutputStream extends CompressorOutputStream<OutputStream> {
    static createParameterBuilder(): Parameters$Builder;
    static nullOutputStream(): OutputStream;
    constructor(arg0: OutputStream)
    constructor(arg0: OutputStream, arg1: Parameters)
    // private compressor: LZ77Compressor;
    // private expandedBlocks: number[][];
    // private oneByte: number[];
    // private pairs: BlockLZ4CompressorOutputStream$Pair[];
    // private addBackReference(arg0: LZ77Compressor$BackReference): void;
    // private addLiteralBlock(arg0: LZ77Compressor$LiteralBlock): void;
    // private clearUnusedBlocks(): void;
    // private clearUnusedBlocksAndPairs(): void;
    // private clearUnusedPairs(): void;
    close(): void;
    // private expand(arg0: number, arg1: number): number[];
    // private expandFromList(arg0: number[], arg1: number, arg2: number): void;
    finish(): void;
    prefill(arg0: number[], arg1: number, arg2: number): void;
    // private recordBackReference(arg0: LZ77Compressor$BackReference): void;
    // private recordLiteral(arg0: number[]): void;
    // private rewriteLastPairs(): void;
    write(arg0: File): number;
    write(arg0: Path[]): number;
    write(arg0: number[]): void;
    write(arg0: number[], arg1: number, arg2: number): void;
    write(arg0: number): void;
    // private writeBlocksAndReturnUnfinishedPair(arg0: number): BlockLZ4CompressorOutputStream$Pair;
    // private writeFinalLiteralBlock(): void;
    // private writeWritablePairs(arg0: number): void;
}