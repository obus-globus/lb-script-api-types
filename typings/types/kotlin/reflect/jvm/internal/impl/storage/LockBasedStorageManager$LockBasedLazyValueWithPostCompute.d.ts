import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { LockBasedStorageManager } from '../../../../../../kotlin/reflect/jvm/internal/impl/storage/LockBasedStorageManager.d.ts'
import type { LockBasedStorageManager$LockBasedLazyValue } from '../../../../../../kotlin/reflect/jvm/internal/impl/storage/LockBasedStorageManager$LockBasedLazyValue.d.ts'
import type { SingleThreadValue } from '../../../../../../kotlin/reflect/jvm/internal/impl/storage/SingleThreadValue.d.ts'
export abstract class LockBasedStorageManager$LockBasedLazyValueWithPostCompute<T extends unknown> extends LockBasedStorageManager$LockBasedLazyValue<T> {
    constructor(arg0: LockBasedStorageManager, arg1: () => T)
    // private valuePostCompute: SingleThreadValue<T>;
    doPostCompute(arg0: T): void;
    invoke(): T;
    postCompute(arg0: T): void;
}