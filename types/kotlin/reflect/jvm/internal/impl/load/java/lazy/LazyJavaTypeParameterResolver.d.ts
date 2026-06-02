import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { DeclarationDescriptor } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/DeclarationDescriptor.d.ts'
import type { TypeParameterDescriptor } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/TypeParameterDescriptor.d.ts'
import type { LazyJavaResolverContext } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/load/java/lazy/LazyJavaResolverContext.d.ts'
import type { TypeParameterResolver } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/load/java/lazy/TypeParameterResolver.d.ts'
import type { LazyJavaTypeParameterDescriptor } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/load/java/lazy/descriptors/LazyJavaTypeParameterDescriptor.d.ts'
import type { JavaTypeParameter } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/load/java/structure/JavaTypeParameter.d.ts'
import type { JavaTypeParameterListOwner } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/load/java/structure/JavaTypeParameterListOwner.d.ts'
import type { MemoizedFunctionToNullable } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/storage/MemoizedFunctionToNullable.d.ts'
export class LazyJavaTypeParameterResolver extends Object implements TypeParameterResolver {
    constructor(arg0: LazyJavaResolverContext, arg1: DeclarationDescriptor, arg2: JavaTypeParameterListOwner, arg3: number)
    // private c: LazyJavaResolverContext;
    // private containingDeclaration: DeclarationDescriptor;
    // private resolve: MemoizedFunctionToNullable<JavaTypeParameter, LazyJavaTypeParameterDescriptor>;
    // private typeParameters: Map<JavaTypeParameter, number>;
    // private typeParametersIndexOffset: number;
    resolveTypeParameter(arg0: JavaTypeParameter): TypeParameterDescriptor;
}