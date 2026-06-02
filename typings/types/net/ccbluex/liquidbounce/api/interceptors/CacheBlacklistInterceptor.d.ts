import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { CacheBlacklistInterceptor$Companion } from '../../../../../net/ccbluex/liquidbounce/api/interceptors/CacheBlacklistInterceptor$Companion.d.ts'
import type { Interceptor } from '../../../../../okhttp3/Interceptor.d.ts'
import type { Interceptor$Chain } from '../../../../../okhttp3/Interceptor$Chain.d.ts'
import type { Interceptor$Companion } from '../../../../../okhttp3/Interceptor$Companion.d.ts'
import type { Response } from '../../../../../okhttp3/Response.d.ts'
export class CacheBlacklistInterceptor extends Object implements Interceptor {
    static Companion: CacheBlacklistInterceptor$Companion;
    static Companion: Interceptor$Companion;
    constructor(blacklistedHosts: string[])
    readonly blacklistedHosts: string[];
    intercept(chain: Interceptor$Chain): Response;
}