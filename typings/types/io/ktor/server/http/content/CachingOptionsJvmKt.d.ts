import type { CacheControl } from '../../../../../io/ktor/http/CacheControl.d.ts'
import type { CachingOptions } from '../../../../../io/ktor/http/content/CachingOptions.d.ts'
import type { ZonedDateTime } from '../../../../../java/time/ZonedDateTime.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class CachingOptionsJvmKt extends Object {
    static CachingOptions(cacheControl: CacheControl | null, expires: ZonedDateTime): CachingOptions;
}