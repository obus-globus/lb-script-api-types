import type { KotlinBuiltIns } from '../../../../../../../kotlin/reflect/jvm/internal/impl/builtins/KotlinBuiltIns.d.ts'
import type { ClassifierDescriptor } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/ClassifierDescriptor.d.ts'
import type { SupertypeLoopChecker } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/SupertypeLoopChecker.d.ts'
import type { TypeParameterDescriptor } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/TypeParameterDescriptor.d.ts'
import type { AbstractTypeParameterDescriptor } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/impl/AbstractTypeParameterDescriptor.d.ts'
import type { StorageManager } from '../../../../../../../kotlin/reflect/jvm/internal/impl/storage/StorageManager.d.ts'
import type { AbstractTypeConstructor } from '../../../../../../../kotlin/reflect/jvm/internal/impl/types/AbstractTypeConstructor.d.ts'
import type { KotlinType } from '../../../../../../../kotlin/reflect/jvm/internal/impl/types/KotlinType.d.ts'
export class AbstractTypeParameterDescriptor$TypeParameterTypeConstructor extends AbstractTypeConstructor {
    constructor(null_: AbstractTypeParameterDescriptor, arg1: StorageManager, arg2: SupertypeLoopChecker)
    // private supertypeLoopChecker: SupertypeLoopChecker;
    computeSupertypes(): KotlinType[];
    defaultSupertypeIfEmpty(): KotlinType;
    getBuiltIns(): KotlinBuiltIns;
    getDeclarationDescriptor(): ClassifierDescriptor;
    getParameters(): TypeParameterDescriptor[];
    getSupertypeLoopChecker(): SupertypeLoopChecker;
    isDenotable(): boolean;
    isSameClassifier(arg0: ClassifierDescriptor): boolean;
    processSupertypesWithoutCycles(arg0: KotlinType[]): KotlinType[];
    reportSupertypeLoopError(arg0: KotlinType): void;
    toString(): string;
}