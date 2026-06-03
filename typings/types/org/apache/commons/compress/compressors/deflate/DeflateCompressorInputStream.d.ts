import type { InputStream } from '../../../../../../java/io/InputStream.d.ts'
import type { Inflater } from '../../../../../../java/util/zip/Inflater.d.ts'
import type { CompressorInputStream } from '../../../../../../org/apache/commons/compress/compressors/CompressorInputStream.d.ts'
import type { DeflateParameters } from '../../../../../../org/apache/commons/compress/compressors/deflate/DeflateParameters.d.ts'
import type { InputStreamStatistics } from '../../../../../../org/apache/commons/compress/utils/InputStreamStatistics.d.ts'
import type { BoundedInputStream } from '../../../../../../org/apache/commons/io/input/BoundedInputStream.d.ts'
export class DeflateCompressorInputStream extends CompressorInputStream implements InputStreamStatistics {
    static matches(paramarg0: number[], paramarg1: number): boolean;
    static nullInputStream(): InputStream;
    constructor(arg0: InputStream)
    constructor(arg0: InputStream, arg1: DeflateParameters)
    // private countingStream: BoundedInputStream;
    // private in: InputStream;
    // private inflater: Inflater;
    available(): number;
    close(): void;
    getCompressedCount(): number;
    read(): number;
    read(arg0: number[]): number;
    read(arg0: number[], arg1: number, arg2: number): number;
    skip(arg0: number): number;
}