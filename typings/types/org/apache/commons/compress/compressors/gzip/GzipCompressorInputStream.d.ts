import type { InputStream } from '../../../../../../java/io/InputStream.d.ts'
import type { Charset } from '../../../../../../java/nio/charset/Charset.d.ts'
import type { CRC32 } from '../../../../../../java/util/zip/CRC32.d.ts'
import type { Inflater } from '../../../../../../java/util/zip/Inflater.d.ts'
import type { CompressorInputStream } from '../../../../../../org/apache/commons/compress/compressors/CompressorInputStream.d.ts'
import type { GzipCompressorInputStream$Builder } from '../../../../../../org/apache/commons/compress/compressors/gzip/GzipCompressorInputStream$Builder.d.ts'
import type { GzipParameters } from '../../../../../../org/apache/commons/compress/compressors/gzip/GzipParameters.d.ts'
import type { InputStreamStatistics } from '../../../../../../org/apache/commons/compress/utils/InputStreamStatistics.d.ts'
import type { IOConsumer } from '../../../../../../org/apache/commons/io/function/IOConsumer.d.ts'
import type { BoundedInputStream } from '../../../../../../org/apache/commons/io/input/BoundedInputStream.d.ts'
export class GzipCompressorInputStream extends CompressorInputStream implements InputStreamStatistics {
    static builder(): GzipCompressorInputStream$Builder;
    static matches(paramarg0: number[], paramarg1: number): boolean;
    static nullInputStream(): InputStream;
    constructor(arg0: InputStream)
    constructor(arg0: InputStream, arg1: boolean)
    private constructor(arg0: GzipCompressorInputStream$Builder)
    // private buf: number[];
    // private bufUsed: number;
    // private countingStream: BoundedInputStream;
    // private crc: CRC32;
    // private decompressConcatenated: boolean;
    // private endReached: boolean;
    // private fileNameCharset: Charset;
    // private in: InputStream;
    // private inflater: Inflater;
    // private onMemberEnd: (param0: GzipCompressorInputStream) => void;
    // private onMemberStart: (param0: GzipCompressorInputStream) => void;
    // private oneByte: number[];
    // private parameters: GzipParameters;
    close(): void;
    getCompressedCount(): number;
    getMetaData(): GzipParameters;
    // private init(arg0: boolean): boolean;
    read(): number;
    read(arg0: number[]): number;
    read(arg0: number[], arg1: number, arg2: number): number;
}