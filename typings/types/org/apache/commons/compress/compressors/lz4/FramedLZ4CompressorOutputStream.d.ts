import type { File } from '../../../../../../java/io/File.d.ts'
import type { OutputStream } from '../../../../../../java/io/OutputStream.d.ts'
import type { Path } from '../../../../../../java/nio/file/Path.d.ts'
import type { XXHash32 } from '../../../../../../org/apache/commons/codec/digest/XXHash32.d.ts'
import type { CompressorOutputStream } from '../../../../../../org/apache/commons/compress/compressors/CompressorOutputStream.d.ts'
import type { FramedLZ4CompressorOutputStream$Parameters } from '../../../../../../org/apache/commons/compress/compressors/lz4/FramedLZ4CompressorOutputStream$Parameters.d.ts'
export class FramedLZ4CompressorOutputStream extends CompressorOutputStream<OutputStream> {
    static nullOutputStream(): OutputStream;
    constructor(arg0: OutputStream)
    constructor(arg0: OutputStream, arg1: FramedLZ4CompressorOutputStream$Parameters)
    // private blockData: number[];
    // private blockDependencyBuffer: number[];
    // private blockHash: XXHash32;
    // private collectedBlockDependencyBytes: number;
    // private contentHash: XXHash32;
    // private currentIndex: number;
    // private oneByte: number[];
    // private params: FramedLZ4CompressorOutputStream$Parameters;
    // private appendToBlockDependencyBuffer(arg0: number[], arg1: number, arg2: number): void;
    close(): void;
    finish(): void;
    // private flushBlock(): void;
    write(arg0: File): number;
    write(arg0: Path): number;
    write(arg0: number[]): void;
    write(arg0: number[], arg1: number, arg2: number): void;
    write(arg0: number): void;
    // private writeFrameDescriptor(): void;
    // private writeTrailer(): void;
}