import type { Object } from '../../../java/lang/Object.d.ts'
import type { Interceptor } from '../../../okhttp3/Interceptor.d.ts'
import type { Interceptor$Chain } from '../../../okhttp3/Interceptor$Chain.d.ts'
import type { Response } from '../../../okhttp3/Response.d.ts'
import type { CacheInterceptor$Companion } from '../../../okhttp3/internal/cache/CacheInterceptor$Companion.d.ts'
import type { CacheRequest } from '../../../okhttp3/internal/cache/CacheRequest.d.ts'
export class CacheInterceptor extends Object implements Interceptor {
    static Companion: CacheInterceptor$Companion;
    constructor()
    // private cacheWritingResponse(cacheRequest: CacheRequest | null, response: Response): Response;
    intercept(chain: Interceptor$Chain): Response;
}