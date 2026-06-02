import type { InputStream } from '../../../../../../java/io/InputStream.d.ts'
import type { CompressorInputStream } from '../../../../../../org/apache/commons/compress/compressors/CompressorInputStream.d.ts'
import type { HuffmanDecoder } from '../../../../../../org/apache/commons/compress/compressors/deflate64/HuffmanDecoder.d.ts'
import type { InputStreamStatistics } from '../../../../../../org/apache/commons/compress/utils/InputStreamStatistics.d.ts'
export class Deflate64CompressorInputStream extends CompressorInputStream implements InputStreamStatistics {
    static nullInputStream(): InputStream;
    constructor(arg0: InputStream)
    constructor(arg0: HuffmanDecoder)
    // private compressedBytesRead: number;
    // private decoder: HuffmanDecoder;
    // private oneByte: number[];
    // private originalStream: InputStream;
    available(): number;
    close(): void;
    // private closeDecoder(): void;
    getCompressedCount(): number;
    read(): number;
    read(arg0: number[], arg1: number, arg2: number): number;
}