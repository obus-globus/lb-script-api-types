import type { DeclarationDescriptor } from '../../../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/DeclarationDescriptor.d.ts'
import type { AbstractLazyTypeParameterDescriptor } from '../../../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/impl/AbstractLazyTypeParameterDescriptor.d.ts'
import type { LazyJavaResolverContext } from '../../../../../../../../../kotlin/reflect/jvm/internal/impl/load/java/lazy/LazyJavaResolverContext.d.ts'
import type { JavaTypeParameter } from '../../../../../../../../../kotlin/reflect/jvm/internal/impl/load/java/structure/JavaTypeParameter.d.ts'
import type { KotlinType } from '../../../../../../../../../kotlin/reflect/jvm/internal/impl/types/KotlinType.d.ts'
export class LazyJavaTypeParameterDescriptor extends AbstractLazyTypeParameterDescriptor {
    static toString(paramarg0: DeclarationDescriptor): string;
    constructor(arg0: LazyJavaResolverContext, arg1: JavaTypeParameter, arg2: number, arg3: DeclarationDescriptor)
    // private c: LazyJavaResolverContext;
    // private javaTypeParameter: JavaTypeParameter;
    // private computeNotEnhancedBounds(): KotlinType[];
    processBoundsWithoutCycles(arg0: KotlinType[]): KotlinType[];
    reportSupertypeLoopError(arg0: KotlinType): void;
    resolveUpperBounds(): KotlinType[];
}