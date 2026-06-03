import type { InputStream } from '../../../../../../java/io/InputStream.d.ts'
import type { PushbackInputStream } from '../../../../../../java/io/PushbackInputStream.d.ts'
import type { PureJavaCrc32C } from '../../../../../../org/apache/commons/codec/digest/PureJavaCrc32C.d.ts'
import type { CompressorInputStream } from '../../../../../../org/apache/commons/compress/compressors/CompressorInputStream.d.ts'
import type { FramedSnappyDialect } from '../../../../../../org/apache/commons/compress/compressors/snappy/FramedSnappyDialect.d.ts'
import type { SnappyCompressorInputStream } from '../../../../../../org/apache/commons/compress/compressors/snappy/SnappyCompressorInputStream.d.ts'
import type { ByteUtils$ByteSupplier } from '../../../../../../org/apache/commons/compress/utils/ByteUtils$ByteSupplier.d.ts'
import type { InputStreamStatistics } from '../../../../../../org/apache/commons/compress/utils/InputStreamStatistics.d.ts'
import type { BoundedInputStream } from '../../../../../../org/apache/commons/io/input/BoundedInputStream.d.ts'
export class FramedSnappyCompressorInputStream extends CompressorInputStream implements InputStreamStatistics {
    static matches(paramarg0: number[], paramarg1: number): boolean;
    static nullInputStream(): InputStream;
    constructor(arg0: InputStream)
    constructor(arg0: InputStream, arg1: number, arg2: FramedSnappyDialect)
    constructor(arg0: InputStream, arg1: FramedSnappyDialect)
    // private blockSize: number;
    // private checksum: PureJavaCrc32C;
    // private countingStream: BoundedInputStream;
    // private currentCompressedChunk: SnappyCompressorInputStream;
    // private dialect: FramedSnappyDialect;
    // private endReached: boolean;
    // private expectedChecksum: number;
    // private inUncompressedChunk: boolean;
    // private inputStream: PushbackInputStream;
    // private oneByte: number[];
    // private supplier: ByteUtils$ByteSupplier;
    // private uncompressedBytesRemaining: number;
    // private unreadBytes: number;
    available(): number;
    close(): void;
    getCompressedCount(): number;
    read(): number;
    read(arg0: number[]): number;
    read(arg0: number[], arg1: number, arg2: number): number;
    // private readCrc(): number;
    // private readNextBlock(): void;
    // private readOnce(arg0: number[], arg1: number, arg2: number): number;
    // private readOneByte(): number;
    // private readSize(): number;
    // private readStreamIdentifier(): void;
    // private skipBlock(): void;
    // private verifyLastChecksumAndReset(): void;
}