import type { ClassDescriptor } from '../../../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/ClassDescriptor.d.ts'
import type { SupertypeLoopChecker } from '../../../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/SupertypeLoopChecker.d.ts'
import type { TypeParameterDescriptor } from '../../../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/TypeParameterDescriptor.d.ts'
import type { FqName } from '../../../../../../../../../kotlin/reflect/jvm/internal/impl/name/FqName.d.ts'
import type { NotNullLazyValue } from '../../../../../../../../../kotlin/reflect/jvm/internal/impl/storage/NotNullLazyValue.d.ts'
import type { AbstractClassTypeConstructor } from '../../../../../../../../../kotlin/reflect/jvm/internal/impl/types/AbstractClassTypeConstructor.d.ts'
import type { KotlinType } from '../../../../../../../../../kotlin/reflect/jvm/internal/impl/types/KotlinType.d.ts'
export class LazyJavaClassDescriptor$LazyJavaClassTypeConstructor extends AbstractClassTypeConstructor {
    constructor(null_: LazyJavaClassDescriptor$LazyJavaClassTypeConstructor)
    readonly parameters: NotNullLazyValue<TypeParameterDescriptor[]>;
    computeSupertypes(): E[];
    getDeclarationDescriptor(): ClassDescriptor;
    getParameters(): TypeParameterDescriptor[];
    // private getPurelyImplementedSupertype(): KotlinType;
    // private getPurelyImplementsFqNameFromAnnotation(): FqName;
    getSupertypeLoopChecker(): SupertypeLoopChecker;
    isDenotable(): boolean;
    toString(): string;
}