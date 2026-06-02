import type { Date } from '../../../java/util/Date.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Request } from '../../../okhttp3/Request.d.ts'
import type { Response } from '../../../okhttp3/Response.d.ts'
import type { CacheStrategy } from '../../../okhttp3/internal/cache/CacheStrategy.d.ts'
export class CacheStrategy$Factory extends Object {
    constructor(nowMillis: number, request: Request, cacheResponse: Response | null)
    // private ageSeconds: number;
    // private cacheResponse: Response | null;
    // private etag: string | null;
    // private expires: Date | null;
    // private lastModified: Date | null;
    // private lastModifiedString: string | null;
    // private nowMillis: number;
    // private receivedResponseMillis: number;
    // private request: Request;
    /*not mapped: */ getRequest$okhttp(): Request;
    // private sentRequestMillis: number;
    // private servedDate: Date | null;
    // private servedDateString: string | null;
    // private cacheResponseAge(): number;
    compute(): CacheStrategy;
    // private computeCandidate(): CacheStrategy;
    // private computeFreshnessLifetime(): number;
    // private hasConditions(request: Request): boolean;
    // private isFreshnessLifetimeHeuristic(): boolean;
}