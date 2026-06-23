import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { LockBasedStorageManager } from '../../../../../../kotlin/reflect/jvm/internal/impl/storage/LockBasedStorageManager.d.ts'
import type { LockBasedStorageManager$LockBasedLazyValueWithPostCompute } from '../../../../../../kotlin/reflect/jvm/internal/impl/storage/LockBasedStorageManager$LockBasedLazyValueWithPostCompute.d.ts'
import type { NotNullLazyValue } from '../../../../../../kotlin/reflect/jvm/internal/impl/storage/NotNullLazyValue.d.ts'
export abstract class LockBasedStorageManager$LockBasedNotNullLazyValueWithPostCompute<T extends unknown> extends LockBasedStorageManager$LockBasedLazyValueWithPostCompute<T> implements NotNullLazyValue<T> {
    constructor(arg0: LockBasedStorageManager, arg1: () => T)
    invoke(): T;
}