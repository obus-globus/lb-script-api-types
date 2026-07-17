import type { JavaMap } from '../../../../../../JavaMap.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { LockBasedStorageManager } from '../../../../../../kotlin/reflect/jvm/internal/impl/storage/LockBasedStorageManager.d.ts'
import type { LockBasedStorageManager$MapBasedMemoizedFunction } from '../../../../../../kotlin/reflect/jvm/internal/impl/storage/LockBasedStorageManager$MapBasedMemoizedFunction.d.ts'
import type { MemoizedFunctionToNotNull } from '../../../../../../kotlin/reflect/jvm/internal/impl/storage/MemoizedFunctionToNotNull.d.ts'
export class LockBasedStorageManager$MapBasedMemoizedFunctionToNotNull<K extends unknown, V extends unknown> extends LockBasedStorageManager$MapBasedMemoizedFunction<K, V> implements MemoizedFunctionToNotNull<K, V> {
    constructor(arg0: LockBasedStorageManager, arg1: JavaMap<K, Object>, arg2: (param0: K) => V)
    invoke(arg0: K): V;
}