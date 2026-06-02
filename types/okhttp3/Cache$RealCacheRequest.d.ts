import type { Object } from '../java/lang/Object.d.ts'
import type { CacheRequest } from '../okhttp3/internal/cache/CacheRequest.d.ts'
import type { DiskLruCache$Editor } from '../okhttp3/internal/cache/DiskLruCache$Editor.d.ts'
import type { Sink } from '../okio/Sink.d.ts'
export class Cache$RealCacheRequest extends Object implements CacheRequest {
    constructor(null_: Cache$RealCacheRequest, editor: DiskLruCache$Editor)
    // private body: Sink;
    // private cacheOut: Sink;
    done: boolean;
    // private editor: DiskLruCache$Editor;
    abort(): void;
    body(): Sink;
}