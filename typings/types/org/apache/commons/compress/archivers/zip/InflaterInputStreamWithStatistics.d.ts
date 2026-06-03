import type { InputStream } from '../../../../../../java/io/InputStream.d.ts'
import type { Inflater } from '../../../../../../java/util/zip/Inflater.d.ts'
import type { InflaterInputStream } from '../../../../../../java/util/zip/InflaterInputStream.d.ts'
import type { InputStreamStatistics } from '../../../../../../org/apache/commons/compress/utils/InputStreamStatistics.d.ts'
export class InflaterInputStreamWithStatistics extends InflaterInputStream implements InputStreamStatistics {
    static nullInputStream(): InputStream;
    constructor(arg0: InputStream)
    constructor(arg0: InputStream, arg1: Inflater)
    constructor(arg0: InputStream, arg1: Inflater, arg2: number)
    readonly compressedCount: number;
    readonly uncompressedCount: number;
    fill(): void;
    getCompressedCount(): number;
    getUncompressedCount(): number;
    read(): number;
    read(arg0: number[]): number;
    read(arg0: number[], arg1: number, arg2: number): number;
}