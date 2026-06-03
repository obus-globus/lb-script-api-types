import type { NotNullLazyValue } from '../../../../../../kotlin/reflect/jvm/internal/impl/storage/NotNullLazyValue.d.ts'
import type { StorageManager } from '../../../../../../kotlin/reflect/jvm/internal/impl/storage/StorageManager.d.ts'
import type { KotlinType } from '../../../../../../kotlin/reflect/jvm/internal/impl/types/KotlinType.d.ts'
import type { WrappedType } from '../../../../../../kotlin/reflect/jvm/internal/impl/types/WrappedType.d.ts'
import type { KotlinTypeRefiner } from '../../../../../../kotlin/reflect/jvm/internal/impl/types/checker/KotlinTypeRefiner.d.ts'
export class LazyWrappedType extends WrappedType {
    constructor(arg0: StorageManager, arg1: () => KotlinType)
    // private computation: () => KotlinType;
    // private lazyValue: NotNullLazyValue<KotlinType>;
    // private storageManager: StorageManager;
    getDelegate(): KotlinType;
    isComputed(): boolean;
    refine(arg0: KotlinTypeRefiner): LazyWrappedType;
}