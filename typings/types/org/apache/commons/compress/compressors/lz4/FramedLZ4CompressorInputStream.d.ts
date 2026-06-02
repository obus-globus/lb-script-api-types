import type { InputStream } from '../../../../../../java/io/InputStream.d.ts'
import type { XXHash32 } from '../../../../../../org/apache/commons/codec/digest/XXHash32.d.ts'
import type { CompressorInputStream } from '../../../../../../org/apache/commons/compress/compressors/CompressorInputStream.d.ts'
import type { ByteUtils$ByteSupplier } from '../../../../../../org/apache/commons/compress/utils/ByteUtils$ByteSupplier.d.ts'
import type { InputStreamStatistics } from '../../../../../../org/apache/commons/compress/utils/InputStreamStatistics.d.ts'
import type { BoundedInputStream } from '../../../../../../org/apache/commons/io/input/BoundedInputStream.d.ts'
export class FramedLZ4CompressorInputStream extends CompressorInputStream implements InputStreamStatistics {
    static matches(paramarg0: number[], paramarg1: number): boolean;
    static nullInputStream(): InputStream;
    constructor(arg0: InputStream)
    constructor(arg0: InputStream, arg1: boolean)
    // private blockDependencyBuffer: number[];
    // private blockHash: XXHash32;
    // private contentHash: XXHash32;
    // private currentBlock: InputStream;
    // private decompressConcatenated: boolean;
    // private endReached: boolean;
    // private expectBlockChecksum: boolean;
    // private expectBlockDependency: boolean;
    // private expectContentChecksum: boolean;
    // private inUncompressed: boolean;
    // private inputStream: BoundedInputStream;
    // private oneByte: number[];
    // private supplier: ByteUtils$ByteSupplier;
    // private appendToBlockDependencyBuffer(arg0: number[], arg1: number, arg2: number): void;
    close(): void;
    getCompressedCount(): number;
    // private init(arg0: boolean): void;
    // private maybeFinishCurrentBlock(): void;
    // private nextBlock(): void;
    read(): number;
    read(arg0: number[], arg1: number, arg2: number): number;
    // private readFrameDescriptor(): void;
    // private readOnce(arg0: number[], arg1: number, arg2: number): number;
    // private readOneByte(): number;
    // private readSignature(arg0: boolean): boolean;
    // private skipSkippableFrame(arg0: number[]): number;
    // private verifyChecksum(arg0: XXHash32, arg1: string): void;
    // private verifyContentChecksum(): void;
}