import type { Object } from '../java/lang/Object.d.ts'
import type { Pair } from '../kotlin/Pair.d.ts'
import type { HttpUrl } from '../okhttp3/HttpUrl.d.ts'
import type { Request } from '../okhttp3/Request.d.ts'
import type { Response } from '../okhttp3/Response.d.ts'
import type { BufferedSource } from '../okio/BufferedSource.d.ts'
export class Cache$Companion extends Object {
    // private ENTRY_BODY: number;
    // private ENTRY_COUNT: number;
    // private ENTRY_METADATA: number;
    // private VERSION: number;
    key(url: HttpUrl): string;
    readInt(source: BufferedSource): number;
    // private varyHeaders(requestHeaders: Pair<string, string>[], responseHeaders: Pair<string, string>[]): Pair<string, string>[];
    varyMatches(cachedResponse: Response, cachedRequest: Pair<string, string>[], newRequest: Request): boolean;
}