import type { JavaMap } from '../../../../../../JavaMap.d.ts'
import type { AssertionError } from '../../../../../../java/lang/AssertionError.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../../../../java/lang/Throwable.d.ts'
import type { LockBasedStorageManager } from '../../../../../../kotlin/reflect/jvm/internal/impl/storage/LockBasedStorageManager.d.ts'
import type { LockBasedStorageManager$RecursionDetectedResult } from '../../../../../../kotlin/reflect/jvm/internal/impl/storage/LockBasedStorageManager$RecursionDetectedResult.d.ts'
import type { MemoizedFunctionToNullable } from '../../../../../../kotlin/reflect/jvm/internal/impl/storage/MemoizedFunctionToNullable.d.ts'
export class LockBasedStorageManager$MapBasedMemoizedFunction<K extends unknown, V extends unknown> extends Object implements MemoizedFunctionToNullable<K, V> {
    constructor(arg0: LockBasedStorageManager, arg1: JavaMap<K, Object>, arg2: (param0: K) => V)
    // private cache: JavaMap<K, Object>;
    // private compute: (param0: K) => V;
    // private storageManager: LockBasedStorageManager;
    getStorageManager(): LockBasedStorageManager;
    // private inconsistentComputingKey(arg0: K, arg1: Object): AssertionError;
    invoke(arg0: K): V;
    isComputed(arg0: K): boolean;
    // private raceCondition(arg0: K, arg1: Object): AssertionError;
    recursionDetected(arg0: K, arg1: boolean): LockBasedStorageManager$RecursionDetectedResult<V>;
    // private unableToRemoveKey(arg0: K, arg1: Throwable): AssertionError;
}