import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class CachedParseState$CacheEntry<T extends Object | number | string | boolean> extends Record {
    static NEGATIVE: CachedParseState$CacheEntry<Object>;
    static negativeEntry(): CachedParseState$CacheEntry<Object>;
    // private markAfterParse: number;
    // private value: T;
    equals(o: Object | null): boolean;
    hashCode(): number;
    markAfterParse(): number;
    toString(): string;
    value(): T;
}