import type { Object } from '../../../java/lang/Object.d.ts'
import type { Request } from '../../../okhttp3/Request.d.ts'
import type { Response } from '../../../okhttp3/Response.d.ts'
export class CacheStrategy$Companion extends Object {
    isCacheable(response: Response, request: Request): boolean;
}