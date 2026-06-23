import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { NullabilityAnnotationStates } from '../../../../../../../kotlin/reflect/jvm/internal/impl/load/java/NullabilityAnnotationStates.d.ts'
import type { NullabilityAnnotationStates$Companion } from '../../../../../../../kotlin/reflect/jvm/internal/impl/load/java/NullabilityAnnotationStates$Companion.d.ts'
import type { FqName } from '../../../../../../../kotlin/reflect/jvm/internal/impl/name/FqName.d.ts'
import type { LockBasedStorageManager } from '../../../../../../../kotlin/reflect/jvm/internal/impl/storage/LockBasedStorageManager.d.ts'
import type { MemoizedFunctionToNullable } from '../../../../../../../kotlin/reflect/jvm/internal/impl/storage/MemoizedFunctionToNullable.d.ts'
export class NullabilityAnnotationStatesImpl<T extends unknown> extends Object implements NullabilityAnnotationStates<T> {
    static Companion: NullabilityAnnotationStates$Companion;
    constructor(arg0: Map<FqName, T>)
    // private cache: MemoizedFunctionToNullable<FqName, T>;
    // private states: Map<FqName, T>;
    // private storageManager: LockBasedStorageManager;
    get(arg0: FqName): T;
}