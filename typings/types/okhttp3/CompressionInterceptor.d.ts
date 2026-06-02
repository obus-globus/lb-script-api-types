import type { Object } from '../java/lang/Object.d.ts'
import type { CompressionInterceptor$DecompressionAlgorithm } from '../okhttp3/CompressionInterceptor$DecompressionAlgorithm.d.ts'
import type { Interceptor } from '../okhttp3/Interceptor.d.ts'
import type { Interceptor$Chain } from '../okhttp3/Interceptor$Chain.d.ts'
import type { Interceptor$Companion } from '../okhttp3/Interceptor$Companion.d.ts'
import type { Response } from '../okhttp3/Response.d.ts'
export class CompressionInterceptor extends Object implements Interceptor {
    static Companion: Interceptor$Companion;
    constructor(algorithms: CompressionInterceptor$DecompressionAlgorithm[])
    // private acceptEncoding: string;
    /*not mapped: */ getAcceptEncoding$okhttp(): string;
    readonly algorithms: CompressionInterceptor$DecompressionAlgorithm[];
    decompress(response: Response): Response;
    intercept(chain: Interceptor$Chain): Response;
    lookupDecompressor(encoding: string): CompressionInterceptor$DecompressionAlgorithm | null;
}