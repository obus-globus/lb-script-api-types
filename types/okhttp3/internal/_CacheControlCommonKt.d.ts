import type { Object } from '../../java/lang/Object.d.ts'
import type { Pair } from '../../kotlin/Pair.d.ts'
import type { CacheControl } from '../../okhttp3/CacheControl.d.ts'
import type { CacheControl$Builder } from '../../okhttp3/CacheControl$Builder.d.ts'
import type { CacheControl$Companion } from '../../okhttp3/CacheControl$Companion.d.ts'
export class _CacheControlCommonKt extends Object {
    static commonBuild(paramarg0: CacheControl$Builder): CacheControl;
    static commonClampToInt(paramarg0: number): number;
    static commonForceCache(paramarg0: CacheControl$Companion): CacheControl;
    static commonForceNetwork(paramarg0: CacheControl$Companion): CacheControl;
    static commonImmutable(paramarg0: CacheControl$Builder): CacheControl$Builder;
    static commonNoCache(paramarg0: CacheControl$Builder): CacheControl$Builder;
    static commonNoStore(paramarg0: CacheControl$Builder): CacheControl$Builder;
    static commonNoTransform(paramarg0: CacheControl$Builder): CacheControl$Builder;
    static commonOnlyIfCached(paramarg0: CacheControl$Builder): CacheControl$Builder;
    static commonParse(paramarg0: CacheControl$Companion, paramarg1: Pair<string, string>[]): CacheControl;
    static commonToString(paramarg0: CacheControl): string;
}