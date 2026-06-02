import type { OutputStream } from '../../../../../../java/io/OutputStream.d.ts'
import type { Charset } from '../../../../../../java/nio/charset/Charset.d.ts'
import type { CRC32 } from '../../../../../../java/util/zip/CRC32.d.ts'
import type { Deflater } from '../../../../../../java/util/zip/Deflater.d.ts'
import type { CompressorOutputStream } from '../../../../../../org/apache/commons/compress/compressors/CompressorOutputStream.d.ts'
import type { GzipParameters } from '../../../../../../org/apache/commons/compress/compressors/gzip/GzipParameters.d.ts'
export class GzipCompressorOutputStream extends CompressorOutputStream<OutputStream> {
    static nullOutputStream(): OutputStream;
    constructor(arg0: OutputStream)
    constructor(arg0: OutputStream, arg1: GzipParameters)
    // private crc: CRC32;
    // private deflateBuffer: number[];
    // private deflater: Deflater;
    close(): void;
    // private deflate(): void;
    finish(): void;
    write(arg0: number[]): void;
    write(arg0: number[], arg1: number, arg2: number): void;
    write(arg0: number): void;
    // private writeC(arg0: string, arg1: Charset): void;
    // private writeMemberHeader(arg0: GzipParameters): void;
    // private writeMemberTrailer(): void;
}