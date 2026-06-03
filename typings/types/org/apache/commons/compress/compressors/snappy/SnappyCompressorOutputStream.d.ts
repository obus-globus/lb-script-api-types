import type { File } from '../../../../../../java/io/File.d.ts'
import type { OutputStream } from '../../../../../../java/io/OutputStream.d.ts'
import type { CompressorOutputStream } from '../../../../../../org/apache/commons/compress/compressors/CompressorOutputStream.d.ts'
import type { LZ77Compressor } from '../../../../../../org/apache/commons/compress/compressors/lz77support/LZ77Compressor.d.ts'
import type { LZ77Compressor$BackReference } from '../../../../../../org/apache/commons/compress/compressors/lz77support/LZ77Compressor$BackReference.d.ts'
import type { LZ77Compressor$LiteralBlock } from '../../../../../../org/apache/commons/compress/compressors/lz77support/LZ77Compressor$LiteralBlock.d.ts'
import type { Parameters } from '../../../../../../org/apache/commons/compress/compressors/lz77support/Parameters.d.ts'
import type { Parameters$Builder } from '../../../../../../org/apache/commons/compress/compressors/lz77support/Parameters$Builder.d.ts'
import type { ByteUtils$ByteConsumer } from '../../../../../../org/apache/commons/compress/utils/ByteUtils$ByteConsumer.d.ts'
export class SnappyCompressorOutputStream extends CompressorOutputStream<OutputStream> {
    static createParameterBuilder(paramarg0: number): Parameters$Builder;
    static nullOutputStream(): OutputStream;
    constructor(arg0: OutputStream, arg1: number)
    constructor(arg0: OutputStream, arg1: number, arg2: number)
    constructor(arg0: OutputStream, arg1: number, arg2: Parameters)
    // private compressor: LZ77Compressor;
    // private consumer: ByteUtils$ByteConsumer;
    // private oneByte: number[];
    close(): void;
    finish(): void;
    write(arg0: File): number;
    write(arg0: Path[]): number;
    write(arg0: number[]): void;
    write(arg0: number[], arg1: number, arg2: number): void;
    write(arg0: number): void;
    // private writeBackReference(arg0: LZ77Compressor$BackReference): void;
    // private writeBackReferenceWithFourOffsetBytes(arg0: number, arg1: number): void;
    // private writeBackReferenceWithLittleEndianOffset(arg0: number, arg1: number, arg2: number, arg3: number): void;
    // private writeBackReferenceWithOneOffsetByte(arg0: number, arg1: number): void;
    // private writeBackReferenceWithTwoOffsetBytes(arg0: number, arg1: number): void;
    // private writeLiteralBlock(arg0: LZ77Compressor$LiteralBlock): void;
    // private writeLiteralBlockFourSizeBytes(arg0: LZ77Compressor$LiteralBlock, arg1: number): void;
    // private writeLiteralBlockNoSizeBytes(arg0: LZ77Compressor$LiteralBlock, arg1: number): void;
    // private writeLiteralBlockOneSizeByte(arg0: LZ77Compressor$LiteralBlock, arg1: number): void;
    // private writeLiteralBlockThreeSizeBytes(arg0: LZ77Compressor$LiteralBlock, arg1: number): void;
    // private writeLiteralBlockTwoSizeBytes(arg0: LZ77Compressor$LiteralBlock, arg1: number): void;
    // private writeLiteralBlockWithSize(arg0: number, arg1: number, arg2: number, arg3: LZ77Compressor$LiteralBlock): void;
    // private writeLittleEndian(arg0: number, arg1: number): void;
    // private writeUncompressedSize(arg0: number): void;
}