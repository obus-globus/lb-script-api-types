import type { Object } from '../java/lang/Object.d.ts'
import type { BufferedSource } from '../okio/BufferedSource.d.ts'
import type { Source } from '../okio/Source.d.ts'
export interface CompressionInterceptor$DecompressionAlgorithm extends Object{
    readonly encoding: string;
    decompress(compressedSource: BufferedSource): Source;
}