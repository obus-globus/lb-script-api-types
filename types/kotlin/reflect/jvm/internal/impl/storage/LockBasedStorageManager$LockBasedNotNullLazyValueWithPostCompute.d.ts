import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Function0 } from '../../../../../../kotlin/jvm/functions/Function0.d.ts'
import type { LockBasedStorageManager } from '../../../../../../kotlin/reflect/jvm/internal/impl/storage/LockBasedStorageManager.d.ts'
import type { LockBasedStorageManager$LockBasedLazyValueWithPostCompute } from '../../../../../../kotlin/reflect/jvm/internal/impl/storage/LockBasedStorageManager$LockBasedLazyValueWithPostCompute.d.ts'
import type { NotNullLazyValue } from '../../../../../../kotlin/reflect/jvm/internal/impl/storage/NotNullLazyValue.d.ts'
export abstract class LockBasedStorageManager$LockBasedNotNullLazyValueWithPostCompute<T extends Object | number | string | boolean> extends LockBasedStorageManager$LockBasedLazyValueWithPostCompute<T> implements NotNullLazyValue<T> {
    constructor(arg0: LockBasedStorageManager, arg1: Function0<T>)
    invoke(): T;
}