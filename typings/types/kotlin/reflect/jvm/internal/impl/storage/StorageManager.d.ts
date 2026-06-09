import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { CacheWithNotNullValues } from '../../../../../../kotlin/reflect/jvm/internal/impl/storage/CacheWithNotNullValues.d.ts'
import type { CacheWithNullableValues } from '../../../../../../kotlin/reflect/jvm/internal/impl/storage/CacheWithNullableValues.d.ts'
import type { MemoizedFunctionToNotNull } from '../../../../../../kotlin/reflect/jvm/internal/impl/storage/MemoizedFunctionToNotNull.d.ts'
import type { MemoizedFunctionToNullable } from '../../../../../../kotlin/reflect/jvm/internal/impl/storage/MemoizedFunctionToNullable.d.ts'
import type { NotNullLazyValue } from '../../../../../../kotlin/reflect/jvm/internal/impl/storage/NotNullLazyValue.d.ts'
import type { NullableLazyValue } from '../../../../../../kotlin/reflect/jvm/internal/impl/storage/NullableLazyValue.d.ts'
export interface StorageManager extends Object {
    compute<T extends Object | number | string | boolean>(arg0: () => T): T;
    createCacheWithNotNullValues(): CacheWithNotNullValues<K, V>;
    createCacheWithNullableValues(): CacheWithNullableValues<K, V>;
    createLazyValue(arg0: () => T): NotNullLazyValue<T>;
    createLazyValueWithPostCompute(arg0: () => T, arg1: (param0: boolean) => T, arg2: (param0: T) => void): NotNullLazyValue<T>;
    createMemoizedFunction(arg0: (param0: K) => V): MemoizedFunctionToNotNull<K, V>;
    createMemoizedFunctionWithNullableValues(arg0: (param0: K) => V): MemoizedFunctionToNullable<K, V>;
    createNullableLazyValue(arg0: () => T): NullableLazyValue<T>;
    createRecursionTolerantLazyValue<T extends Object | number | string | boolean>(arg0: () => T, arg1: T): NotNullLazyValue<T>;
}