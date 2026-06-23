import type { Equivalence } from '../../../../com/google/common/base/Equivalence.d.ts'
import type { Supplier } from '../../../../com/google/common/base/Supplier.d.ts'
import type { Ticker } from '../../../../com/google/common/base/Ticker.d.ts'
import type { AbstractCache$StatsCounter } from '../../../../com/google/common/cache/AbstractCache$StatsCounter.d.ts'
import type { Cache } from '../../../../com/google/common/cache/Cache.d.ts'
import type { CacheBuilderSpec } from '../../../../com/google/common/cache/CacheBuilderSpec.d.ts'
import type { CacheLoader } from '../../../../com/google/common/cache/CacheLoader.d.ts'
import type { LoadingCache } from '../../../../com/google/common/cache/LoadingCache.d.ts'
import type { LocalCache$Strength } from '../../../../com/google/common/cache/LocalCache$Strength.d.ts'
import type { RemovalListener } from '../../../../com/google/common/cache/RemovalListener.d.ts'
import type { RemovalNotification } from '../../../../com/google/common/cache/RemovalNotification.d.ts'
import type { Weigher } from '../../../../com/google/common/cache/Weigher.d.ts'
import type { Duration } from '../../../../java/time/Duration.d.ts'
import type { TimeUnit } from '../../../../java/util/concurrent/TimeUnit.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class CacheBuilder<K extends unknown, V extends unknown> extends Object {
    static from(paramspec: CacheBuilderSpec): CacheBuilder<Object, Object>;
    static from(paramspec: string): CacheBuilder<Object, Object>;
    static newBuilder(): CacheBuilder<Object, Object>;
    private constructor()
    // private concurrencyLevel: number;
    // private expireAfterAccessNanos: number;
    // private expireAfterWriteNanos: number;
    // private initialCapacity: number;
    // private keyEquivalence: Equivalence<Object>;
    // private keyStrength: LocalCache$Strength;
    // private maximumSize: number;
    // private maximumWeight: number;
    // private refreshNanos: number;
    // private removalListener: (param0: RemovalNotification<K, V>) => void;
    // private statsCounterSupplier: () => AbstractCache$StatsCounter;
    // private strictParsing: boolean;
    // private ticker: Ticker;
    // private valueEquivalence: Equivalence<Object>;
    // private valueStrength: LocalCache$Strength;
    // private weigher: (param0: K, param1: V) => number;
    build<K1 extends K, V1 extends V>(): Cache<K1, V1>;
    build<K1 extends K, V1 extends V>(loader: CacheLoader<K1, V1>): LoadingCache<K1, V1>;
    // private checkNonLoadingCache(): void;
    // private checkWeightWithWeigher(): void;
    concurrencyLevel(concurrencyLevel: number): CacheBuilder<K, V>;
    expireAfterAccess(duration: Duration): CacheBuilder<K, V>;
    expireAfterAccess(duration: number, unit: TimeUnit): CacheBuilder<K, V>;
    expireAfterWrite(duration: Duration): CacheBuilder<K, V>;
    expireAfterWrite(duration: number, unit: TimeUnit): CacheBuilder<K, V>;
    getConcurrencyLevel(): number;
    getExpireAfterAccessNanos(): number;
    getExpireAfterWriteNanos(): number;
    getInitialCapacity(): number;
    getKeyEquivalence(): Equivalence<Object>;
    getKeyStrength(): LocalCache$Strength;
    getMaximumWeight(): number;
    getRefreshNanos(): number;
    getRemovalListener<K1 extends K, V1 extends V>(): (param0: RemovalNotification<K1, V1>) => void;
    getStatsCounterSupplier(): () => AbstractCache$StatsCounter;
    getTicker(recordsTime: boolean): Ticker;
    getValueEquivalence(): Equivalence<Object>;
    getValueStrength(): LocalCache$Strength;
    getWeigher<K1 extends K, V1 extends V>(): (param0: K1, param1: V1) => number;
    initialCapacity(initialCapacity: number): CacheBuilder<K, V>;
    isRecordingStats(): boolean;
    keyEquivalence(equivalence: Equivalence<Object>): CacheBuilder<K, V>;
    lenientParsing(): CacheBuilder<K, V>;
    maximumSize(maximumSize: number): CacheBuilder<K, V>;
    maximumWeight(maximumWeight: number): CacheBuilder<K, V>;
    recordStats(): CacheBuilder<K, V>;
    refreshAfterWrite(duration: Duration): CacheBuilder<K, V>;
    refreshAfterWrite(duration: number, unit: TimeUnit): CacheBuilder<K, V>;
    removalListener<K1 extends K, V1 extends V>(listener: (param0: RemovalNotification<K1, V1>) => void): CacheBuilder<K1, V1>;
    setKeyStrength(strength: LocalCache$Strength): CacheBuilder<K, V>;
    setValueStrength(strength: LocalCache$Strength): CacheBuilder<K, V>;
    softValues(): CacheBuilder<K, V>;
    ticker(ticker: Ticker): CacheBuilder<K, V>;
    toString(): string;
    valueEquivalence(equivalence: Equivalence<Object>): CacheBuilder<K, V>;
    weakKeys(): CacheBuilder<K, V>;
    weakValues(): CacheBuilder<K, V>;
    weigher<K1 extends K, V1 extends V>(weigher: (param0: K1, param1: V1) => number): CacheBuilder<K1, V1>;
}