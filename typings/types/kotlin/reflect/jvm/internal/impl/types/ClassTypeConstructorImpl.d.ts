import type { ClassDescriptor } from '../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/ClassDescriptor.d.ts'
import type { SupertypeLoopChecker } from '../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/SupertypeLoopChecker.d.ts'
import type { TypeParameterDescriptor } from '../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/TypeParameterDescriptor.d.ts'
import type { StorageManager } from '../../../../../../kotlin/reflect/jvm/internal/impl/storage/StorageManager.d.ts'
import type { AbstractClassTypeConstructor } from '../../../../../../kotlin/reflect/jvm/internal/impl/types/AbstractClassTypeConstructor.d.ts'
export class ClassTypeConstructorImpl extends AbstractClassTypeConstructor {
    constructor(arg0: ClassDescriptor, arg1: TypeParameterDescriptor[], arg2: E[], arg3: StorageManager)
    // private classDescriptor: ClassDescriptor;
    readonly parameters: TypeParameterDescriptor[];
    readonly supertypes: E[];
    computeSupertypes(): E[];
    getDeclarationDescriptor(): ClassDescriptor;
    getParameters(): TypeParameterDescriptor[];
    getSupertypeLoopChecker(): SupertypeLoopChecker;
    isDenotable(): boolean;
    toString(): string;
}