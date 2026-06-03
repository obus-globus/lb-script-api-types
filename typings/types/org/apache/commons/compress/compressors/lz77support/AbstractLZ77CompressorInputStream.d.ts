import type { InputStream } from '../../../../../../java/io/InputStream.d.ts'
import type { CompressorInputStream } from '../../../../../../org/apache/commons/compress/compressors/CompressorInputStream.d.ts'
import type { ByteUtils$ByteSupplier } from '../../../../../../org/apache/commons/compress/utils/ByteUtils$ByteSupplier.d.ts'
import type { InputStreamStatistics } from '../../../../../../org/apache/commons/compress/utils/InputStreamStatistics.d.ts'
import type { BoundedInputStream } from '../../../../../../org/apache/commons/io/input/BoundedInputStream.d.ts'
export abstract class AbstractLZ77CompressorInputStream extends CompressorInputStream implements InputStreamStatistics {
    static nullInputStream(): InputStream;
    constructor(arg0: InputStream, arg1: number)
    // private backReferenceOffset: number;
    // private buf: number[];
    // private bytesRemaining: number;
    // private in: BoundedInputStream;
    // private oneByte: number[];
    // private readIndex: number;
    readonly size: number;
    // private supplier: ByteUtils$ByteSupplier;
    // private windowSize: number;
    // private writeIndex: number;
    available(): number;
    close(): void;
    getCompressedCount(): number;
    getSize(): number;
    hasMoreDataInBlock(): boolean;
    prefill(arg0: number[]): void;
    read(): number;
    read(arg0: number[]): number;
    read(arg0: number[], arg1: number, arg2: number): number;
    readBackReference(arg0: number[], arg1: number, arg2: number): number;
    // private readFromBuffer(arg0: number[], arg1: number, arg2: number): number;
    readLiteral(arg0: number[], arg1: number, arg2: number): number;
    readOneByte(): number;
    // private slideBuffer(): void;
    startBackReference(arg0: number, arg1: number): void;
    startLiteral(arg0: number): void;
    // private tryToCopy(arg0: number): void;
    // private tryToReadLiteral(arg0: number): void;
}