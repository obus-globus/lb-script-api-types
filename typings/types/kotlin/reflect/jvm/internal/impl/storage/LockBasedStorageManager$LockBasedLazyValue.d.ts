import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { LockBasedStorageManager } from '../../../../../../kotlin/reflect/jvm/internal/impl/storage/LockBasedStorageManager.d.ts'
import type { LockBasedStorageManager$RecursionDetectedResult } from '../../../../../../kotlin/reflect/jvm/internal/impl/storage/LockBasedStorageManager$RecursionDetectedResult.d.ts'
import type { NullableLazyValue } from '../../../../../../kotlin/reflect/jvm/internal/impl/storage/NullableLazyValue.d.ts'
export class LockBasedStorageManager$LockBasedLazyValue<T extends Object | number | string | boolean> extends Object implements NullableLazyValue<T> {
    constructor(arg0: LockBasedStorageManager, arg1: () => T)
    // private computable: () => T;
    // private storageManager: LockBasedStorageManager;
    // private value: Object;
    invoke(): T;
    isComputed(): boolean;
    postCompute(arg0: T): void;
    recursionDetected(arg0: boolean): LockBasedStorageManager$RecursionDetectedResult<T>;
}