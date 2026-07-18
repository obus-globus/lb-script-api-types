import type { CacheControl } from '../../../../io/ktor/http/CacheControl.d.ts'
import type { GMTDate } from '../../../../io/ktor/util/date/GMTDate.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class CachingOptions extends Object {
    constructor(cacheControl: CacheControl | null, expires: GMTDate | null)
    readonly cacheControl: CacheControl | null;
    readonly expires: GMTDate | null;
    component1(): CacheControl | null;
    component2(): GMTDate | null;
    copy(cacheControl: CacheControl | null, expires: GMTDate | null): CachingOptions;
    equals(other: Object | null): boolean;
    hashCode(): number;
    toString(): string;
}