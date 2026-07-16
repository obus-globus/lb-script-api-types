import type { Object } from '../../java/lang/Object.d.ts'
import type { Pair } from '../../kotlin/Pair.d.ts'
import type { CacheControl } from '../../okhttp3/CacheControl.d.ts'
import type { CacheControl$Builder } from '../../okhttp3/CacheControl$Builder.d.ts'
import type { CacheControl$Companion } from '../../okhttp3/CacheControl$Companion.d.ts'
export class _CacheControlCommonKt extends Object {
    static commonBuild(self: CacheControl$Builder): CacheControl;
    static commonClampToInt(self: number): number;
    static commonForceCache(self: CacheControl$Companion): CacheControl;
    static commonForceNetwork(self: CacheControl$Companion): CacheControl;
    static commonImmutable(self: CacheControl$Builder): CacheControl$Builder;
    static commonNoCache(self: CacheControl$Builder): CacheControl$Builder;
    static commonNoStore(self: CacheControl$Builder): CacheControl$Builder;
    static commonNoTransform(self: CacheControl$Builder): CacheControl$Builder;
    static commonOnlyIfCached(self: CacheControl$Builder): CacheControl$Builder;
    static commonParse(self: CacheControl$Companion, headers: Pair<string, string>[]): CacheControl;
    static commonToString(self: CacheControl): string;
}