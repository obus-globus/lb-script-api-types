import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { CacheWithNotNullValues } from '../../../../../../kotlin/reflect/jvm/internal/impl/storage/CacheWithNotNullValues.d.ts'
import type { LockBasedStorageManager } from '../../../../../../kotlin/reflect/jvm/internal/impl/storage/LockBasedStorageManager.d.ts'
import type { LockBasedStorageManager$CacheWithNullableValuesBasedOnMemoizedFunction } from '../../../../../../kotlin/reflect/jvm/internal/impl/storage/LockBasedStorageManager$CacheWithNullableValuesBasedOnMemoizedFunction.d.ts'
export class LockBasedStorageManager$CacheWithNotNullValuesBasedOnMemoizedFunction<K extends unknown, V extends unknown> extends LockBasedStorageManager$CacheWithNullableValuesBasedOnMemoizedFunction<K, V> implements CacheWithNotNullValues<K, V> {
    constructor(arg0: LockBasedStorageManager, arg1: Map<Object, Object>, arg2: LockBasedStorageManager)
    computeIfAbsent(arg0: K, arg1: () => V): V;
}