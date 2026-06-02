import type { CacheBuilder } from '../../../../com/google/common/cache/CacheBuilder.d.ts'
import type { LocalCache$Strength } from '../../../../com/google/common/cache/LocalCache$Strength.d.ts'
import type { TimeUnit } from '../../../../java/util/concurrent/TimeUnit.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class CacheBuilderSpec extends Object {
    static disableCaching(): CacheBuilderSpec;
    static parse(paramcacheBuilderSpecification: string): CacheBuilderSpec;
    private constructor(specification: string)
    // private accessExpirationDuration: number;
    // private accessExpirationTimeUnit: TimeUnit;
    // private concurrencyLevel: number;
    // private initialCapacity: number;
    // private keyStrength: LocalCache$Strength;
    // private maximumSize: number;
    // private maximumWeight: number;
    // private recordStats: boolean;
    // private refreshDuration: number;
    // private refreshTimeUnit: TimeUnit;
    // private specification: string;
    // private valueStrength: LocalCache$Strength;
    // private writeExpirationDuration: number;
    // private writeExpirationTimeUnit: TimeUnit;
    equals(obj: Object | null): boolean;
    hashCode(): number;
    toCacheBuilder(): CacheBuilder<Object, Object>;
    toParsableString(): string;
    toString(): string;
}