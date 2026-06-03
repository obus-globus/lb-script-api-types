import type { InterruptedException } from '../../../../../../java/lang/InterruptedException.d.ts'
import type { Runnable } from '../../../../../../java/lang/Runnable.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { CacheWithNotNullValues } from '../../../../../../kotlin/reflect/jvm/internal/impl/storage/CacheWithNotNullValues.d.ts'
import type { CacheWithNullableValues } from '../../../../../../kotlin/reflect/jvm/internal/impl/storage/CacheWithNullableValues.d.ts'
import type { LockBasedStorageManager$ExceptionHandlingStrategy } from '../../../../../../kotlin/reflect/jvm/internal/impl/storage/LockBasedStorageManager$ExceptionHandlingStrategy.d.ts'
import type { LockBasedStorageManager$RecursionDetectedResult } from '../../../../../../kotlin/reflect/jvm/internal/impl/storage/LockBasedStorageManager$RecursionDetectedResult.d.ts'
import type { MemoizedFunctionToNotNull } from '../../../../../../kotlin/reflect/jvm/internal/impl/storage/MemoizedFunctionToNotNull.d.ts'
import type { MemoizedFunctionToNullable } from '../../../../../../kotlin/reflect/jvm/internal/impl/storage/MemoizedFunctionToNullable.d.ts'
import type { NotNullLazyValue } from '../../../../../../kotlin/reflect/jvm/internal/impl/storage/NotNullLazyValue.d.ts'
import type { NullableLazyValue } from '../../../../../../kotlin/reflect/jvm/internal/impl/storage/NullableLazyValue.d.ts'
import type { SimpleLock } from '../../../../../../kotlin/reflect/jvm/internal/impl/storage/SimpleLock.d.ts'
import type { StorageManager } from '../../../../../../kotlin/reflect/jvm/internal/impl/storage/StorageManager.d.ts'
export class LockBasedStorageManager extends Object implements StorageManager {
    static NO_LOCKS: StorageManager;
    constructor(arg0: string)
    constructor(arg0: string, arg1: () => void, arg2: (param0: InterruptedException) => void)
    private constructor(arg0: string, arg1: LockBasedStorageManager$ExceptionHandlingStrategy, arg2: SimpleLock)
    // private debugText: string;
    // private exceptionHandlingStrategy: LockBasedStorageManager$ExceptionHandlingStrategy;
    // private lock: SimpleLock;
    compute<T extends Object | number | string | boolean>(arg0: () => T): T;
    createCacheWithNotNullValues(): CacheWithNotNullValues<K, V>;
    createCacheWithNullableValues(): CacheWithNullableValues<K, V>;
    createLazyValue(arg0: () => T): NotNullLazyValue<T>;
    createLazyValueWithPostCompute(arg0: () => T, arg1: (param0: boolean) => T, arg2: (param0: T) => void): NotNullLazyValue<T>;
    createMemoizedFunction(arg0: (param0: K) => V): MemoizedFunctionToNotNull<K, V>;
    createMemoizedFunction(arg0: (param0: K) => V, arg1: Map<K, Object>): MemoizedFunctionToNotNull<K, V>;
    createMemoizedFunctionWithNullableValues(arg0: (param0: K) => V): MemoizedFunctionToNullable<K, V>;
    createMemoizedFunctionWithNullableValues(arg0: (param0: K) => V, arg1: Map<K, Object>): MemoizedFunctionToNullable<K, V>;
    createNullableLazyValue(arg0: () => T): NullableLazyValue<T>;
    createRecursionTolerantLazyValue<T extends Object | number | string | boolean>(arg0: () => T, arg1: T): NotNullLazyValue<T>;
    recursionDetectedDefault<K extends Object | number | string | boolean>(arg0: string, arg1: K): LockBasedStorageManager$RecursionDetectedResult<V>;
    toString(): string;
}