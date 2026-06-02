import type { KotlinBuiltIns } from '../../../../../../kotlin/reflect/jvm/internal/impl/builtins/KotlinBuiltIns.d.ts'
import type { ClassDescriptor } from '../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/ClassDescriptor.d.ts'
import type { ClassifierDescriptor } from '../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/ClassifierDescriptor.d.ts'
import type { StorageManager } from '../../../../../../kotlin/reflect/jvm/internal/impl/storage/StorageManager.d.ts'
import type { AbstractTypeConstructor } from '../../../../../../kotlin/reflect/jvm/internal/impl/types/AbstractTypeConstructor.d.ts'
import type { KotlinType } from '../../../../../../kotlin/reflect/jvm/internal/impl/types/KotlinType.d.ts'
export abstract class AbstractClassTypeConstructor extends AbstractTypeConstructor {
    constructor(arg0: StorageManager)
    defaultSupertypeIfEmpty(): KotlinType;
    getAdditionalNeighboursInSupertypeGraph(arg0: boolean): E[];
    getBuiltIns(): KotlinBuiltIns;
    getDeclarationDescriptor(): ClassDescriptor;
    isSameClassifier(arg0: ClassifierDescriptor): boolean;
}