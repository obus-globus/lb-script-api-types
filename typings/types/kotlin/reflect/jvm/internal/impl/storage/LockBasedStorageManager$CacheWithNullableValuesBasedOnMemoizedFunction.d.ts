import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { CacheWithNullableValues } from '../../../../../../kotlin/reflect/jvm/internal/impl/storage/CacheWithNullableValues.d.ts'
import type { LockBasedStorageManager } from '../../../../../../kotlin/reflect/jvm/internal/impl/storage/LockBasedStorageManager.d.ts'
import type { LockBasedStorageManager$KeyWithComputation } from '../../../../../../kotlin/reflect/jvm/internal/impl/storage/LockBasedStorageManager$KeyWithComputation.d.ts'
import type { LockBasedStorageManager$MapBasedMemoizedFunction } from '../../../../../../kotlin/reflect/jvm/internal/impl/storage/LockBasedStorageManager$MapBasedMemoizedFunction.d.ts'
export class LockBasedStorageManager$CacheWithNullableValuesBasedOnMemoizedFunction<K extends unknown, V extends unknown> extends LockBasedStorageManager$MapBasedMemoizedFunction<LockBasedStorageManager$KeyWithComputation<K, V>, V> implements CacheWithNullableValues<K, V> {
    private constructor(arg0: LockBasedStorageManager, arg1: Map<LockBasedStorageManager$KeyWithComputation<K, V>, Object>)
    computeIfAbsent(arg0: K, arg1: () => V): V;
}