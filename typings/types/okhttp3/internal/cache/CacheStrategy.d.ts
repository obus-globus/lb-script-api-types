import type { Object } from '../../../java/lang/Object.d.ts'
import type { Request } from '../../../okhttp3/Request.d.ts'
import type { Response } from '../../../okhttp3/Response.d.ts'
import type { CacheStrategy$Companion } from '../../../okhttp3/internal/cache/CacheStrategy$Companion.d.ts'
export class CacheStrategy extends Object {
    static Companion: CacheStrategy$Companion;
    constructor(networkRequest: Request | null, cacheResponse: Response | null)
    readonly cacheResponse: Response | null;
    readonly networkRequest: Request | null;
}