import type { Object } from '../java/lang/Object.d.ts'
import type { CompressionInterceptor$DecompressionAlgorithm } from '../okhttp3/CompressionInterceptor$DecompressionAlgorithm.d.ts'
import type { BufferedSource } from '../okio/BufferedSource.d.ts'
import type { Source } from '../okio/Source.d.ts'
export class Gzip extends Object implements CompressionInterceptor$DecompressionAlgorithm {
    static INSTANCE: Gzip;
    readonly encoding: string;
    decompress(compressedSource: BufferedSource): Source;
}