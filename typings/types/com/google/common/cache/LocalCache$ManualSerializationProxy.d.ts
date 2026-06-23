import type { Equivalence } from '../../../../com/google/common/base/Equivalence.d.ts'
import type { Ticker } from '../../../../com/google/common/base/Ticker.d.ts'
import type { Cache } from '../../../../com/google/common/cache/Cache.d.ts'
import type { CacheBuilder } from '../../../../com/google/common/cache/CacheBuilder.d.ts'
import type { CacheLoader } from '../../../../com/google/common/cache/CacheLoader.d.ts'
import type { ForwardingCache } from '../../../../com/google/common/cache/ForwardingCache.d.ts'
import type { LocalCache$Strength } from '../../../../com/google/common/cache/LocalCache$Strength.d.ts'
import type { RemovalListener } from '../../../../com/google/common/cache/RemovalListener.d.ts'
import type { RemovalNotification } from '../../../../com/google/common/cache/RemovalNotification.d.ts'
import type { Weigher } from '../../../../com/google/common/cache/Weigher.d.ts'
import type { ObjectInputStream } from '../../../../java/io/ObjectInputStream.d.ts'
import type { Serializable } from '../../../../java/io/Serializable.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class LocalCache$ManualSerializationProxy<K extends unknown, V extends unknown> extends ForwardingCache<K, V> implements Serializable {
    private constructor(keyStrength: LocalCache$Strength, valueStrength: LocalCache$Strength, keyEquivalence: Equivalence<Object>, valueEquivalence: Equivalence<Object>, expireAfterWriteNanos: number, expireAfterAccessNanos: number, maxWeight: number, weigher: (param0: K, param1: V) => number, concurrencyLevel: number, removalListener: (param0: RemovalNotification<K, V>) => void, ticker: Ticker, loader: CacheLoader<K, V>)
    constructor(cache: Map<K, V>)
    // private concurrencyLevel: number;
    // private delegate: Cache<K, V>;
    // private expireAfterAccessNanos: number;
    // private expireAfterWriteNanos: number;
    // private keyEquivalence: Equivalence<Object>;
    // private keyStrength: LocalCache$Strength;
    // private loader: CacheLoader<K, V>;
    // private maxWeight: number;
    // private removalListener: (param0: RemovalNotification<K, V>) => void;
    // private ticker: Ticker;
    // private valueEquivalence: Equivalence<Object>;
    // private valueStrength: LocalCache$Strength;
    // private weigher: (param0: K, param1: V) => number;
    delegate(): Cache<K, V>;
    // private readObject(in_: ObjectInputStream): void;
    // private readResolve(): Object;
    recreateCacheBuilder(): CacheBuilder<K, V>;
}